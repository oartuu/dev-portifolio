export interface ProjectData {
  id: number;
  title: string;
  alias: string;
  desc: string;
  resume: string;
  aboutUrl: string;
  link: string;
  imgUrl: string;
  articleText: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Shine On You Crazy Project",
    desc: "Plataforma interativa criada com Next.js e Tailwind, com foco em animações suaves e layout responsivo.",
    resume: "Projeto acadêmico sobre segurança",
    aboutUrl: "",
    link: "/projects/shine",
    alias: "shine",
    imgUrl:
      "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
    articleText:
      "Este projeto explora a criação de interfaces modernas usando React, Next.js e animações com Framer Motion. A ideia é oferecer uma experiência visual rica, mantendo alto desempenho e organização de código. O layout foi estruturado com base em componentes reutilizáveis e integrações com APIs externas.",
  },
  {
    id: 2,
    title: "HeadMed",
    desc: "Solução inteligente para transcrição e estruturação de prontuários médicos via IA.",
    resume: "Projeto acadêmico sobre segurança",
    aboutUrl: "",
    link: "/projects/headmed",
    alias: "headmed",
    imgUrl:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&dpr=2&q=80",
    articleText:
      "HeadMed é uma ferramenta que converte áudios de consultas médicas em prontuários estruturados, utilizando Speech-to-Text e LLMs. O projeto reduz o tempo gasto com registros e permite enriquecer o prontuário com OCR e integração de exames. Desenvolvido com foco em UX e escalabilidade.",
  },
  {
    id: 3,
    title: "Scribe AI",
    desc: "Assistente de registro médico automatizado com foco em produtividade clínica.",
    resume: "Projeto acadêmico sobre segurança",
    aboutUrl: "",
    link: "/projects/scribe",
    alias: "scribe",
    imgUrl:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&dpr=2&q=80",
    articleText:
      "Desenvolvido com Next.js e TypeScript, o Scribe AI transforma o fluxo de documentação médica, gerando relatórios automaticamente com base em áudio. Implementa autenticação, dashboard de usuários e integração com APIs de transcrição de voz em tempo real.",
  },
  {
    id: 4,
    title: "Project.G3",
    desc: "Plataforma para gerenciamento de agendas e repertórios de bandas e grupos musicais.",
    resume: "Projeto acadêmico sobre segurança",
    aboutUrl: "",
    link: "/projects/G3",
    alias: "G3",
    imgUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&dpr=2&q=80",
    articleText:
      "O G3 permite que músicos e organizadores gerenciem eventos, repertórios e votações de músicas em um só lugar. Com autenticação, papéis de usuário e notificações automáticas, o sistema facilita a comunicação e organização de grupos musicais.",
  },
];
