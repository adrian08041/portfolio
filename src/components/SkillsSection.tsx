import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Server,
  Wrench,
  Users,
  Palette,
  Database,
  Cloud,
  GitBranch,
  MessageSquare,
  Lightbulb,
  Clock,
  Target,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", icon: Palette },
      { name: "TypeScript", icon: Code2 },
      { name: "Next.js", icon: Code2 },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Vue.js", icon: Code2 },
      { name: "HTML/CSS", icon: Palette },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Python", icon: Code2 },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "GraphQL", icon: Server },
      { name: "REST APIs", icon: Server },
    ],
  },
  {
    title: "Ferramentas",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Cloud },
      { name: "AWS", icon: Cloud },
      { name: "CI/CD", icon: GitBranch },
      { name: "Figma", icon: Palette },
      { name: "Linux", icon: Wrench },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Comunicação", icon: MessageSquare },
      { name: "Liderança", icon: Users },
      { name: "Resolução de Problemas", icon: Lightbulb },
      { name: "Gestão de Tempo", icon: Clock },
      { name: "Trabalho em Equipe", icon: Users },
      { name: "Foco em Resultados", icon: Target },
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e competências que utilizo para criar soluções incríveis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all duration-300 group"
                  >
                    <skill.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
