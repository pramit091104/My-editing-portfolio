import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useInView } from "@/hooks/useInView";
import { Quote } from "lucide-react";
import { TESTIMONIALS, TESTIMONIALS_SECTION } from "@/constants/uiTexts";

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3">
      <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/60 hover:border-violet-500/30 transition-all duration-300 group">
        {/* Quote icon */}
        <div className="mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center border border-violet-500/20">
            <Quote className="w-5 h-5 text-violet-400" />
          </div>
        </div>

        {/* Quote text */}
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 italic">
          "{testimonial.quote}"
        </p>

        {/* Author */}
        <div className="mt-auto flex items-center justify-between">
          <div>
            <div className="text-white font-semibold text-sm">
              {testimonial.name}
            </div>
            <div className="text-zinc-500 text-xs font-mono">
              {testimonial.company}
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-bold text-violet-400/70 bg-violet-500/10 px-2.5 py-1 rounded-full border border-violet-500/20">
            {testimonial.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.05 });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();

    // Auto-play
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-6 bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-14 transition-all duration-700 ${
            sectionInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
            {TESTIMONIALS_SECTION.heading}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
              {TESTIMONIALS_SECTION.headingAccent}
            </span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto">
            {TESTIMONIALS_SECTION.subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div
          className={`transition-all duration-700 delay-200 ${
            sectionInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-3">
              {TESTIMONIALS.map((t, i) => (
                <TestimonialCard key={i} testimonial={t} />
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === selectedIndex
                    ? "w-6 bg-gradient-to-r from-violet-500 to-pink-500"
                    : "bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
