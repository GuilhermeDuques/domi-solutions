import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { projects } from "./projetos/data";
import guilherme from "../assets/guilherme.png";
import victor from "../assets/victor.png";

const services = [
  ["Sites institucionais", "Uma presença digital clara, rápida e que dá confiança para sua marca."],
  ["Lojas virtuais", "Uma experiência de compra simples, integrada ao jeito que sua operação trabalha."],
  ["Sistemas sob medida", "Ferramentas para reduzir tarefas manuais e organizar sua operação."],
  ["Integrações", "Conectamos pagamentos, ERPs, CRMs e os serviços que o seu negócio já usa."],
];

const steps = [
  ["01", "Conversa", "Entendemos o que você precisa e o que já existe."],
  ["02", "Proposta", "Escopo, prazo e investimento combinados antes de começar."],
  ["03", "Desenvolvimento", "Entregas em partes para você acompanhar e ajustar no caminho."],
  ["04", "Entrega e suporte", "Publicamos o projeto e seguimos disponíveis para as próximas etapas."],
];

const faqs = [
  ["A DOMI Solutions cria sites e lojas virtuais?", "Sim. Desenvolvemos sites institucionais e lojas virtuais rápidas, responsivas e pensadas para transformar visitas em oportunidades de negócio."],
  ["Vocês desenvolvem sistemas sob medida?", "Sim. Criamos sistemas, ERPs, CRMs, marketplaces e automações para resolver processos específicos de cada empresa."],
  ["É possível integrar o sistema com outros serviços?", "Sim. Trabalhamos com integrações de pagamento, logística, CRM, ERP, inteligência artificial e APIs que já fazem parte da sua operação."],
  ["A DOMI atende empresas de todo o Brasil?", "Sim. Nosso processo é digital e atendemos negócios em todo o Brasil, da descoberta à publicação e suporte."],
];

export const metadata: Metadata = {
  title: "Desenvolvimento de sites, e-commerce e sistemas sob medida",
  description: "Criação de sites profissionais, lojas virtuais, marketplaces, ERPs e sistemas sob medida. Conheça a DOMI Solutions e conte sua ideia.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <SeoStructuredData />
      <header className="hero" id="topo">
        <div className="hero__glow hero__glow--blue" />
        <div className="hero__glow hero__glow--orange" />
        <div className="container hero__container">
          <nav className="nav" aria-label="Navegação principal">
            <a href="#topo" className="brand" aria-label="DOMI Solutions - Início"><span>D</span> DOMI <em>Solutions</em></a>
            <div className="nav__links">
              <a href="#trabalhos">Trabalhos</a><a href="#servicos">Serviços</a><a href="#processo">Como trabalhamos</a><a href="#time">Quem somos</a>
              <ContactForm compact />
            </div>
          </nav>
          <div className="hero__content">
            <div className="hero__copy">
              <p className="pill"><i /> Software sob medida</p>
              <h1>Tem uma ideia para o seu negócio? <strong>A gente coloca ela no ar.</strong></h1>
              <p className="hero__description">Sites, lojas virtuais e sistemas sob medida, do primeiro rascunho ao lançamento. Você explica o que precisa e a gente cuida do resto.</p>
              <div className="hero__actions"><ContactForm /><a className="button button--ghost" href="#trabalhos">Ver trabalhos</a></div>
              <p className="hero__note">Do planejamento ao suporte, sem complicação.</p>
            </div>
            <div className="hero-card" aria-hidden="true">
              <div className="hero-card__bar"><span /><span /><span /></div>
              <div className="hero-card__title">Sua ideia<br /><b>em movimento.</b></div>
              <div className="hero-card__chart"><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="hero-card__badge">● projeto em construção</div>
            </div>
          </div>
        </div>
      </header>

      <section className="band" aria-label="Especialidades">Sites <span>/</span> Lojas virtuais <span>/</span> Sistemas de gestão <span>/</span> Integrações <span>/</span> Pagamentos online</section>

      <section id="trabalhos" className="section section--light">
        <div className="container"><SectionTitle eyebrow="Portfólio" title="Projetos que a gente entregou" />
          <div className="projects">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
      </section>

      <section id="servicos" className="section section--dark"><div className="container"><SectionTitle eyebrow="Serviços" title="O que fazemos" description="Do site simples ao sistema completo, sempre desenhado para o jeito que o seu negócio funciona." light /><div className="services">{services.map(([title, description]) => <article className="service" key={title}><span>↗</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section id="processo" className="section section--indigo"><div className="container"><SectionTitle eyebrow="Processo" title="Como trabalhamos" light /><div className="steps">{steps.map(([number, title, description]) => <article className="step" key={number}><b>{number}</b><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section id="time" className="section section--light"><div className="container"><SectionTitle eyebrow="Time" title="Quem somos" /><div className="team"><TeamCard image={guilherme} name="Guilherme Duques" links={{ LinkedIn: "https://linkedin.com/in/guilhermeduques", GitHub: "https://github.com/GuilhermeDuques" }}>Formado em Engenharia de Software pelo INFNET. Trabalha com .NET, Next.js e TypeScript, com experiência em sistemas corporativos e e-commerce.</TeamCard><TeamCard image={victor} name="Victor Coelho Robinson" links={{ LinkedIn: "https://www.linkedin.com/in/victorcoelhorobinson/", GitHub: "https://github.com/Vikmcr99" }}>Formado em Engenharia de Software pelo Infnet. Trabalha com TypeScript, React, Next.js, Node.js e Java com Spring Boot.</TeamCard></div></div></section>

      <section className="section section--light faq-section"><div className="container"><SectionTitle eyebrow="Dúvidas frequentes" title="Tecnologia para o próximo passo do seu negócio" /><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="contact-section"><div className="container contact-section__grid"><div><p className="eyebrow">Contato</p><h2>Vamos conversar sobre <span>o seu projeto.</span></h2><p>Conte o que você precisa e nós retornaremos o mais breve possível.</p><ContactForm /></div><aside><p><small>E-MAIL</small><b><a href="mailto:domi-solutions@hotmail.com">domi-solutions@hotmail.com</a></b></p><p><small>WHATSAPP</small><b>9 7473-5995</b></p><p><small>ATENDIMENTO</small><b>Online, para todo o Brasil.</b></p><p><small>PRÓXIMO PASSO</small><b>Preencha o formulário e conte a sua ideia.</b></p></aside></div></section>
      <footer><div className="container">© {new Date().getFullYear()} DOMI Solutions <span>Software feito para o seu negócio.</span></div></footer>
    </main>
  );
}

function SectionTitle({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) { return <div className={`section-title ${light ? "section-title--light" : ""}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p>{description}</p>}</div>; }
function Tags({ values }: { values: string[] }) { return <div className="tags">{values.map((value) => <span key={value}>{value}</span>)}</div>; }
function TeamCard({ image, name, links, children }: { image: typeof victor; name: string; links: Record<string, string>; children: React.ReactNode }) { return <article className="team-card"><Image src={image} alt={name} width={124} height={124} /><div><h3>{name}</h3><p className="role">Desenvolvedor full stack</p><p>{children}</p><div className="team-card__links">{Object.entries(links).map(([label, url]) => <a href={url} key={label} target="_blank" rel="noreferrer">{label} →</a>)}</div></div></article>; }
function ProjectCard({ project }: { project: (typeof projects)[number] }) { return <article className={`project project--${project.slug}`}><div className="project__visual"><Image className="project__screen" src={project.heroImage} alt="" /><div className="project__veil" /><small>{project.label}</small><div className="project__identity"><span className="project__logo-chip"><Image className="project__logo" src={project.logo} alt={`Logo ${project.name}`} /></span><b>{project.name}</b></div></div><div className="project__body"><h3>{project.category}</h3><p>{project.summary}</p><Tags values={project.tags} /><Link href={`/projetos/${project.slug}`} className="project__link">Ver projeto em detalhes <span>→</span></Link></div></article>; }
function SeoStructuredData() { const data = { "@context": "https://schema.org", "@graph": [{ "@type": "ProfessionalService", "@id": "#organization", name: "DOMI Solutions", description: "Desenvolvimento de sites, lojas virtuais, sistemas sob medida, ERPs, marketplaces e integrações.", email: "domi-solutions@hotmail.com", areaServed: { "@type": "Country", name: "Brasil" }, serviceType: ["Desenvolvimento de sites", "Desenvolvimento de software", "E-commerce", "Sistemas sob medida", "Integração de sistemas"], sameAs: ["https://linkedin.com/in/guilhermeduques", "https://www.linkedin.com/in/victorcoelhorobinson/"] }, { "@type": "WebSite", "@id": "#website", name: "DOMI Solutions", inLanguage: "pt-BR", publisher: { "@id": "#organization" } }, { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }] }; return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />; }
