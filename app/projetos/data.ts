import type { StaticImageData } from "next/image";
import domiLogo from "../../assets/Logótipo minimalista DOMIPro.png";
import domiFinanceiro from "../../assets/domi_financeiro.png";
import domiHome from "../../assets/domi_home.png";
import realDealLogo from "../../assets/REALDEAL_MONOGRAMA_BRANCO.png";
import realDealCatalogo from "../../assets/realdeal_catalogo.png";
import realDealHome from "../../assets/realdeal_home.png";
import realDealVenda from "../../assets/realdeal_venda.png";
import resalesLogo from "../../assets/fav_icon_resales_branco.png";
import resalesHome from "../../assets/resales_home.png";
import resalesMeuBrecho from "../../assets/resales_meubrecho.png";

export type Project = {
  slug: "real-deal" | "resales" | "domi-pro";
  name: string;
  label: string;
  category: string;
  summary: string;
  description: string;
  url: string;
  tags: string[];
  logo: StaticImageData;
  heroImage: StaticImageData;
  story: string;
  stats: { value: string; label: string }[];
  integrations: string[];
  screenshots: { image: StaticImageData; alt: string }[];
  deliverables: string[];
  features: { title: string; description: string }[];
};

export const projects: Project[] = [
  {
    slug: "real-deal",
    name: "Real Deal",
    label: "NO AR",
    category: "Marketplace de luxo autenticado",
    summary: "Experiência de compra e venda de peças selecionadas, com catálogo, curadoria e uma jornada protegida.",
    description: "Uma plataforma digital para aproximar quem compra e quem vende itens de luxo second hand. O projeto reúne catálogo, descoberta de marcas e uma experiência pensada para transmitir confiança em cada etapa.",
    url: "https://www.realdeal.com.br/",
    tags: ["Next.js", "TypeScript", "E-commerce"],
    logo: realDealLogo,
    heroImage: realDealHome,
    story: "A Real Deal transforma a experiência de revenda de luxo em uma jornada digital de ponta a ponta: descoberta, catálogo, anúncio, autenticação, pagamento e pós-venda. A plataforma precisava unir uma interface aspiracional a uma operação robusta por trás de cada item.",
    stats: [{ value: "+120", label: "usuários ativos" }, { value: "+R$ 160 mil", label: "em vendas processadas" }, { value: "Brasil", label: "operação nacional" }],
    integrations: ["Pagar.me", "Melhor Envio", "Gemini", "Pagamentos online"],
    screenshots: [
      { image: realDealHome, alt: "Página inicial da Real Deal" },
      { image: realDealCatalogo, alt: "Catálogo de produtos da Real Deal" },
      { image: realDealVenda, alt: "Fluxo de venda da Real Deal" },
    ],
    deliverables: ["Experiência completa de marketplace", "Catálogo, busca e descoberta por marcas", "Fluxo de anúncio, autenticação e venda", "Integrações de pagamento, frete e IA"],
    features: [
      { title: "Catálogo de luxo", description: "Descoberta por categoria, marca e seleções semanais para tornar a navegação mais fluida." },
      { title: "Jornada protegida", description: "Fluxo pensado para unir autenticação, compra segura e acompanhamento da entrega." },
      { title: "Venda simplificada", description: "Um caminho claro para cadastrar itens e iniciar uma venda com o suporte da equipe." },
    ],
  },
  {
    slug: "resales",
    name: "Resales",
    label: "NO AR",
    category: "Marketplace B2B para brechós de luxo",
    summary: "Um acervo compartilhado para resellers profissionais, com disponibilidade em tempo real e acesso verificado.",
    description: "O Resales conecta brechós de luxo em uma operação B2B. A plataforma organiza o acervo, cria uma área para relacionamento entre parceiros e restringe o acesso a empresas com CNPJ verificado.",
    url: "https://www.resales.com.br/",
    tags: ["Next.js", "TypeScript", "B2B"],
    logo: resalesLogo,
    heroImage: resalesHome,
    story: "O Resales nasceu para conectar, em uma mesma rede B2B, os acervos de brechós profissionais. Em vez de depender de trocas manuais, os parceiros consultam disponibilidade, fazem negócios e acompanham a própria operação em um ambiente exclusivo.",
    stats: [{ value: "B2B", label: "rede profissional" }, { value: "Ao vivo", label: "disponibilidade de acervo" }, { value: "CNPJ", label: "acesso verificado" }],
    integrations: ["Vindi", "Gemini", "Pagamentos B2B", "Validação de CNPJ"],
    screenshots: [
      { image: resalesHome, alt: "Acervo e filtros do Resales" },
      { image: resalesMeuBrecho, alt: "Área de gestão de brechó no Resales" },
    ],
    deliverables: ["Marketplace B2B com acesso controlado", "Acervo com busca e disponibilidade em tempo real", "Área operacional de cada brechó", "Integrações de cobrança e inteligência artificial"],
    features: [
      { title: "Acervo integrado", description: "Consulta de peças disponíveis entre parceiros em um ambiente único." },
      { title: "Acesso profissional", description: "Entrada restrita a CNPJs verificados para preservar a rede de resellers." },
      { title: "Operação organizada", description: "Ferramentas para o brechó acompanhar conta, autenticação, vendas e relacionamento." },
    ],
  },
  {
    slug: "domi-pro",
    name: "DOMI Pro",
    label: "PLATAFORMA SAAS",
    category: "Gestão para revenda de luxo",
    summary: "Sistema operacional para concentrar estoque, consignação, vendas, finanças e relacionamento em um só lugar.",
    description: "O DOMI Pro foi estruturado para reduzir a fragmentação da operação de uma revenda de luxo. A plataforma reúne atalhos de rotina, módulos de gestão e informações do negócio em uma interface direta.",
    url: "https://domitech.pro/",
    tags: ["SaaS", "CRM", "Gestão"],
    logo: domiLogo,
    heroImage: domiHome,
    story: "O DOMI Pro nasceu como um ERP vertical para o mercado de luxo. A proposta foi reunir toda a operação de uma revenda em uma única plataforma, com visão clara do negócio e menos dependência de planilhas ou sistemas desconectados.",
    stats: [{ value: "1", label: "operação centralizada" }, { value: "360°", label: "visão do negócio" }, { value: "ERP", label: "feito para luxo" }],
    integrations: ["Melhor Envio", "CRM", "Financeiro", "Logística"],
    screenshots: [
      { image: domiHome, alt: "Painel inicial do DOMI Pro" },
      { image: domiFinanceiro, alt: "Módulo financeiro do DOMI Pro" },
    ],
    deliverables: ["ERP vertical para revenda de luxo", "CRM, financeiro, estoque e logística", "Vendas normais e consignadas", "Integração operacional com Melhor Envio"],
    features: [
      { title: "Operação centralizada", description: "Cadastro, estoque, consignação e rotinas de venda na mesma ferramenta." },
      { title: "Visão financeira", description: "Informações financeiras e indicadores para apoiar a gestão da operação." },
      { title: "Relacionamento", description: "Recursos de CRM e processos comerciais conectados à rotina da revenda." },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
