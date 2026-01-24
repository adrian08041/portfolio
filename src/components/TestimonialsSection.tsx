import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "CEO, TechStartup",
    content:
      " Adrian entregou um projeto excepcional que superou todas as nossas expectativas. Sua atenção aos detalhes e capacidade de resolver problemas complexos é impressionante.",
    avatar: "👩💼",
  },
  {
    name: "Pedro Almeida",
    role: "CTO, InnovateCorp",
    content:
      "Trabalhamos juntos em vários projetos e sempre fiquei impressionado com a qualidade do código e a comunicação clara. Um profissional altamente recomendado.",
    avatar: "👨‍💻",
  },
  {
    name: "Ana Costa",
    role: "Product Manager, DigitalAgency",
    content:
      "A capacidade do Adrian de transformar ideias complexas em soluções elegantes e funcionais é notável. Ele tem uma visão única para UX e performance.",
    avatar: "👩🎨",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="py-20 md:py-32 bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O que <span className="gradient-text">Dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback de clientes e colegas sobre meu trabalho
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

            <div className="relative z-10">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg md:text-xl text-foreground/90 mb-8 text-center leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-3xl">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
