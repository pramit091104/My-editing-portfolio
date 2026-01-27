import { useInView } from "../hooks/useInView";
import { ExternalLink, Sparkles } from "lucide-react";

const skills = [
  { name: "Videography", level: 95},
  { name: "Cinematography", level: 90 }, 
  { name: "Reels/Shorts", level: 98 },
  { name: "Long Video", level: 85},
  { name: "Storytelling", level: 92,},
  { name: "Color Grading", level: 88,},
];

const software = [
  {
    name: "After Effects",
    icon: "Ae",
    color: "from-purple-600 to-blue-600",
  },
  {
    name: "Premiere Pro", 
    icon: "Pr",
    color: "from-purple-600 to-pink-600",
  },
  {
    name: "CapCut",
    icon: "Cc",
    color: "from-gray-600 to-gray-800",
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  
  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 sm:px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Me</span>
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Passionate visual storyteller crafting compelling narratives through the lens
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet-400" />
                My Journey
              </h3>
              <div className="space-y-3 text-zinc-300 leading-relaxed">
                <p>
                  With over <span className="text-violet-400 font-semibold">2.5+ years</span> of experience in visual storytelling, 
                  I've mastered the art of transforming ideas into <span className="text-purple-400 font-semibold">compelling visual narratives</span>.
                </p>
                <p>
                  Specializing in <span className="text-pink-400 font-semibold">creative editing techniques</span> and 
                  <span className="text-blue-400 font-semibold"> cinematic storytelling</span>, I bring unique perspectives 
                  to every project.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Skills & Expertise</h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-violet-400 font-semibold text-sm">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Software */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Tools & Software</h3>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {software.map((sw) => (
                  <div key={sw.name} className="flex items-center gap-2 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-violet-500/50 transition-colors duration-300">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${sw.color} flex items-center justify-center text-white font-bold text-xs`}>
                      {sw.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{sw.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-violet-400/30">
                <img 
                  src="/images/profilePic.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover scale-150 translate-y-8" 
                />
              </div>
            </div>

            {/* Simple CTA */}
            <div className="p-4 rounded-lg bg-violet-500/10 border border-violet-500/30">
              <h4 className="text-lg font-bold text-white mb-2">Ready to Create Something Amazing?</h4>
              <p className="text-zinc-300 mb-3 text-sm">
                Let's collaborate and bring your vision to life.
              </p>
              <a 
                href="mailto:pramit.0904@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold rounded-lg hover:from-violet-600 hover:to-pink-600 transition-colors duration-300"
              >
                <span>Let's Connect</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}