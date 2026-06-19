import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const [hoverType, setHoverType] = useState(null); // 'hover' | 'play' | null

  useEffect(() => {
    // Detect touch device
    const touchMedia = window.matchMedia("(pointer: coarse)");
    setIsTouch(touchMedia.matches);
    const listener = (e) => setIsTouch(e.matches);
    touchMedia.addEventListener("change", listener);
    return () => touchMedia.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const animateRing = () => {
      // Linear interpolation (lerp) for smooth lagging outer ring
      const ease = 0.15;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMouseMove);
    const animationId = requestAnimationFrame(animateRing);

    // Event delegation to detect hovering over elements
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Check for play cursor elements (e.g. video cards)
      const playEl = target.closest('[data-cursor="play"]');
      if (playEl) {
        setHoverType("play");
        return;
      }

      // Check for interactive elements
      const interactiveEl = target.closest('a, button, select, input, [role="button"], .interactive-hover');
      if (interactiveEl) {
        setHoverType("hover");
        return;
      }

      setHoverType(null);
    };

    document.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-violet-400 rounded-full pointer-events-none z-[9999] transition-transform duration-200 ease-out ${
          hoverType === "play" ? "scale-0" : hoverType === "hover" ? "scale-[2] bg-pink-400" : ""
        }`}
        style={{ willChange: "transform" }}
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          hoverType === "play"
            ? "w-20 h-20 bg-zinc-950/40 backdrop-blur-md border border-white/30 flex flex-col items-center justify-center text-white scale-100 opacity-100"
            : hoverType === "hover"
            ? "w-10 h-10 border border-pink-400/60 bg-pink-400/5 scale-100 opacity-100"
            : "w-6 h-6 border border-violet-400/40 opacity-80"
        }`}
        style={{ willChange: "transform" }}
      >
        {hoverType === "play" && (
          <div className="flex flex-col items-center justify-center scale-90">
            <Play className="w-5 h-5 fill-white text-white drop-shadow-md mb-0.5" />
            <span className="text-[9px] font-bold tracking-widest text-white uppercase drop-shadow-sm select-none">
              Play
            </span>
          </div>
        )}
      </div>
    </>
  );
}
