
import { Video } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full py-32 flex flex-col items-center justify-center bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-violet-600/5 to-purple-600/5 blur-3xl transform -translate-y-1/2" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-blue-600/5 to-cyan-600/5 blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm mb-8">
          <Video className="w-5 h-5 text-violet-400" />
          <span className="text-zinc-300 font-medium">Video Editor & Storyteller</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight leading-tight">
          Crafting
          <br />
          <span className="font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Visual Stories
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Transforming ideas into compelling narratives through creative editing, 
          cinematic storytelling, and engaging content.
        </p>

        {/* Minimal decoration */}
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-violet-400" />
          <div className="w-2 h-2 rounded-full bg-violet-400" />
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
