
import { Video } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full py-24 flex flex-col items-center bg-gradient-to-b from-[#1a1736] via-[#181A20] to-[#22223B] relative overflow-hidden animate-fade-in">
      {/* Animated blurred background for creative flair */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 blur-3xl opacity-40 pointer-events-none w-[80vw] h-[300px] bg-gradient-to-tr from-indigo-500 via-purple-800/60 to-pink-400/60 rounded-full -mt-20 z-0" />
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-8 z-10">
        <span className="inline-flex items-center justify-center rounded-full bg-primary/15 px-4 py-2 mb-2 text-primary font-medium text-lg animate-scale-in shadow-2xl shadow-indigo-500/10">
          <Video className="mr-2" size={28} /> Video Editing Portfolio
        </span>
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-zinc-50 animate-fade-in drop-shadow-glow">
          Elevate Your <span className="text-primary">Story</span>.<br className="hidden md:inline" />
          Inspire Your Audience.
        </h1>
        <p className="text-xl text-zinc-300 max-w-2xl mx-auto animate-fade-in">
          Showcasing transformative edits, creative reels, and impactful business projects. Explore the highlights below!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
