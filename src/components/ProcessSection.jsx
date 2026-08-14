import { useInView } from "@/hooks/useInView";
import { MessageSquare, Film, Eye, Rocket } from "lucide-react";
import { PROCESS } from "@/constants/uiTexts";

const iconMap = {
  MessageSquare: MessageSquare,
  Film: Film,
  Eye: Eye,
  Rocket: Rocket,
};

function ProcessStep({ step, index, total, inView }) {
  const Icon = iconMap[step.icon] || MessageSquare;
  const isLast = index === total - 1;

  return (
    <div
      className={`relative flex flex-col items-center text-center transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Step number + icon */}
      <div className="relative mb-4">
        {/* Glow ring */}
        <div className="absolute -inset-3 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-violet-500/30 flex items-center justify-center group hover:border-violet-500/60 transition-all duration-300">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-violet-400 group-hover:text-white transition-colors duration-300" />
        </div>

        {/* Step number badge */}
        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center text-white text-[10px] font-bold shadow-lg">
          {step.number}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-base sm:text-lg mb-2">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-[180px]">
        {step.description}
      </p>

      {/* Connector line — horizontal on desktop */}
      {!isLast && (
        <>
          {/* Desktop: horizontal line to the right */}
          <div className="hidden lg:block absolute top-8 sm:top-10 left-[calc(50%+2.5rem)] sm:left-[calc(50%+3rem)] w-[calc(100%-1rem)] h-[2px]">
            <div
              className="h-full bg-gradient-to-r from-violet-500/50 to-pink-500/30 rounded-full transition-all duration-1000"
              style={{ width: inView ? "100%" : "0%" }}
            />
          </div>
          {/* Mobile: vertical line downward */}
          <div className="lg:hidden w-[2px] h-8 my-2 bg-gradient-to-b from-violet-500/50 to-pink-500/30 rounded-full" />
        </>
      )}
    </div>
  );
}

export default function ProcessSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 sm:px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
            {PROCESS.heading}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
              {PROCESS.headingAccent}
            </span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto">
            {PROCESS.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-2 lg:gap-0">
          {PROCESS.steps.map((step, i) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={i}
              total={PROCESS.steps.length}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
