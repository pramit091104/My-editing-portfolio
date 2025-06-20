
import { Instagram } from "lucide-react";

const skills = [
  "Videography",
  "Cinematography", 
  "Reels/Shorts",
  "Long Video",
  "Storytelling",
  "Color Grading",
];

const hobbies = [
  "Creating Videos",
  "Listening to Songs", 
  "Video Editing",
  "Sketching",
  "Playing Video Games",
];

const software = [
  {
    name: "After Effects",
    icon: "Ae",
    color: "from-purple-600 to-blue-600"
  },
  {
    name: "Premiere Pro", 
    icon: "Pr",
    color: "from-purple-600 to-pink-600"
  },
  {
    name: "CapCut",
    icon: "Cc",
    color: "from-gray-600 to-gray-800"
  },
];

export default function AboutSection() {
  return (
    <section className="relative w-full py-16 md:py-20 px-4 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Unique animated background elements for about section */}
      <div className="absolute top-20 left-10 w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-violet-600/15 to-purple-600/15 blur-3xl animate-pulse delay-200" />
      <div className="absolute bottom-20 right-10 w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-600/15 to-cyan-600/15 blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-60 md:h-60 rounded-full bg-gradient-to-r from-pink-600/5 to-violet-600/5 blur-3xl animate-spin-slow" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header with staggered animation */}
        <div className="text-center mb-12 md:mb-16 transform transition-all duration-1000 animate-[slideInFromBottom_1s_ease-out]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 tracking-wide">
            About <span className="font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto animate-[expandWidth_1s_ease-out_0.5s_both]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column with cascade animation */}
          <div className="space-y-6 md:space-y-8 animate-[slideInLeft_1s_ease-out_0.3s_both]">
            {/* Introduction */}
            <div className="bg-zinc-900/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-zinc-800/50 transform transition-all duration-500 hover:bg-zinc-900/80 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/10">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Creative Editor</h3>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6">
                Over <span className="text-violet-400 font-semibold">2.5+ years</span> of experience creating 
                compelling visual stories that <span className="text-purple-400 font-semibold">resonate with audiences</span>. 
                Specializing in creative edits and cinematic storytelling.
              </p>
              
              {/* Software with staggered hover effects */}
              <div className="space-y-3">
                <h4 className="text-base md:text-lg font-medium text-zinc-200">Tools & Software</h4>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {software.map((sw, index) => (
                    <div 
                      key={sw.name} 
                      className="flex items-center bg-zinc-800/60 rounded-xl px-3 py-2 md:px-4 md:py-2 border border-zinc-700/50 transform transition-all duration-300 hover:scale-110 hover:bg-zinc-700/60 animate-[popIn_0.6s_ease-out] group"
                      style={{ animationDelay: `${index * 0.1 + 0.8}s` }}
                    >
                      <span className={`w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br ${sw.color} flex items-center justify-center text-white font-bold text-xs md:text-sm mr-2 md:mr-3 group-hover:rotate-12 transition-transform duration-300`}>
                        {sw.icon}
                      </span>
                      <span className="text-zinc-100 font-medium text-sm md:text-base">{sw.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills with animated bullets */}
            <div className="bg-zinc-900/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-zinc-800/50 transform transition-all duration-500 hover:bg-zinc-900/80 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                Skills <span className="text-yellow-400 animate-pulse">⚡</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={skill} 
                    className="text-zinc-300 flex items-center gap-2 animate-[slideInRight_0.5s_ease-out] hover:text-white transition-colors duration-300 text-sm md:text-base"
                    style={{ animationDelay: `${index * 0.1 + 1.2}s` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column with cascade animation */}
          <div className="space-y-6 md:space-y-8 animate-[slideInRight_1s_ease-out_0.6s_both]">
            {/* Experience Timeline with animated progression */}
            <div className="bg-zinc-900/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-zinc-800/50 transform transition-all duration-500 hover:bg-zinc-900/80 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-6 flex items-center gap-2">
                Journey <span className="text-blue-400 animate-bounce">🚀</span>
              </h3>
              <div className="space-y-6">
                <div className="relative pl-6 md:pl-8 border-l-2 border-violet-400/30 animate-[drawLine_1.5s_ease-out_1.5s_both]">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-violet-400 animate-[popIn_0.6s_ease-out_1.8s_both]" />
                  <div className="text-xs md:text-sm text-violet-400 font-semibold mb-1">2024-2025</div>
                  <p className="text-zinc-300 text-sm md:text-base">
                    Edited reels and music videos for clients, created personal short films, 
                    expanding creative portfolio and professional experience.
                  </p>
                </div>
                <div className="relative pl-6 md:pl-8 border-l-2 border-purple-400/30 animate-[drawLine_1.5s_ease-out_2s_both]">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-400 animate-[popIn_0.6s_ease-out_2.3s_both]" />
                  <div className="text-xs md:text-sm text-purple-400 font-semibold mb-1">2023-2024</div>
                  <p className="text-zinc-300 text-sm md:text-base">
                    Started video editing journey with college student council, 
                    creating after-movies and agency content to develop foundational skills.
                  </p>
                </div>
              </div>
            </div>

            {/* Hobbies & Contact with hover animations */}
            <div className="space-y-6">
              {/* Hobbies */}
              <div className="bg-zinc-900/60 backdrop-blur-md rounded-2xl p-6 border border-zinc-800/50 transform transition-all duration-500 hover:bg-zinc-900/80 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10">
                <h3 className="text-base md:text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  Interests <span className="text-pink-400 animate-spin-slow">🎨</span>
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {hobbies.map((hobby, index) => (
                    <div 
                      key={hobby} 
                      className="text-zinc-300 flex items-center gap-2 animate-[slideInLeft_0.5s_ease-out] hover:text-white transition-colors duration-300 text-sm md:text-base"
                      style={{ animationDelay: `${index * 0.1 + 2.5}s` }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                      {hobby}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact with interactive animations */}
              <div className="bg-zinc-900/60 backdrop-blur-md rounded-2xl p-6 border border-zinc-800/50 transform transition-all duration-500 hover:bg-zinc-900/80 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                <h3 className="text-base md:text-lg font-semibold text-white mb-4">Let's Connect</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:pramit.0904@gmail.com" 
                    className="flex items-center gap-3 text-zinc-300 hover:text-white transition-all duration-300 group transform hover:translate-x-2 text-sm md:text-base"
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 group-hover:rotate-12 transition-all duration-300">
                      <span className="text-xs">📧</span>
                    </div>
                    <span className="break-all">pramit.0904@gmail.com</span>
                  </a>
                  <a 
                    href="https://instagram.com/editverse_x" 
                    target="_blank" 
                    rel="noopener"
                    className="flex items-center gap-3 text-zinc-300 hover:text-pink-400 transition-all duration-300 group transform hover:translate-x-2 text-sm md:text-base"
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center group-hover:rotate-12 transition-all duration-300">
                      <Instagram className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                    <span>@editverse_x</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
