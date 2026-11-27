# DOMI Solutions

Site institucional em **Next.js + TypeScript**, com formulário de contato responsivo. As fotos do time permanecem em `assets/`.

## Rodar localmente

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`.

## Configurar o recebimento dos contatos

O envio é feito pela [Resend](https://resend.com). Preencha `.env.local` a partir de `.env.example`:

- `CONTACT_EMAIL`: e-mail que recebe as mensagens do formulário.
- `EMAIL_FROM`: remetente verificado na Resend.
- `RESEND_API_KEY`: chave da API da Resend.

As variáveis nunca são expostas ao navegador. O endpoint `POST /api/contact` valida os campos e define o e-mail do visitante como `replyTo`.

## Publicação

Publique em uma plataforma com suporte a Next.js, como a Vercel. No painel da plataforma, configure as mesmas três variáveis de ambiente antes de publicar.
