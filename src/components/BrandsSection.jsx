import { useInView } from "../hooks/useInView";
import { ExternalLink } from "lucide-react";
import { BRANDS, BRANDS_SECTION, OWNER } from "@/constants/uiTexts";

const scrollStyle = `
  @keyframes scroll-left {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .brands-scroll {
    animation: scroll-left 35s linear infinite;
  }
  .brands-scroll:hover {
    animation-play-state: paused;
  }
`;

const BrandsSection = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {BRANDS_SECTION.heading}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
              {BRANDS_SECTION.headingAccent}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">{BRANDS_SECTION.subtitle}</p>
        </div>

        {/* Scrolling Brands */}
        <div className="relative overflow-hidden py-4">
          {/* Edge fade gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-28 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-28 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

          <style>{scrollStyle}</style>
          <div className="flex brands-scroll w-max gap-6">
            {[...BRANDS, ...BRANDS].map((brand, idx) => (
              <a
                key={idx}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-3 bg-zinc-900/30 border border-zinc-800/60 rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:bg-zinc-900/60 group flex-shrink-0"
              >
                <div className="w-11 h-11 rounded-lg overflow-hidden border border-zinc-700/50 group-hover:border-violet-400/50 transition-colors duration-300 flex-shrink-0">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-zinc-200 text-sm font-semibold group-hover:text-white transition-colors duration-300">
                    {brand.name}
                  </span>
                  <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider group-hover:text-violet-400/80 transition-colors duration-300">
                    {brand.category || "Collaborator"}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-bold text-white mb-3">
            {BRANDS_SECTION.ctaTitle}{" "}
            <span className="text-violet-400">{BRANDS_SECTION.ctaTitleAccent}</span>
          </h3>
          <p className="text-zinc-300 mb-4">{BRANDS_SECTION.ctaSubtitle}</p>
          <a
            href={`mailto:${OWNER.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold rounded-lg hover:from-violet-600 hover:to-pink-600 transition-colors duration-300"
          >
            <span>{BRANDS_SECTION.ctaButton}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
