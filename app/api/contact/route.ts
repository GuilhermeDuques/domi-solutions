import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  idea?: unknown;
  company?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
  return value.replace(/[&<>'"]/g, (character) => entities[character] ?? character);
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Dados inválidos." }, { status: 400 });
  }

  const name = text(payload.name);
  const email = text(payload.email).toLowerCase();
  const phone = text(payload.phone);
  const idea = text(payload.idea);

  // Campo invisível: bots costumam preenchê-lo. Respondemos normalmente para não revelar a proteção.
  if (text(payload.company)) return NextResponse.json({ ok: true });

  if (name.length < 2 || !emailPattern.test(email) || idea.length < 15) {
    return NextResponse.json({ message: "Confira seu nome, e-mail e a descrição da ideia." }, { status: 400 });
  }

  const contactEmail = process.env.CONTACT_EMAIL;
  const from = process.env.EMAIL_FROM;
  const apiKey = process.env.RESEND_API_KEY;

  if (!contactEmail || !from || !apiKey) {
    console.error("Configuração de e-mail ausente. Defina CONTACT_EMAIL, EMAIL_FROM e RESEND_API_KEY.");
    return NextResponse.json({ message: "O formulário ainda não está configurado. Tente novamente mais tarde." }, { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [contactEmail],
      replyTo: email,
      subject: `Nova ideia recebida: ${name}`,
      text: `Nova mensagem enviada pelo site DOMI Solutions\n\nNome: ${name}\nE-mail: ${email}\nWhatsApp: ${phone || "Não informado"}\n\nIdeia:\n${idea}`,
      html: `<h1>Nova ideia pelo site</h1><p><strong>Nome:</strong> ${escapeHtml(name)}</p><p><strong>E-mail:</strong> ${escapeHtml(email)}</p><p><strong>WhatsApp:</strong> ${escapeHtml(phone || "Não informado")}</p><p><strong>Ideia:</strong></p><p>${escapeHtml(idea).replace(/\n/g, "<br />")}</p>`,
    });
    if (error) {
      console.error("Resend recusou o envio:", error);
      return NextResponse.json({ message: "Não conseguimos enviar agora. Tente novamente em alguns instantes." }, { status: 502 });
    }
  } catch (error) {
    console.error("Erro ao enviar contato:", error);
    return NextResponse.json({ message: "Não conseguimos enviar agora. Tente novamente em alguns instantes." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, message: "Mensagem enviada com sucesso." });
}
