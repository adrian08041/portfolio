import { useEffect, useRef } from "react";

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Characters to display (Tech/Hacker feel)
    const chars = "01010101XYZ_[]{}<>/-+=!@#$%^&*";
    const charArray = chars.split("");

    const fontSize = 14;
    const columns = width / fontSize;

    // Array of drops - one per column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100); // Start above visible area randomly
    }

    const draw = () => {
      // Semi-transparent black to create trail effect
      // Use very low opacity for long trails, high for short trails.
      // 0.05 creates a nice "ghosting" blur.
      ctx.fillStyle = "rgba(5, 5, 5, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Randomize character
        const text = charArray[Math.floor(Math.random() * charArray.length)];

        // Green color with variation in opacity for depth
        const opacity = Math.random() * 0.5 + 0.1; // 0.1 to 0.6
        ctx.fillStyle = `rgba(57, 255, 20, ${opacity})`;

        // Render
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly or continue falling
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment Y coordinate
        drops[i]++;
      }
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };

    // Throttle frame rate for performance and stylistic "retro" feel (30FPS)
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const loop = (time: number) => {
      if (time - lastTime >= interval) {
        draw();
        lastTime = time;
      }
      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />
      {/* Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_4px,3px_100%] pointer-events-none" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)] z-[2]" />
    </div>
  );
};
