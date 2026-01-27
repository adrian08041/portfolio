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
  Layers,
  Cpu,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layers,
    color: "from-primary/20 to-primary/5",
    className: "lg:col-span-2",
    skills: [
      { name: "React", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "Next.js", icon: Code2 },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Vue.js", icon: Code2 },
      { name: "HTML/CSS", icon: Palette },
      { name: "Framer Motion", icon: Layers },
      { name: "UX Engineering", icon: Users },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-secondary to-card",
    className: "lg:col-span-1",
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
    title: "DevOps & Tools",
    icon: Cpu,
    color: "from-card to-secondary",
    className: "lg:col-span-1",
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
    color: "from-primary/10 to-transparent",
    className: "lg:col-span-2",
    skills: [
      { name: "Comunicação", icon: MessageSquare },
      { name: "Liderança", icon: Users },
      { name: "Problem Solving", icon: Lightbulb },
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
    <section id="skills" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

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
              // skills
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Tecnologias e competências que utilizo para criar soluções de alto
            impacto
          </p>
        </motion.div>

        {/* Skills Grid - Asymmetric Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: categoryIndex * 0.1,
              }}
              className={`
                relative overflow-hidden group 
                ${
                  category.title === "Soft Skills"
                    ? "lg:col-span-2 bg-[#0a0a0a] border border-primary/30 rounded-lg font-mono shadow-[0_0_30px_rgba(57,255,20,0.05)]"
                    : "solid-card p-6 md:p-8"
                } 
                ${category.className || ""}
              `}
            >
              {category.title === "Soft Skills" ? (
                // Terminal Style for Soft Skills
                <div className="h-full flex flex-col">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="ml-4 text-xs text-muted-foreground">
                      user@adrian-dev:~/soft-skills
                    </div>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed relative z-10 overflow-x-auto">
                    <div className="mb-4 whitespace-nowrap">
                      <span className="text-primary mr-2">➜</span>
                      <span className="text-blue-400">ls</span>
                      <span className="text-muted-foreground ml-2">
                        -la ./capabilities
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 min-w-[200px]">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          <span className="text-white/20 hidden xs:inline">
                            drwx-r-{idx % 2 === 0 ? "x" : "-"}
                          </span>
                          <span className="text-primary/70 text-[10px] md:text-xs">
                            {new Date().getFullYear()}
                          </span>
                          <span className="text-foreground font-semibold truncate">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 animate-pulse">
                      <span className="text-primary mr-2">➜</span>
                      <span className="w-3 h-5 bg-primary/50 inline-block align-middle" />
                    </div>
                  </div>

                  {/* Matrix/Code Rain Effect Background (Subtle) */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.03]"></div>
                </div>
              ) : (
                // Standard Cards
                <>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/20 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(57,255,20,0.2)]">
                        <category.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {category.title}
                        </h3>
                        <span className="text-xs font-mono text-muted-foreground">
                          {category.skills.length} skills
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 12,
                            delay:
                              0.2 + categoryIndex * 0.1 + skillIndex * 0.04,
                          }}
                          className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50 border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default group/skill"
                        >
                          <skill.icon className="w-4 h-4 text-muted-foreground group-hover/skill:text-primary transition-colors flex-shrink-0 group-hover/skill:animate-glitch" />
                          <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors truncate">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
