import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) return;

    const updateCursor = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".group") ||
        target.classList.contains("interactive") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      // relatedTarget is null when mouse leaves the document
      if (!e.relatedTarget) {
        setIsVisible(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Arrow Cursor - Precise standard shape but with style */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-100 ${isClicking ? "scale-90" : "scale-100"}`}
        >
          <path
            d="M5.5 3L19 15.5L12 16.5L16 22L13.5 23.5L9.5 18L5.5 21V3Z"
            fill="hsl(var(--primary))"
            stroke="black"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Interaction Reticle - Only appears on Hover, replaces the trail */}
      <div
        className={`fixed top-0 left-0 border border-primary/50 pointer-events-none z-[9998] transition-all duration-300 ease-out will-change-transform rounded-full ${
          isHovering
            ? "w-12 h-12 opacity-100 scale-100 rotate-90"
            : "w-4 h-4 opacity-0 scale-0 rotate-0"
        }`}
        style={{
          transform: `translate3d(${position.x - 24}px, ${position.y - 24}px, 0)`,
          // When not hovering, centering calculation changes (12-6=6 vs 32-24=8, handled by hiding it anyway)
          // Actually, let's keep it centered relative to the pointer tip for the effect.
          // Since pointer is top-left, we want center of circle to be at pointer tip? No, usually slightly offset.
          // But for "Tech" feel, surrounding the target is cool.
          // Let's center it on the mouse position.
          left: 0,
          top: 0,
        }}
      >
        {/* Crosshair accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-primary"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-primary"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-1.5 bg-primary"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-0.5 w-1.5 bg-primary"></div>
      </div>
    </>
  );
};
