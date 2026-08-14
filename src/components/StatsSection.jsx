import { useState, useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { STATS, STATS_SECTION } from "@/constants/uiTexts";

function useCountUp(target, inView, duration = 2000) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}

function StatCard({ stat, index, inView }) {
  const count = useCountUp(stat.value, inView, 2000);

  // Format the number — show decimal only if the target has decimals
  const formatted =
    stat.value % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

  return (
    <div
      className={`relative group p-6 sm:p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/60 hover:border-violet-500/40 transition-all duration-500 hover:bg-zinc-900/60 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 text-center">
        <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
            {formatted}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
            {stat.suffix}
          </span>
        </div>
        <div className="text-[10px] sm:text-sm text-zinc-400 font-mono uppercase tracking-wider">
          {stat.label}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-full transition-all duration-500"
        style={{ width: inView ? "60%" : "0%" }}
      />
    </div>
  );
}

export default function StatsSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 sm:px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-3">
            {STATS_SECTION.heading}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
              {STATS_SECTION.headingAccent}
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
