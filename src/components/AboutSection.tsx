
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
    <section className="relative w-full py-20 px-4 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Minimal floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-violet-600/10 to-purple-600/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">
            About <span className="font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50">
              <h3 className="text-2xl font-semibold text-white mb-4">Creative Editor</h3>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                Over <span className="text-violet-400 font-semibold">2.5+ years</span> of experience creating 
                compelling visual stories that <span className="text-purple-400 font-semibold">resonate with audiences</span>. 
                Specializing in creative edits and cinematic storytelling.
              </p>
              
              {/* Software */}
              <div className="space-y-3">
                <h4 className="text-lg font-medium text-zinc-200">Tools & Software</h4>
                <div className="flex flex-wrap gap-3">
                  {software.map((sw) => (
                    <div key={sw.name} className="flex items-center bg-zinc-800/60 rounded-xl px-4 py-2 border border-zinc-700/50">
                      <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${sw.color} flex items-center justify-center text-white font-bold text-sm mr-3`}>
                        {sw.icon}
                      </span>
                      <span className="text-zinc-100 font-medium">{sw.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                Skills <span className="text-yellow-400">⚡</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div key={skill} className="text-zinc-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Experience Timeline */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                Journey <span className="text-blue-400">🚀</span>
              </h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-violet-400/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-violet-400" />
                  <div className="text-sm text-violet-400 font-semibold mb-1">2024-2025</div>
                  <p className="text-zinc-300">
                    Edited reels and music videos for clients, created personal short films, 
                    expanding creative portfolio and professional experience.
                  </p>
                </div>
                <div className="relative pl-8 border-l-2 border-purple-400/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-400" />
                  <div className="text-sm text-purple-400 font-semibold mb-1">2023-2024</div>
                  <p className="text-zinc-300">
                    Started video editing journey with college student council, 
                    creating after-movies and agency content to develop foundational skills.
                  </p>
                </div>
              </div>
            </div>

            {/* Hobbies & Contact */}
            <div className="space-y-6">
              {/* Hobbies */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  Interests <span className="text-pink-400">🎨</span>
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {hobbies.map((hobby) => (
                    <div key={hobby} className="text-zinc-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                      {hobby}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50">
                <h3 className="text-lg font-semibold text-white mb-4">Let's Connect</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:pramit.0904@gmail.com" 
                    className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                      <span className="text-xs">📧</span>
                    </div>
                    <span>pramit.0904@gmail.com</span>
                  </a>
                  <a 
                    href="https://instagram.com/editverse_x" 
                    target="_blank" 
                    rel="noopener"
                    className="flex items-center gap-3 text-zinc-300 hover:text-pink-400 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                      <Instagram className="w-4 h-4 text-white" />
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
