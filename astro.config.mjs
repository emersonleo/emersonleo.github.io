// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// ⚠️ [PREENCHER] Troque pelo domínio final quando definido.
// Usado para canonical, og:url e sitemap.xml. Deve ser a URL pública real.
// Mantenha em sincronia com `seo.siteUrl` em src/data/site.ts.
const SITE_URL = "https://seu-dominio.com.br";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Saída estática (SSG) — melhor para SEO/performance e hospedagem simples.
  output: "static",
  integrations: [
    tailwind({
      // Injetamos o CSS base do Tailwind manualmente via src/styles/global.css
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  image: {
    // Habilita AVIF/WebP responsivos via o serviço de imagem embutido (sharp).
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  build: {
    // CSS inline pequeno para reduzir requisições e melhorar LCP.
    inlineStylesheets: "auto",
  },
});
