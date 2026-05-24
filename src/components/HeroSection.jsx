import { Mail, MapPin } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { HERO, OWNER } from "@/constants/uiTexts";

const HeroSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center bg-zinc-950 px-4 sm:px-6 md:px-8 hero-noise-bg pt-20 sm:pt-24"
    >
      <div className="w-full flex flex-col justify-center mt-4 sm:mt-8 md:mt-16 lg:mt-24">
        {/* Tagline */}
        <div
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-semibold text-zinc-100 mb-4 sm:mb-5 ml-0 sm:ml-4 md:ml-12 lg:ml-24 text-left px-2 sm:px-0 ${inView ? "blur-fade-up-posterize" : ""}`}
          style={{ letterSpacing: "0.03em" }}
        >
          {HERO.tagline}
        </div>

        {/* Contact Info */}
        <div
          className={`flex flex-col gap-2 sm:gap-3 text-zinc-300 text-sm sm:text-base md:text-lg font-mono ml-0 sm:ml-4 md:ml-12 lg:ml-24 mt-2 px-2 sm:px-0 ${inView ? "blur-fade-up-posterize" : ""}`}
        >
          <div className="flex items-center gap-2">
            <MapPin size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="break-words">{OWNER.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="break-all text-xs sm:text-base">{OWNER.email}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
