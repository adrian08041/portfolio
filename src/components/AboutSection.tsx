import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Briefcase, GraduationCap, Zap } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "5+", label: "Anos de Experiência", accent: true },
  { icon: Code2, value: "50+", label: "Projetos Entregues", accent: false },
  { icon: GraduationCap, value: "10+", label: "Certificações", accent: false },
  { icon: Zap, value: "100%", label: "Comprometimento", accent: true },
];

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "PostgreSQL",
  "MongoDB",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

      <div className="section-container relative">
        {/* Section Header - Asymmetric */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-0.5 bg-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-widest">
              // about
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
        </motion.div>

        {/* Content Grid - Asymmetric 60/40 */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio - Takes more space */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 0.2,
            }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-tight">
              Transformando ideias em{" "}
              <span className="text-primary text-glow">realidade digital</span>
            </h3>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                Sou um desenvolvedor Full Stack apaixonado por criar soluções
                tecnológicas que fazem a diferença. Com mais de{" "}
                <span className="text-foreground font-medium">
                  5 anos de experiência
                </span>
                , trabalhei em projetos diversos, desde startups ágeis até
                grandes corporações.
              </p>
              <p>
                Minha abordagem combina{" "}
                <span className="text-foreground font-medium">
                  código limpo
                </span>
                ,{" "}
                <span className="text-foreground font-medium">
                  arquitetura sólida
                </span>{" "}
                e uma obsessão por detalhes. Acredito que a melhor tecnologia é
                aquela que os usuários nem percebem — simplesmente funciona.
              </p>
            </div>

            {/* Skills Tags */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  className="skill-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats Grid - Compact on right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 0.3,
            }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    delay: 0.4 + index * 0.1,
                  }}
                  className={`stat-card text-center group ${
                    stat.accent ? "border-primary/30" : ""
                  }`}
                >
                  <stat.icon
                    className={`w-8 h-8 mx-auto mb-3 transition-all duration-300 group-hover:scale-110 ${
                      stat.accent
                        ? "text-primary"
                        : "text-muted-foreground group-hover:text-primary"
                    }`}
                  />
                  <div
                    className={`text-3xl md:text-4xl font-bold mb-1 ${
                      stat.accent ? "gradient-text" : "text-foreground"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
