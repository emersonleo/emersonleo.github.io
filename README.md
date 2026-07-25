# Site — Priscila Santos · Psicóloga (CRP 02/29363)

Site institucional/apresentação de uma psicóloga clínica, focado em **credibilidade**,
**conversão via WhatsApp** e **SEO**. Construído com **Astro + Tailwind CSS + TypeScript**
(saída 100% estática), com fotos otimizadas, dados estruturados (Schema.org) e um
filtro interativo de especialidades.

> **Tom:** formal, sério e acolhedor — presença digital de uma profissional de saúde.
> **Idioma:** Português (`pt-BR`), com arquitetura preparada para uma futura versão em inglês.

---

## 🚀 Rodando localmente

Pré-requisitos: **Node 18+** (testado no Node 24) e npm.

```bash
npm install        # instala as dependências
npm run dev        # servidor de desenvolvimento em http://localhost:4321
npm run build      # gera o site estático na pasta dist/
npm run preview    # pré-visualiza o build de produção
```

> ℹ️ **Sobre a instalação (npm 12+):** ao rodar `npm install`, o npm pode bloquear os
> scripts nativos de `sharp` (otimização de imagens) e `esbuild`. Este projeto já traz
> a aprovação em `package.json` (`allowScripts`). Se aparecer o aviso mesmo assim, rode:
>
> ```bash
> npm install-scripts approve sharp esbuild
> ```

---

## ✏️ O que a cliente edita (sem mexer no layout)

**Praticamente tudo o que é texto e contato está em um único arquivo:**

### `src/data/site.ts` — fonte única de verdade

| Quero mudar… | Onde |
|---|---|
| **Número de WhatsApp** | `contact.whatsappNumber` (só dígitos: `55` + DDD + número) |
| Mensagem pré-preenchida do WhatsApp | `contact.whatsappMessage` |
| **E-mail** | `contact.email` |
| **CRP**, nome, cidade | `profile.crp`, `profile.name`, `profile.city` |
| **Faixa etária do público** (ver ⚠️ abaixo) | `ageRange` — **muda o site inteiro em 1 linha** |
| LinkedIn / Instagram | `contact.linkedin`, `contact.instagram` |
| Textos do Hero, Sobre, Abordagem… | seções `hero`, `about`, `approach`, etc. |
| Especialidades (chips + textos) | `specialties.items` |
| Perguntas do FAQ | `faq.items` |
| Palavras-chave / título / descrição de SEO | `seo` |

### Trocar as **fotos**

As imagens ficam em [`src/assets/`](src/assets). Substitua os arquivos mantendo os
**mesmos nomes** (ou atualize o `import` no componente correspondente):

| Arquivo | Onde aparece |
|---|---|
| `priscila-capa-hero.jpg` | Hero (capa) — também vira a imagem de compartilhamento |
| `priscila-sobre-acolhedora.jpg` | Seção "Sobre" |
| `priscila-reflexiva.jpg` | Seção "Abordagem" |
| `priscila-trabalhando-horizontal.jpg` | Faixa larga entre seções |

Depois de trocar a capa, regenere a imagem de compartilhamento (Open Graph):

```bash
npm run make:og    # gera public/og-image.jpg (1200x630) a partir da capa
```

### Domínio final (importante para o SEO)

Ao definir o domínio, troque o placeholder `https://seu-dominio.com.br` em **3 lugares**:

1. [`astro.config.mjs`](astro.config.mjs) → `SITE_URL`
2. [`src/data/site.ts`](src/data/site.ts) → `seo.siteUrl`
3. [`public/robots.txt`](public/robots.txt) → linha `Sitemap:`

---

## 📋 Formulário de contato (opcional, sem backend)

O caminho principal de agendamento é o **WhatsApp**. Há também um formulário simples
na seção Contato que funciona de dois modos:

- **Padrão (sem configurar nada):** ao enviar, ele **abre o WhatsApp** já com nome e
  mensagem preenchidos. Não precisa de servidor.
- **Com Formspree (recebe por e-mail):** crie um formulário grátis em
  [formspree.io](https://formspree.io), copie o endpoint (`https://formspree.io/f/xxxx`)
  e cole em `contactSection.formspreeEndpoint` no `src/data/site.ts`.

---

## 🌐 Deploy

O build gera arquivos estáticos em `dist/` — hospede em qualquer serviço estático.
**Antes do deploy, defina o domínio final** (ver seção acima).

### Netlify
- Arraste a pasta `dist/` em [app.netlify.com/drop](https://app.netlify.com/drop), **ou**
- Conecte o repositório e use:
  - **Build command:** `npm run build`
  - **Publish directory:** `dist`
- (Opcional) O projeto já inclui [`netlify.toml`](netlify.toml).

### Vercel
- Importe o repositório em [vercel.com/new](https://vercel.com/new). O Vercel detecta o
  Astro automaticamente:
  - **Build command:** `npm run build` · **Output directory:** `dist`
- (Opcional) O projeto já inclui [`vercel.json`](vercel.json).

### Cloudflare Pages
- Em [dash.cloudflare.com](https://dash.cloudflare.com) → Workers & Pages → Create → Pages
  → conecte o repositório:
  - **Build command:** `npm run build` · **Build output directory:** `dist`

### GitHub Pages (opcional — este repo é `emersonleo.github.io`)
Como é um site estático, também dá para servir via GitHub Pages. Nesse caso, o `site`
em `astro.config.mjs` deve ser a URL do Pages e o conteúdo de `dist/` precisa ir para a
branch/publicação configurada. Recomendo Netlify/Vercel/Cloudflare pela simplicidade e
por domínio próprio.

---

## ✅ Checklist pós-deploy (SEO)

1. Confirme que o **domínio final** está nos 3 lugares (acima) e refaça o build.
2. Teste o preview de link (cole a URL no WhatsApp/LinkedIn) — deve mostrar a **og-image**.
3. Cadastre o site no **Google Search Console** e **envie o sitemap**:
   `https://SEU-DOMINIO/sitemap-index.xml`.
4. Valide os **dados estruturados** no
   [Rich Results Test](https://search.google.com/test/rich-results) (Psychologist / FAQ).
5. Rode um **Lighthouse** (aba do Chrome DevTools) — metas: 90+ em Performance, SEO,
   Best Practices e Acessibilidade.
6. Confira o **link do WhatsApp** clicando no botão em produção.

---

## 🗂️ Estrutura do projeto

```
├─ astro.config.mjs        # site URL, integrações (Tailwind, Sitemap), imagens
├─ tailwind.config.mjs     # design tokens (paleta verde sálvia, fontes, sombras)
├─ scripts/make-og.mjs     # gera a og-image 1200x630 a partir da capa
├─ public/
│  ├─ robots.txt
│  └─ og-image.jpg         # imagem de compartilhamento (gerada)
└─ src/
   ├─ assets/              # as 4 fotos (otimizadas em build para AVIF/WebP)
   ├─ data/site.ts         # ⭐ TODO o conteúdo e configuração editável
   ├─ styles/global.css    # base, componentes utilitários, animações
   ├─ layouts/BaseLayout.astro   # <head> com SEO/OG, JSON-LD, fontes, scripts
   ├─ components/
   │  ├─ Header.astro       # nav fixa + CTA WhatsApp + menu mobile
   │  ├─ Hero.astro         # capa (H1)
   │  ├─ About.astro        # sobre
   │  ├─ SectionDivider.astro  # faixa larga com frase
   │  ├─ Approach.astro     # Gestalt-terapia
   │  ├─ Specialties.astro  # ⭐ filtro interativo de especialidades
   │  ├─ Audience.astro     # "Você se identifica?"
   │  ├─ Credentials.astro  # formação e cursos
   │  ├─ Ethics.astro       # ética profissional (CFP)
   │  ├─ Faq.astro          # perguntas frequentes
   │  ├─ Contact.astro      # CTA WhatsApp + formulário
   │  ├─ Footer.astro
   │  ├─ WhatsAppFloat.astro # botão flutuante (mobile)
   │  └─ JsonLd.astro        # dados estruturados Schema.org
   └─ pages/index.astro     # monta a página (one-page)
```

---

## 🎨 Identidade visual

- **Paleta:** verde sálvia (`#8FA58C`) + neutros claros (`#FAF9F6`) + grafite (`#2E332F`)
  + verde profundo (`#3E4A3A`) + acento terracota sutil. Tokens em `tailwind.config.mjs`.
- **Tipografia:** **Fraunces** (títulos, serifada) + **Inter** (corpo) — auto-hospedadas
  (`@fontsource`), sem chamadas externas (melhor performance e privacidade).

## ⚖️ Conformidade ética (CFP)

O site foi escrito para respeitar as normas de publicidade do Conselho Federal de
Psicologia: **CRP visível** (header e rodapé), tom sóbrio e informativo, **sem** promessas
de cura, "antes e depois", números de sucesso ou depoimentos.

---

## ⚠️ Pendências (o que confirmar antes de publicar)

Veja também os comentários `[PREENCHER]` / `[CONFIRMAR]` no `src/data/site.ts`.

1. **Faixa etária do público** — hoje: *"adolescentes, adultos e idosos"* (conforme
   briefing). O currículo enfatiza *crianças, adolescentes e adultos*. Confirmar com a
   cliente e ajustar `ageRange` (uma linha) se necessário.
2. **Domínio final** — trocar o placeholder nos 3 lugares.
3. **Duração/frequência das sessões** — o FAQ traz `[50 minutos]` / `[semanal]` como
   exemplo; confirmar ou remover o item.
4. **Instagram** — incluir em `contact.instagram` se houver.
5. **WhatsApp/e-mail públicos** — confirmar que são os canais de agendamento desejados.
