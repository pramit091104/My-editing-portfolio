import { ChevronDown, Play, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import { HERO, SITE } from "@/constants/uiTexts";
import { useContactScroll } from "@/hooks/useContactScroll";

const HeroSection = () => {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const scrollToContact = useContactScroll();
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center bg-zinc-950 px-4 sm:px-6 md:px-8 hero-noise-bg pt-28 sm:pt-24"
    >
      <div className="w-full flex flex-col justify-center mt-4 sm:mt-8 md:mt-16 lg:mt-24">


        {/* Tagline */}
        <div
          className={`text-base sm:text-lg md:text-xl lg:text-2xl font-mono font-semibold text-zinc-100 mb-6 sm:mb-8 ml-0 sm:ml-4 md:ml-12 lg:ml-24 text-left px-2 sm:px-0 max-w-3xl ${inView ? "blur-fade-up-posterize" : ""
            }`}
          style={{ letterSpacing: "0.03em" }}
        >
          {HERO.tagline}
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-row flex-wrap items-center gap-2.5 sm:gap-4 ml-0 sm:ml-4 md:ml-12 lg:ml-24 px-2 sm:px-0 ${inView ? "blur-fade-up-posterize" : ""
            }`}
        >
          <button
            onClick={() => navigate("/portfolio")}
            className="group inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 bg-white text-zinc-900 font-mono text-xs sm:text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-all duration-300 shadow-md w-fit cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-zinc-900 text-zinc-900" />
            <span>{HERO.ctaPrimary}</span>
          </button>

          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 bg-zinc-900/80 text-zinc-200 font-mono text-xs sm:text-sm font-semibold rounded-lg border border-zinc-700/80 hover:border-zinc-500 hover:text-white transition-all duration-300 w-fit cursor-pointer"
          >
            <span>{HERO.ctaSecondary}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-zinc-400 text-[10px] uppercase tracking-[0.25em] font-mono">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-zinc-400 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
