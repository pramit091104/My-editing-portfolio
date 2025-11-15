import { Instagram } from "lucide-react";
import { useInView } from "../hooks/useInView";

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
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <section ref={ref} className="relative w-full py-8 sm:py-10 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      <div className="relative max-w-5xl mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8">
        {/* Header */}
        <div className={`text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 ${inView ? 'blur-fade-up-posterize' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 sm:mb-4 tracking-wide px-2">
            About <span className="font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-12 sm:w-16 md:w-24 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto" />
        </div>

        {/* Main Content (single column, no card backgrounds) */}
        <div className="space-y-6 sm:space-y-8 md:space-y-8">
          {/* Introduction and Skills - Left Column */}
          <div className="md:grid md:grid-cols-2 md:gap-8 md:items-start">
            <div className="space-y-4 sm:space-y-6">
              {/* Introduction */}
              <div className={inView ? 'blur-fade-up-posterize' : ''}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4">Myself</h3>
                <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 px-1">
                  Over <span className="text-violet-400 font-semibold">2.5+ years</span> of experience creating 
                  compelling visual stories that <span className="text-purple-400 font-semibold">resonate with audiences</span>. 
                  Specializing in creative edits and cinematic storytelling.
                </p>
                {/* Software */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-sm sm:text-base md:text-lg font-medium text-zinc-200">Softwares I Use</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-2 md:gap-3">
                    {software.map((sw) => (
                      <div 
                        key={sw.name} 
                        className={`flex items-center px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 ${inView ? 'blur-fade-up-posterize' : ''}`}
                      >
                        <span className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br ${sw.color} flex items-center justify-center text-white font-bold text-xs sm:text-xs md:text-sm mr-2 sm:mr-2 md:mr-3`}>
                          {sw.icon}
                        </span>
                        <span className="text-zinc-100 font-medium text-xs sm:text-sm md:text-base">{sw.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className={inView ? 'blur-fade-up-posterize' : ''}>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  My Skills <span className="text-yellow-400">⚡</span>
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {skills.map((skill) => (
                    <div 
                      key={skill} 
                      className={`text-zinc-300 flex items-center gap-2 text-xs sm:text-sm md:text-base ${inView ? 'blur-fade-up-posterize' : ''}`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Image - Right Column */}
            <div className={`flex justify-center md:justify-end mt-4 sm:mt-6 md:mt-0 ${inView ? 'blur-fade-up-posterize' : ''}`}>
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-violet-400/20 shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-violet-400/20 to-purple-400/20 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl md:text-6xl text-violet-400/50">
                    <img src="/images/profilePic.jpg" alt="Profile" className="w-full h-full object-cover rounded-full scale-150 translate-y-2 sm:translate-y-2 md:translate-y-14" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
