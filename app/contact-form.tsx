"use client";

import { FormEvent, useRef, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  function open() {
    setStatus("idle");
    setMessage("");
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(data.message ?? "Não foi possível enviar a mensagem.");

      setStatus("success");
      setMessage("Recebemos sua ideia! Em breve entraremos em contato.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Tente novamente em alguns instantes.");
    }
  }

  return (
    <>
      <button className={compact ? "button button--small" : "button"} type="button" onClick={open}>
        {compact ? "Contato" : "Contar minha ideia"}
      </button>

      <dialog ref={dialogRef} className="contact-dialog" aria-labelledby="contact-title" onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
        <div className="contact-dialog__content">
          <button type="button" className="dialog-close" aria-label="Fechar formulário" onClick={close}>×</button>
          <p className="eyebrow">Conte sua ideia</p>
          <h2 id="contact-title">Vamos tirar seu projeto do papel.</h2>
          <p className="dialog-intro">Preencha os dados abaixo. Sua mensagem chegará direto para a nossa equipe.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                Nome
                <input name="name" autoComplete="name" required minLength={2} placeholder="Como podemos te chamar?" />
              </label>
              <label>
                E-mail
                <input name="email" type="email" autoComplete="email" required placeholder="voce@empresa.com" />
              </label>
            </div>
            <label>
              WhatsApp <span>(opcional)</span>
              <input name="phone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" />
            </label>
            <label>
              Sobre sua ideia
              <textarea name="idea" required minLength={15} rows={5} placeholder="Conte o que você quer criar, para quem é e o que espera resolver." />
            </label>
            <input className="honeypot" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <button className="button form-submit" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Enviando…" : "Enviar ideia"}
            </button>
            {message && <p className={`form-message form-message--${status}`} role="status">{message}</p>}
          </form>
        </div>
      </dialog>
    </>
  );
}
