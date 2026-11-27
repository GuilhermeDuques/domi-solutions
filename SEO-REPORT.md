# Relatório técnico de SEO — DOMI Solutions

Data da implementação: 27/11/2026

## Escopo entregue

| Área | Implementação | Status |
| --- | --- | --- |
| Indexação | `robots.txt` permite as páginas públicas e bloqueia `/api/` | Implementado |
| Descoberta | `sitemap.xml` gera Home + 3 cases automaticamente | Implementado, depende do domínio |
| Canônicos | URL canônica na Home e em cada case | Implementado, depende do domínio |
| Metadados | Titles e descriptions únicos, relevantes e em português | Implementado |
| Social | Open Graph e Twitter Card com imagem gerada para Home e cada case | Implementado |
| Estrutura | Hierarquia semântica, links internos rastreáveis e textos âncora descritivos | Implementado |
| Dados estruturados | `ProfessionalService`, `WebSite`, `FAQPage` e `CreativeWork` | Implementado |
| Conteúdo | Serviços, FAQ e cases com entidades, integrações, métricas e termos de busca reais | Implementado |
| UX móvel | Conteúdo e imagens seguem layout responsivo | Implementado |
| Mensuração | Suporte opcional a GA4 por variável de ambiente | Implementado |

## Páginas elegíveis para indexação

- `/` — desenvolvimento de sites, lojas virtuais, sistemas sob medida, marketplace, ERP e integrações.
- `/projetos/real-deal` — case de marketplace de luxo autenticado.
- `/projetos/resales` — case de marketplace B2B para brechós de luxo.
- `/projetos/domi-pro` — case de ERP/SaaS para revenda de luxo.

## Arquivos-chave

- `app/layout.tsx`: metadados globais, robôs, Open Graph, Twitter, Google Search Console e GA4.
- `app/sitemap.ts` e `app/robots.ts`: descoberta e regras de rastreamento.
- `app/opengraph-image.tsx` e `app/projetos/[slug]/opengraph-image.tsx`: imagens compartilháveis por URL.
- `app/page.tsx`: conteúdo SEO da Home, FAQ visível e JSON-LD.
- `app/projetos/[slug]/page.tsx`: metadados e JSON-LD específicos de cada case.
- `.env.example`: todas as variáveis de ativação.

## Verificação executada

`npm run build` foi concluído com sucesso, incluindo Home, 3 cases, ícone, imagens Open Graph, `robots.txt` e `sitemap.xml`.

## Ações obrigatórias antes/depois do deploy

Estas etapas precisam ser feitas pelo responsável pelo domínio. Sem elas, não é correto prometer indexação ou crescimento de tráfego.

1. Definir `NEXT_PUBLIC_SITE_URL` na hospedagem com o domínio final e HTTPS, por exemplo `https://www.seudominio.com.br`.
2. Publicar o site no domínio final, garantindo redirecionamento único entre `www` e não-`www`, sempre para HTTPS.
3. Criar a propriedade do domínio no Google Search Console e preencher `GOOGLE_SITE_VERIFICATION`.
4. Enviar `https://SEU-DOMINIO/sitemap.xml` no Search Console.
5. Solicitar indexação da Home e das três páginas de case usando a Inspeção de URL.
6. Configurar `NEXT_PUBLIC_GA_ID` (GA4) e, idealmente, vincular Search Console ao GA4.
7. Validar URLs publicadas no Rich Results Test, no PageSpeed Insights e no validador de compartilhamento da rede social utilizada.

## Recomendações de crescimento (próximos 90 dias)

1. Publicar estudos de caso adicionais com problema, solução, stack, métricas autorizadas e imagens próprias.
2. Criar páginas de intenção específica, como “desenvolvimento de marketplace”, “ERP para revenda de luxo”, “criação de loja virtual” e “desenvolvimento de sistemas sob medida”. Cada uma deve resolver uma intenção real, sem páginas duplicadas por cidade ou variações artificiais de palavra-chave.
3. Produzir artigos práticos que respondam dúvidas do público-alvo e tenham links contextuais para serviços e cases.
4. Buscar menções e links editoriais legítimos de parceiros, clientes, portfólios e perfis profissionais. Não comprar links nem criar redes artificiais.
5. Revisar no Search Console, mensalmente, consultas, CTR, páginas indexadas, páginas excluídas e Core Web Vitals.

## Limites honestos

SEO não é à prova de falhas e ninguém pode garantir posição ou aumento “drástico” de tráfego: o Google decide rastreamento, indexação e ranking. A implementação entrega a fundação técnica e de conteúdo correta; domínio público, autoridade, concorrência, qualidade contínua do conteúdo e sinais externos determinam o resultado.

## Referências técnicas

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Guia de SEO para desenvolvedores do Google](https://developers.google.com/search/docs/fundamentals/get-started-developers)
- [Metadados e OG Images no Next.js](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Sitemap no Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Robots no Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
