
import { Video } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full py-24 flex flex-col items-center bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden animate-fade-in">
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-8">
        <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 mb-2 text-primary font-medium text-lg animate-scale-in">
          <Video className="mr-2" size={28} /> Video Editing Portfolio
        </span>
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-zinc-900 animate-fade-in">
          Elevate Your <span className="text-primary">Story</span>.<br className="hidden md:inline" />
          Inspire Your Audience.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
          Showcasing transformative edits, creative reels, and impactful business projects. Explore the highlights below!
        </p>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 scale-125 blur-3xl opacity-30 pointer-events-none w-[60vw] h-64 bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-300 rounded-full mt-[-5rem] z-0"></div>
    </section>
  );
};

export default HeroSection;
