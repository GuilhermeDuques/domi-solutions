import type { Metadata } from "next";
import Script from "next/script";
import { metadataBase } from "./lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase,
  applicationName: "DOMI Solutions",
  title: { default: "DOMI Solutions | Desenvolvimento de sites e sistemas sob medida", template: "%s | DOMI Solutions" },
  description: "Desenvolvimento de sites institucionais, lojas virtuais, sistemas sob medida, ERPs, marketplaces e integrações para empresas em todo o Brasil.",
  keywords: ["desenvolvimento de sites", "criação de site profissional", "sistema sob medida", "desenvolvimento de software", "loja virtual", "e-commerce", "marketplace", "ERP", "integrações", "Next.js", "TypeScript"],
  authors: [{ name: "DOMI Solutions" }],
  creator: "DOMI Solutions",
  publisher: "DOMI Solutions",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: { type: "website", locale: "pt_BR", siteName: "DOMI Solutions", title: "DOMI Solutions | Desenvolvimento de sites e sistemas sob medida", description: "Sites, lojas virtuais, sistemas e integrações feitos para o seu negócio." },
  twitter: { card: "summary_large_image", title: "DOMI Solutions | Software sob medida", description: "Sites, lojas virtuais, sistemas e integrações feitos para o seu negócio." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  category: "technology",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}</Script></>}
      </body>
    </html>
  );
}
