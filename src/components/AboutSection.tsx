import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Briefcase, GraduationCap, Coffee } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "5+", label: "Anos de Experiência" },
  { icon: Code2, value: "50+", label: "Projetos Entregues" },
  { icon: GraduationCap, value: "10+", label: "Certificações" },
  { icon: Coffee, value: "∞", label: "Cafés Consumidos" },
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

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um pouco mais sobre minha jornada e experiência profissional
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Transformando ideias em{" "}
              <span className="text-primary">realidade digital</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sou um desenvolvedor Full Stack apaixonado por criar soluções
              tecnológicas que fazem a diferença. Com mais de 5 anos de
              experiência no mercado, trabalhei em projetos diversos, desde
              startups ágeis até grandes corporações.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Minha abordagem combina código limpo, arquitetura sólida e uma
              obsessão por detalhes. Acredito que a melhor tecnologia é aquela
              que os usuários nem percebem - simplesmente funciona de forma
              intuitiva e eficiente.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="skill-badge"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
