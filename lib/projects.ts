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
    title: "Auth-SIEM",
    desc: "Plataforma interativa criada com Next.js e Tailwind, para implementar um sistema SIEM de segurança.",
    resume: "Projeto acadêmico sobre segurança",
    aboutUrl: "https://github.com/oartuu/shine-on-you-crazy-project",
    link: "/projects/siem",
    alias: "siem",
    imgUrl:
      "https://images.unsplash.com/photo-1706257038615-2d80b92587b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJpc21hfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&q=60&w=500",
    articleText:
      "Este é um projeto criado para demonstrar a implementação de um sistema SIEM de segurança à um fluxo de autenticação de usuários, gerando logs automáticos, verificação e bloqueio de requisições suspeitas, entre outras funcionalidades.",
  },
  {
    id: 2,
    title: "HeadMed",
    desc: "Solução inteligente para transcrição e estruturação de prontuários médicos via IA.",
    resume: "Start-up própria",
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
    title: "Project.G3",
    desc: "Plataforma para gerenciamento de agendas e repertórios de bandas e grupos musicais.",
    resume: "Plataforma para gestão de bandas e grupos musicais",
    aboutUrl: "",
    link: "/projects/G3",
    alias: "G3",
    imgUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&dpr=2&q=80",
    articleText:
      "O G3 permite que músicos e organizadores gerenciem eventos, repertórios e votações de músicas em um só lugar. Com autenticação, papéis de usuário e notificações automáticas, o sistema facilita a comunicação e organização de grupos musicais.",
  },
  {
    id: 4,
    title: "Portfolio",
    desc: "Portifólio pessoal, um espaço para expor meus projetos pessoais e acadêmicos",
    resume: "Este website",
    aboutUrl: "https://oartuu.vercel.app",
    link: "/projects/portfolio",
    alias: "portfolio",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D4D2DAQHSNZ0gB_vBeg/profile-treasury-image-shrink_800_800/B4DZo2lZzRGgAY-/0/1761852367158?e=1762462800&v=beta&t=dRy6p10cjciZcGJMPNXwFcS20LVLxNZRKH5Eg5K0UY4",
      
    articleText:"um espaço para reunir meus projetos, experiências e ideias de forma que refletisse não apenas o meu trabalho, mas também minha identidade como desenvolvedor.Construí o site utilizando Next.js, Tailwind CSS e shadcn/ui, além de outras ferramentas que me permitiram alcançar uma interface moderna, responsiva e com uma ótima performance.Cada detalhe foi pensado para oferecer uma navegação fluida e uma experiência agradável, combinando design minimalista com funcionalidadealgo que considero essencial em qualquer aplicação bem feita.",
  },
];
