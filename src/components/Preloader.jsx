import { useState, useEffect } from "react";
import { SITE } from "@/constants/uiTexts";

export default function Preloader({ children }) {
  const [loading, setLoading] = useState(() => {
    // Only show preloader once per session
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("editverse_loaded");
    }
    return true;
  });
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("editverse_loaded", "1");
      }, 600);
    }, 1800);

    return () => clearTimeout(timer);
  }, [loading]);

  if (!loading) return children;

  return (
    <>
      {/* Preloader overlay */}
      <div
        className={`fixed inset-0 z-[99999] bg-zinc-950 flex flex-col items-center justify-center transition-all duration-600 ${
          fadeOut ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
        }`}
        style={{ transition: "opacity 0.6s ease, transform 0.6s ease" }}
      >
        {/* Brand */}
        <div className="preloader-brand text-5xl sm:text-7xl font-blank-script text-white mb-6 opacity-0">
          {SITE.brandName}
        </div>

        {/* Progress bar */}
        <div className="w-48 sm:w-64 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
          <div className="preloader-bar h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full" />
        </div>

        {/* Tagline */}
        <p className="preloader-tagline text-zinc-500 text-xs font-mono tracking-wider mt-4 uppercase opacity-0">
          Loading your experience
        </p>
      </div>

      {/* Preloader animations */}
      <style>{`
        .preloader-brand {
          animation: preloaderFade 0.8s 0.2s ease forwards;
        }
        .preloader-tagline {
          animation: preloaderFade 0.6s 0.6s ease forwards;
        }
        .preloader-bar {
          animation: preloaderProgress 1.6s 0.3s ease-out forwards;
          width: 0%;
        }
        @keyframes preloaderFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes preloaderProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      {/* Render children behind preloader for faster paint */}
      <div className="opacity-0">{children}</div>
    </>
  );
}
