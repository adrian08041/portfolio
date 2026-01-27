import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const bootMessages = [
  "INITIALIZING_KERNEL...",
  "LOADING_ASSETS...",
  "BYPASSING_SECURITY_PROTOCOLS...",
  "CONNECTING_TO_MAINFRAME...",
  "DECRYPTING_DATA_STREAMS...",
  "OPTIMIZING_NEURAL_NET...",
  "SYSTEM_READY.",
];

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(bootMessages[0]);

  useEffect(() => {
    // Randomize duration between 2s and 2.5s
    const totalDuration = 2000 + Math.random() * 500;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min((elapsed / totalDuration) * 100, 100);

      // Add some "stutter" or non-linearity to be cool
      // Just discretizing it to integers is enough mostly
      setProgress(Math.floor(rawProgress));

      // Update messages based on progress chunks
      const messageIndex = Math.min(
        Math.floor((rawProgress / 100) * bootMessages.length),
        bootMessages.length - 1,
      );
      setCurrentMessage(bootMessages[messageIndex]);

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 200); // Small pause at 100% before vanishing
      }
    }, 30); // ~30fps update

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] bg-background flex flex-col items-center justify-center font-mono overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
    >
      {/* CRT Scanline effect overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[2] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-50" />

      <div className="w-full max-w-md px-6 relative z-10">
        {/* Header Details */}
        <div className="flex justify-between text-xs text-muted-foreground mb-12 uppercase tracking-widest opacity-50">
          <span>BOOT_SEQUENCE_V.2.0</span>
          <span>MEM_CHECK: OK</span>
        </div>

        {/* Main Percentage */}
        <div className="relative mb-2">
          <h1 className="text-6xl md:text-8xl font-bold text-primary tabular-nums tracking-tighter">
            {progress}%
          </h1>
          {/* Glitch Shadow Effect */}
          <h1
            className="absolute top-0 left-0 text-6xl md:text-8xl font-bold text-red-500 tabular-nums tracking-tighter opacity-30 animate-pulse"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              transform: "translate(-2px, 2px)",
            }}
          >
            {progress}%
          </h1>
        </div>

        {/* Progress Bar Container */}
        <div className="h-2 w-full bg-secondary/30 rounded-none overflow-hidden mb-4 border border-primary/20">
          <motion.div
            className="h-full bg-primary relative"
            style={{ width: `${progress}%` }}
          >
            {/* Glowing leading edge */}
            <div className="absolute top-0 right-0 bottom-0 w-px bg-white shadow-[0_0_10px_#fff]" />
          </motion.div>
        </div>

        {/* Status Message */}
        <div className="h-6 flex items-center">
          <span className="text-primary mr-2">{">"}</span>
          <span className="text-sm md:text-base text-muted-foreground uppercase tracking-wider animate-pulse">
            {currentMessage}
          </span>
        </div>

        {/* Decorative corner brackets */}
        <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-primary/30" />
        <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-primary/30" />
      </div>

      {/* Bottom code rain hint */}
      <div className="absolute bottom-10 text-[10px] text-white/20 font-mono tracking-[0.5em] animate-pulse">
        LOADING_INTERFACE_MODULES
      </div>
    </motion.div>
  );
};
