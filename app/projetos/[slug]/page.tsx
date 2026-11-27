import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "../data";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return { title: "Projeto não encontrado", robots: { index: false, follow: false } };
  const title = `${project.name}: ${project.category}`;
  return {
    title,
    description: `${project.summary} Case de desenvolvimento da DOMI Solutions.`,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: { type: "article", locale: "pt_BR", title, description: project.summary, siteName: "DOMI Solutions" },
    twitter: { card: "summary_large_image", title, description: project.summary },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className={`editorial-case editorial-case--${project.slug}`}>
      <CaseStructuredData project={project} />
      <nav className="editorial-nav container">
        <Link href="/#trabalhos">DOMI <span>Solutions</span></Link>
        <a href={project.url} target="_blank" rel="noreferrer">Abrir projeto <span>↗</span></a>
      </nav>

      <header className="editorial-hero container">
        <div className="editorial-hero__kicker"><span>{project.label}</span><span>Case study / 2026</span></div>
        <div className="editorial-hero__heading"><h1>{project.name}</h1></div>
        <div className="editorial-hero__intro"><p>{project.category}</p><p>{project.description}</p></div>
      </header>

      <figure className="editorial-cover container"><Image src={project.heroImage} alt={`Interface principal do ${project.name}`} priority /></figure>

      <section className="editorial-stats"><div className="container">{project.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></section>

      <section className="editorial-story container">
        <p className="editorial-label">01 — Contexto</p>
        <div><h2>Produto pensado para a operação real.</h2><p>{project.story}</p><a href={project.url} target="_blank" rel="noreferrer">Visitar {project.name} <span>↗</span></a></div>
      </section>

      <section className="editorial-build"><div className="container"><p className="editorial-label">02 — O que construímos</p><div className="editorial-build__list">{project.deliverables.map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3></article>)}</div></div></section>

      <section className="editorial-gallery container"><p className="editorial-label">03 — Interfaces</p><div className={`editorial-gallery__grid editorial-gallery__grid--${project.screenshots.length}`}>{project.screenshots.map(({ image, alt }, index) => <figure key={alt}><Image src={image} alt={alt} /><figcaption>0{index + 1} / {alt}</figcaption></figure>)}</div></section>

      <section className="editorial-system"><div className="container"><p className="editorial-label">04 — Ecossistema</p><div className="editorial-system__content"><h2>Integrações que sustentam a experiência.</h2><div>{project.integrations.map((integration) => <span key={integration}>{integration}</span>)}</div></div></div></section>

      <section className="editorial-next container"><p>Tem um produto complexo para colocar no ar?</p><Link href="/#contato">Vamos conversar <span>→</span></Link></section>
    </main>
  );
}

function CaseStructuredData({ project }: { project: (typeof projects)[number] }) { const data = { "@context": "https://schema.org", "@type": "CreativeWork", name: `${project.name} — case de desenvolvimento`, description: project.summary, inLanguage: "pt-BR", creator: { "@type": "Organization", name: "DOMI Solutions" }, about: project.category, keywords: project.tags.join(", ") }; return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />; }
