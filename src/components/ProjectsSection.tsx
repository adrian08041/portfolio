import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin.",
    image: "🛒",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "Aplicativo de gerenciamento de tarefas com colaboração em tempo real.",
    image: "✅",
    technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Dashboard interativo para visualização de dados e métricas de negócio.",
    image: "📊",
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Clone",
    description:
      "Clone de rede social com feed, stories, mensagens e notificações.",
    image: "💬",
    technologies: ["React Native", "Firebase", "Redux", "GraphQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "Ferramenta de geração de conteúdo usando inteligência artificial.",
    image: "🤖",
    technologies: ["Python", "OpenAI", "FastAPI", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Booking System",
    description:
      "Sistema de reservas e agendamentos para clínicas e consultórios.",
    image: "📅",
    technologies: ["Vue.js", "Laravel", "MySQL", "Twilio"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos projetos mais recentes e relevantes do meu portfólio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500">
                {project.image}
              </div>

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Folder size={20} />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={20} />
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
                      className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
