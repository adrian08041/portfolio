import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Terminal,
  ChevronRight,
} from "lucide-react";

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Dynamic Noise Background (Reduced opacity mainly for texture) */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

      {/* Grid background (Adjusted for better contrast with code rain) */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 perspective-[1000px] rotate-x-12 scale-150" />

      {/* Floating Geometric Elements - Asymmetric */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[5%] w-64 h-64 border border-primary/10 rounded-full blur-3xl"
      />
      <div className="absolute top-[15%] left-[10%] w-32 h-1 bg-primary/20 -rotate-45" />
      <div className="absolute bottom-[20%] right-[15%] w-px h-32 bg-primary/20" />

      <div className="section-container relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Top Bar - Brutalist Tech details */}
          <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-8 md:mb-16 font-mono text-xs md:text-sm text-muted-foreground/50">
            <div className="flex flex-col">
              <span>LAT: -18.5756</span>
              <span>LONG: -46.5165</span>
            </div>
            <div className="text-right">
              <span className="block text-primary">AVAILABLE FOR WORK</span>
              <span>EST. 2024</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Content - Typography */}
            <div className="lg:col-span-8 relative">
              {/* Terminal Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-8 backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#39ff14]" />
                <span className="text-sm font-mono text-primary tracking-wider">
                  SYSTEM_STATUS: ONLINE
                </span>
              </motion.div>

              {/* MASSIVE Typography */}
              <div className="relative z-10">
                <motion.h1
                  variants={itemVariants}
                  className="font-bold leading-[0.85] tracking-tighter"
                >
                  <span className="block text-[13vw] lg:text-[10rem] text-foreground mix-blend-screen hover:text-outline-primary transition-all duration-500 cursor-default select-none">
                    ADRIAN
                  </span>
                  <span className="block text-[13vw] lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-900 stroke-text relative">
                    MESSIAS
                    <span className="absolute top-0 left-0 text-transparent stroke-primary opacity-0 hover:opacity-100 hover:text-primary transition-all duration-300 stroke-[2px] ml-1 blur-[1px]">
                      MESSIAS
                    </span>
                  </span>
                </motion.h1>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-muted-foreground max-w-xl mt-8 leading-relaxed font-light border-l-2 border-primary/50 pl-6"
              >
                Transformando complexidade em{" "}
                <strong className="text-foreground">
                  experiências digitais
                </strong>
                . Arquiteto de software focado em performance, design system e
                escalabilidade.
              </motion.p>

              {/* CTA Group */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-5 mt-10"
              >
                <button
                  onClick={scrollToProjects}
                  className="group relative px-8 py-4 bg-foreground text-background font-bold tracking-wide hover:bg-primary hover:text-black transition-colors duration-300"
                >
                  VER PROJETOS
                  <div className="absolute inset-0 border border-white/20 translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 pointer-events-none" />
                </button>

                <button
                  onClick={scrollToContact}
                  className="px-8 py-4 border border-white/20 text-foreground font-mono hover:bg-white/5 transition-colors flex items-center gap-2 group"
                >
                  <span>// contato</span>
                  <ArrowDown className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform duration-300" />
                </button>
              </motion.div>
            </div>

            {/* Right Content - Abstract Tech Visual */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 hidden lg:block relative"
            >
              {/* Decorative Tech Card */}
              <div className="relative w-full aspect-[3/4] rounded-sm border border-white/10 bg-black/40 backdrop-blur-md p-6 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <Terminal className="text-primary w-6 h-6" />
                  <div className="flex gap-1">
                    <div className="w-10 h-1 bg-white/10" />
                    <div className="w-2 h-1 bg-primary" />
                  </div>
                </div>

                <div className="font-mono text-xs text-primary/70 space-y-2 my-auto">
                  <p>&gt; initializing_core_modules...</p>
                  <p>&gt; loading_assets [100%]</p>
                  <p>&gt; connecting_to_server...</p>
                  <p className="text-white">&gt; connection_established</p>
                  <span className="animate-pulse">_</span>
                </div>

                <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-[10px] text-muted-foreground">
                    CPU: 12%
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    MEM: 44%
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Vertical Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-6 items-center z-50"
        >
          <div className="w-px h-24 bg-gradient-to-b from-transparent to-white/20" />
          {/* Rotation must be handled carefully with writing-mode */}
          <span className="writing-vertical-rl text-xs font-mono text-muted-foreground tracking-[0.2em] transform rotate-180">
            SOCIAL_LINKS
          </span>
          <div className="flex flex-col gap-4 mt-4">
            <a
              href="https://github.com/adrian08041"
              target="_blank"
              className="hover:text-primary transition-colors hover:-translate-x-1 duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-messias/"
              target="_blank"
              className="hover:text-primary transition-colors hover:-translate-x-1 duration-200"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
