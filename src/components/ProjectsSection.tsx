import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com carrinho, pagamentos integrados e painel administrativo.",
    icon: "🛒",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações.",
    icon: "✓",
    technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Dashboard interativo para visualização de dados e métricas de negócio em tempo real.",
    icon: "◈",
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Social Media Clone",
    description:
      "Clone de rede social com feed, stories, mensagens e sistema de notificações.",
    icon: "◉",
    technologies: ["React Native", "Firebase", "Redux", "GraphQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "AI Content Generator",
    description:
      "Ferramenta de geração de conteúdo usando modelos de inteligência artificial.",
    icon: "◆",
    technologies: ["Python", "OpenAI", "FastAPI", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Booking System",
    description:
      "Sistema de reservas e agendamentos para clínicas, consultórios e serviços.",
    icon: "◇",
    technologies: ["Vue.js", "Laravel", "MySQL", "Twilio"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-0.5 bg-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-widest">
              // projects
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Uma seleção dos projetos mais recentes e relevantes do meu portfólio
          </p>
        </motion.div>

        {/* Projects Grid - Asymmetric Bento-like */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.1 + index * 0.08,
              }}
              className={`project-card group ${
                project.featured ? "md:row-span-1" : ""
              }`}
            >
              {/* Project Header with Icon */}
              <div className="h-40 bg-gradient-to-br from-card via-secondary/50 to-card flex items-center justify-center relative overflow-hidden">
                {/* Decorative grid */}
                <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

                {/* Icon */}
                <span className="text-5xl relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </span>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/30 transition-all duration-300" />
              </div>

              <div className="p-6">
                {/* Header Row */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Folder size={18} />
                    {project.featured && (
                      <span className="text-xs font-mono bg-primary/10 px-2 py-0.5 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-1"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-1"
                      aria-label="Live Demo"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-1 rounded-lg bg-secondary text-muted-foreground border border-transparent hover:border-primary/30 hover:text-primary transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/adrian08041"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
          >
            Ver todos os projetos no GitHub
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
