import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

// Custom easing function - spring-like curve
const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = useCallback(() => {
    if (isScrolling) return;

    setIsScrolling(true);

    const startPosition = window.scrollY;
    const distance = startPosition;
    const duration = Math.min(1200, Math.max(600, distance * 0.5)); // Dynamic duration based on distance
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Apply custom easing
      const easedProgress = easeOutExpo(progress);
      const currentPosition = startPosition - distance * easedProgress;

      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(animateScroll);
  }, [isScrolling]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 20,
            },
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.8,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(57, 255, 20, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center overflow-hidden"
          style={{
            boxShadow: "0 4px 24px rgba(57, 255, 20, 0.25)",
          }}
          aria-label="Voltar ao topo"
        >
          <motion.div
            animate={
              isScrolling
                ? {
                    y: [0, -24, 24, 0],
                    transition: {
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
                : { y: 0 }
            }
          >
            <ArrowUp size={20} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
