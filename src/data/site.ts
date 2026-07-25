/**
 * ────────────────────────────────────────────────────────────────────────────
 *  FONTE ÚNICA DE VERDADE — edite este arquivo para mudar textos e dados.
 * ────────────────────────────────────────────────────────────────────────────
 *  Aqui ficam TODOS os dados editáveis do site (nome, CRP, WhatsApp, e-mail,
 *  textos das seções, FAQ, especialidades...). Você não precisa mexer em nenhum
 *  componente de layout para atualizar o conteúdo.
 *
 *  Procure por "[PREENCHER]" para ver o que ainda falta confirmar/definir.
 */

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 1. DECISÃO PENDENTE — FAIXA ETÁRIA DO PÚBLICO                             ║
// ╚══════════════════════════════════════════════════════════════════════════╝
// Há divergência entre o briefing ("adolescentes, adultos e idosos") e o
// currículo (experiência com "crianças, adolescentes e adultos").
// PADRÃO ATUAL = o que a cliente pediu no briefing. Para trocar em TODO o site,
// altere APENAS a linha abaixo. Recomendação a confirmar com a cliente:
// "crianças, adolescentes, adultos e idosos" (se ela atende todas as faixas).
export const ageRange = "adolescentes, adultos e idosos";

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 2. IDENTIFICAÇÃO E CONTATO (dados oficiais do currículo)                  ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const profile = {
  name: "Priscila Santos",
  role: "Psicóloga clínica",
  crp: "CRP 02/29363",
  city: "Recife/PE",
  serviceMode: "Atendimento 100% online",
  languages: "Bilíngue (português e inglês)",
  approach: "Gestalt-terapia",
};

export const contact = {
  // WhatsApp — SÓ DÍGITOS, com código do país (55) + DDD + número.
  // ⚠️ Confirmar com a cliente se este é o número público para agendamentos.
  whatsappNumber: "5581983415584",
  whatsappDisplay: "(81) 98341-5584",
  // Mensagem pré-preenchida ao abrir o WhatsApp.
  whatsappMessage: "Olá, Priscila! Vim pelo seu site e gostaria de agendar uma consulta.",
  // ⚠️ Gmail pessoal (funciona). Sugestão futura: e-mail com domínio próprio.
  email: "priscila.pvsg2@gmail.com",
  linkedin: "https://www.linkedin.com/in/priscila-goncalves-psi",
  // [PREENCHER opcional] Instagram / outras redes — deixe "" se não houver.
  instagram: "",
};

/** Monta um link wa.me com a mensagem pré-preenchida e URL-encoded. */
export function whatsappUrl(message: string = contact.whatsappMessage): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 3. SEO / METADADOS                                                        ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const seo = {
  // URL pública COMPLETA da home (origem + subcaminho).
  // DEMO no GitHub Pages: inclui o "/priscila". Usada nos dados estruturados.
  // ⚠️ [PREENCHER] Ao usar domínio próprio, troque para "https://seu-dominio.com.br"
  // (sem subcaminho) e ajuste `site`/`base` em astro.config.mjs.
  siteUrl: "https://emersonleo.github.io/priscila",
  title: `${profile.name} · Psicóloga Online (Gestalt) — Adolescentes, Adultos e Idosos`,
  description:
    "Psicóloga clínica bilíngue (PT/EN) com atendimento 100% online em Gestalt-terapia. " +
    `Psicoterapia para ${ageRange}, brasileiros no exterior e escuta sensível a questões raciais. ${profile.crp}.`,
  ogImage: "/og-image.jpg", // gerada por `npm run make:og`
  keywords: [
    "psicóloga online",
    "psicoterapia online",
    "gestalt-terapia online",
    "psicóloga bilíngue português inglês",
    "terapia para brasileiros no exterior",
    "psicologia transcultural",
    "psicóloga negra",
    "escuta sensível a questões raciais",
    "terapia online para adolescentes",
    "apoio psicológico diabetes",
  ],
  locale: "pt_BR",
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 4. NAVEGAÇÃO                                                              ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const nav: { label: string; href: string }[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Formação", href: "#formacao" },
  { label: "Ética", href: "#etica" },
  { label: "Contato", href: "#contato" },
];

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 5. HERO / CAPA                                                            ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const hero = {
  // H1 — headline principal (único <h1> do site).
  headline: `Psicoterapia online para ${ageRange}`,
  subheadline:
    "Um espaço acolhedor para você se cuidar por inteiro. Atendimento 100% online e " +
    "bilíngue (português e inglês), com escuta sensível a partir da Gestalt-terapia.",
  primaryCta: "Agende sua consulta",
  secondaryCta: "Conheça meu trabalho",
  trustSignals: ["Atendimento online", "Bilíngue PT/EN", "Formação internacional (GATLA)"],
  imageAlt:
    "Priscila Santos, psicóloga clínica, de óculos, olhando para a câmera com expressão serena",
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 6. SOBRE                                                                  ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const about = {
  eyebrow: "Quem sou eu",
  title: "Uma escuta atenta para a sua história",
  paragraphs: [
    `Sou psicóloga clínica, bilíngue (português e inglês), e atendo ${ageRange}.`,
    "Minha experiência como intercambista despertou um interesse especial pela psicologia transcultural e pelos processos migratórios, ampliando meu olhar para as vivências de identidade, pertencimento, adaptação cultural e os desafios emocionais envolvidos em mudanças de contexto.",
    "Como mulher negra, valorizo uma escuta sensível às questões raciais e às diversas experiências que atravessam a vida das pessoas, oferecendo um espaço aberto e acolhedor para todos.",
    "Independentemente da demanda, procuro oferecer um cuidado que considere a pessoa para além do sintoma, respeitando sua história, seu contexto e sua forma única de estar no mundo.",
  ],
  imageAlt:
    "Priscila Santos segurando livros, com olhar acolhedor, em ambiente iluminado por luz natural",
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 7. ABORDAGEM (Gestalt-terapia)                                            ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const approach = {
  eyebrow: "Como eu trabalho",
  title: "Gestalt-terapia: um cuidado construído no encontro",
  paragraphs: [
    "Atuo a partir da Gestalt-terapia, uma abordagem construída no encontro. Busco oferecer uma presença genuína, uma escuta atenta e um espaço de acolhimento, caminhando ao lado de cada pessoa enquanto ela amplia sua consciência sobre si e descobre novas possibilidades de existir.",
    "Enxergo cada processo terapêutico em sua singularidade, considerando suas histórias, seus vínculos e os contextos em que o indivíduo está inserido. Mais do que focar apenas no sintoma, olhamos para a sua experiência no presente — no seu ritmo e do seu jeito.",
  ],
  pillars: [
    { title: "Presença genuína", text: "Um encontro real, sem julgamentos, onde você pode ser você." },
    { title: "Escuta atenta", text: "Atenção cuidadosa à sua experiência, no aqui e agora." },
    { title: "Você por inteiro", text: "Um cuidado que considera a pessoa para além do sintoma." },
    { title: "Sua singularidade", text: "Cada história, vínculo e contexto tratado como único." },
  ],
  imageAlt:
    "Priscila Santos com olhar reflexivo voltado para o lado, em ambiente tranquilo",
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 8. ESPECIALIDADES (com filtro interativo)                                 ║
// ╚══════════════════════════════════════════════════════════════════════════╝
// Ao clicar em um chip, o texto correspondente aparece + CTA de agendamento.
// Tom acolhedor, sem promessas de resultado (alinhado ao Código de Ética / CFP).
export interface Specialty {
  id: string;
  label: string;
  text: string;
}

export const specialties = {
  eyebrow: "Áreas de atuação",
  title: "Em que posso te acompanhar",
  intro:
    "Toque em uma área para entender como a terapia pode te ajudar. Cada processo é " +
    "individual e respeita o seu momento.",
  items: [
    {
      id: "ansiedade",
      label: "Ansiedade",
      text: "A ansiedade pode tomar conta do corpo e dos pensamentos, deixando tudo mais urgente e cansativo. Na terapia, criamos um espaço para compreender o que ela comunica e encontrar, no seu ritmo, formas mais leves de estar consigo e com o mundo.",
    },
    {
      id: "depressao",
      label: "Depressão",
      text: "Quando o desânimo e o vazio persistem, até as tarefas mais simples pesam. Caminho ao seu lado para acolher essa dor sem pressa, ajudando a reencontrar sentido e novas possibilidades de existir.",
    },
    {
      id: "luto",
      label: "Luto",
      text: "Perder alguém ou algo importante reorganiza toda a nossa vida. Ofereço um espaço de escuta para atravessar o luto no seu tempo, honrando o que foi e o que permanece.",
    },
    {
      id: "autoestima",
      label: "Autoestima",
      text: "A forma como nos enxergamos afeta cada relação e cada escolha. Na terapia, exploramos com cuidado essa relação com você mesmo(a), ampliando a consciência sobre quem você é para além das cobranças.",
    },
    {
      id: "conflitos-familiares",
      label: "Conflitos familiares",
      text: "As relações familiares carregam afeto e também tensões que, às vezes, travam. Podemos olhar juntos para esses vínculos e para o seu lugar neles, buscando formas mais saudáveis de se relacionar.",
    },
    {
      id: "racismo",
      label: "Racismo e questões raciais",
      text: "As experiências de racismo atravessam o emocional de formas profundas e nem sempre reconhecidas. Como mulher negra, ofereço uma escuta sensível a essas vivências, num espaço onde sua experiência é acolhida e legitimada.",
    },
    {
      id: "brasileiros-exterior",
      label: "Brasileiros no exterior / adaptação cultural",
      text: "Viver entre culturas mobiliza questões de identidade, pertencimento e adaptação. Com formação e vivência internacional, acompanho brasileiros no exterior e quem passa por processos migratórios — em português ou inglês.",
    },
    {
      id: "doencas-cronicas",
      label: "Doenças crônicas (diabetes)",
      text: "Conviver com uma doença crônica, como o diabetes, envolve desafios emocionais que vão muito além do corpo. Ofereço um cuidado que considera a pessoa por inteiro, e não apenas o diagnóstico.",
    },
    {
      id: "abuso-sexual",
      label: "Abuso sexual",
      text: "Falar sobre experiências de abuso exige um espaço seguro, respeitoso e sem pressa. Estou aqui para acolher a sua história com cuidado e sigilo, no tempo que for possível para você.",
    },
  ] satisfies Specialty[],
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 9. VOCÊ SE IDENTIFICA? (auto-identificação do público)                    ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const audience = {
  eyebrow: "Você se identifica?",
  title: "Talvez este seja um espaço para você",
  intro: "A terapia pode fazer sentido especialmente se você:",
  items: [
    `É adolescente, adulto ou idoso em busca de um espaço de escuta`,
    "É brasileiro(a) vivendo no exterior ou passando por um processo de adaptação cultural",
    "Está atravessando mudanças de contexto que mexem com identidade e pertencimento",
    "Procura uma escuta sensível a questões raciais",
    "Convive com uma doença crônica, como o diabetes, e seus desafios emocionais",
    "Quer ser cuidado(a) por inteiro — para além do sintoma",
  ],
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 10. ÉTICA PROFISSIONAL                                                    ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const ethics = {
  eyebrow: "Ética profissional",
  title: "Um cuidado sério e sigiloso",
  items: [
    {
      title: "Sigilo e confidencialidade",
      text: "Tudo o que você compartilha permanece protegido. O sigilo é um princípio ético fundamental da psicologia.",
    },
    {
      title: "Registro no Conselho",
      text: `Atuação regular e registrada — ${profile.crp} —, com responsabilidade e respeito às normas da profissão.`,
    },
    {
      title: "Respeito à sua singularidade",
      text: "Cada pessoa é acolhida em sua história, seu contexto e sua forma única de estar no mundo.",
    },
    {
      title: "Código de Ética",
      text: "Compromisso com o Código de Ética Profissional do Psicólogo em cada atendimento.",
    },
  ],
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 11. FORMAÇÃO E CREDENCIAIS (conteúdo real — exibir tudo)                  ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const credentials = {
  eyebrow: "Formação e credenciais",
  title: "Uma formação sólida e internacional",
  intro:
    "No início de carreira, trago uma formação diferenciada em Gestalt-terapia, com " +
    "vivência internacional e um olhar transcultural para o cuidado.",
  education: [
    {
      institution: "Centro Universitário Frassinetti do Recife",
      detail: "Bacharel em Psicologia · Recife/PE",
    },
    {
      institution: "GATLA — Gestalt Associates Training Los Angeles",
      detail:
        "Programa de Treinamento em Gestalt-terapia · Los Angeles/CA, EUA (formação internacional, sessões supervisionadas e discussão de casos)",
    },
  ],
  courses: [
    {
      institution: "NYIGT — New York Institute for Gestalt Therapy",
      detail: "Introdução à Fenomenologia para Gestalt-terapeutas · Nova York, EUA",
    },
    {
      institution: "Long Island University",
      detail: "Psicologia Social · Brooklyn/NY, EUA",
    },
    {
      institution: "Oakton College",
      detail: "Inglês como Segunda Língua (ESL) · Chicago/IL, EUA",
    },
    {
      institution: "SENAC Idiomas",
      detail: "Inglês Avançado · Recife/PE",
    },
  ],
  // Enquadramento honesto: a vivência nos EUA é internacional/intercultural,
  // NÃO experiência clínica.
  highlights: [
    "Atuação clínica em Gestalt-terapia (crianças e adultos)",
    "Experiência internacional e intercultural nos EUA",
    "Atendimento bilíngue (português e inglês)",
    "Olhar transcultural e sensível a processos migratórios",
  ],
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 12. FAQ (também alimenta o schema FAQPage para SEO)                        ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export interface FaqItem {
  q: string;
  a: string;
}

export const faq = {
  eyebrow: "Perguntas frequentes",
  title: "Ainda com dúvidas?",
  items: [
    {
      q: "Como funciona a psicoterapia online?",
      a: "As sessões acontecem por videochamada, de onde você estiver, com o mesmo sigilo e cuidado de um atendimento presencial. Você só precisa de um dispositivo com internet e de um ambiente reservado onde se sinta à vontade para conversar.",
    },
    {
      q: "Para quais públicos e idades você atende?",
      // Usa a faixa etária centralizada.
      a: `Atendo ${ageRange}, incluindo brasileiros que vivem no exterior. Cada processo é conduzido de forma individual, respeitando o momento e a história de cada pessoa.`,
    },
    {
      q: "O que é a Gestalt-terapia?",
      a: "É uma abordagem construída no encontro, que dá atenção à sua experiência no presente. Mais do que focar apenas no sintoma, buscamos ampliar a consciência sobre você mesmo(a) e descobrir, no seu ritmo, novas possibilidades de existir.",
    },
    {
      q: "Você atende em inglês?",
      a: "Sim. O atendimento é bilíngue (português e inglês), o que facilita o cuidado com brasileiros no exterior e com pessoas que vivem entre culturas.",
    },
    {
      q: "As sessões são sigilosas?",
      a: "Sim. O sigilo é um princípio ético fundamental da psicologia e é resguardado pelo Código de Ética Profissional do Psicólogo. O que você compartilha permanece protegido.",
    },
    {
      q: "Atende de quais lugares? E o fuso horário?",
      a: "O atendimento é 100% online, para todo o Brasil e para brasileiros no exterior. Os horários são combinados considerando o seu fuso, para caber na sua rotina.",
    },
    {
      // ⚠️ [CONFIRMAR] Duração e frequência não constavam nos materiais.
      // Ajuste os valores entre colchetes ou remova este item se preferir.
      q: "Qual a duração e a frequência das sessões?",
      a: "Em geral, as sessões têm cerca de [50 minutos] e acontecem com frequência [semanal], mas isso é conversado e ajustado conforme a sua necessidade.",
    },
    {
      q: "Como faço para agendar?",
      a: "É só clicar no botão de WhatsApp aqui no site. A partir daí combinamos o melhor horário e esclareço qualquer dúvida antes da primeira sessão.",
    },
  ] satisfies FaqItem[],
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 13. CONTATO                                                               ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const contactSection = {
  eyebrow: "Vamos conversar",
  title: "Agende sua consulta",
  intro:
    "O primeiro passo pode ser simples. Envie uma mensagem no WhatsApp e combinamos, " +
    "com calma, o melhor horário para você. Esclareço qualquer dúvida antes da primeira sessão.",
  whatsappCta: "Conversar no WhatsApp",
  // Se quiser usar o formulário (opcional), configure o Formspree no README.
  // Deixe "" para esconder o formulário e manter só o WhatsApp/e-mail.
  formspreeEndpoint: "", // ex.: "https://formspree.io/f/xxxxxx"  [PREENCHER opcional]
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 14. RODAPÉ                                                                ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const footer = {
  tagline: "Psicoterapia online, acolhedora e bilíngue.",
  note: profile.serviceMode,
};
