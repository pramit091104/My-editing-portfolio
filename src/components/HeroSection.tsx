
import { Video, Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-violet-600/10 to-purple-600/10 blur-3xl transform -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 blur-3xl animate-pulse delay-1000" />
      
      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10">
        {/* Left Column - Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-zinc-900/70 border border-zinc-800/50 backdrop-blur-md mb-6 md:mb-8 animate-[fadeInUp_0.8s_ease-out]">
            <Video className="w-4 h-4 md:w-5 md:h-5 text-violet-400" />
            <span className="text-sm md:text-base text-zinc-300 font-medium">Video Editor & Storyteller</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-light text-white mb-4 md:mb-6 tracking-tight leading-tight animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            Hi, I'm
            <br />
            <span className="font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pramit
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-2xl mb-6 md:mb-8 leading-relaxed font-light animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            Transforming ideas into compelling visual narratives through creative editing, 
            cinematic storytelling, and engaging content that resonates with audiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
            <a 
              href="#portfolio" 
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-medium hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25 text-center"
            >
              View My Work
            </a>
            <a 
              href="mailto:pramit.0904@gmail.com" 
              className="px-6 py-3 md:px-8 md:py-4 bg-zinc-900/70 text-zinc-300 rounded-xl font-medium border border-zinc-700 hover:bg-zinc-800/70 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center backdrop-blur-md"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 text-center lg:text-left animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
            <div>
              <div className="text-xl md:text-2xl font-bold text-white">2.5+</div>
              <div className="text-xs md:text-sm text-zinc-400">Years Experience</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-white">50+</div>
              <div className="text-xs md:text-sm text-zinc-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-white">100%</div>
              <div className="text-xs md:text-sm text-zinc-400">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-2 border-violet-400/20 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full border border-purple-400/30 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '8s' }}></div>
            
            {/* Profile image container */}
            <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-sm border border-zinc-700/50 overflow-hidden shadow-2xl">
              {/* Placeholder for your image - replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <div className="text-4xl md:text-6xl lg:text-8xl text-zinc-600">
                  <img src="/images/image1.jpg" alt="Pramit - Video Editor" />
                </div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-600/10 via-transparent to-purple-600/10"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
              <Video className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-6 h-6 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
              ✨
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-zinc-600 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-violet-400 rounded-full mt-1 md:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
