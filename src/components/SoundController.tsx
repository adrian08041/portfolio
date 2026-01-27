import { useEffect, useState } from "react";
import { soundManager } from "@/utils/soundManager";
import { Volume2, VolumeX } from "lucide-react";

export const SoundController = () => {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Global event listener for interactions
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        // Debounce slightly or just play
        soundManager.playHover();
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Play on any click for feedback, or filter?
      // Let's filter to ensure it feels purposeful
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".group")
      ) {
        soundManager.playClick();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignorar teclas modificadoras para não ficar repetitivo/chato
      if (
        ["Shift", "Control", "Alt", "Meta", "AltGraph", "CapsLock"].includes(
          e.key,
        )
      )
        return;
      soundManager.playKeystroke();
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMute = () => {
    const newState = !isMuted;
    setIsMuted(newState);
    soundManager.setMuted(newState);
    if (!newState) {
      // Play a confirmation sound when unmutes
      soundManager.playClick();
    }
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-6 left-6 md:left-10 z-[100] p-3 rounded-full bg-background/80 border border-primary/20 backdrop-blur-md text-primary hover:bg-primary hover:text-background transition-all duration-300 group"
      aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
    >
      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-xs font-mono text-primary rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
        {isMuted ? "SOUND: OFF" : "SOUND: ON"}
      </span>
    </button>
  );
};
