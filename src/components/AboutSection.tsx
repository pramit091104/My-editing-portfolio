
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
    name: "Adobe After Effect",
    icon: (
      <span className="bg-zinc-800/90 text-white font-bold px-2 py-1 rounded shadow text-base mr-2">
        Ae
      </span>
    ),
  },
  {
    name: "Adobe Premiere Pro",
    icon: (
      <span className="bg-zinc-800/90 text-white font-bold px-2 py-1 rounded shadow text-base mr-2">
        Pr
      </span>
    ),
  },
  {
    name: "Capcut",
    icon: (
      <span className="bg-zinc-100/80 text-zinc-800 font-bold px-2 py-1 rounded shadow text-base mr-2">
        <svg width="18" height="18" viewBox="0 0 27 27" fill="none"><rect width="27" height="27" rx="4" fill="#E5E7EB"/><path d="M7 20L20 7M7 7L20 20" stroke="#22223B" strokeWidth="2.2" strokeLinecap="round"/></svg>
      </span>
    ),
  },
];

export default function AboutSection() {
  return (
    <section className="relative w-full py-16 md:py-24 px-2 bg-gradient-to-b from-zinc-950 via-zinc-900 to-[#181A20] overflow-visible border-b border-zinc-800 min-h-[620px]">
      {/* Floating decoration and lines */}
      <div className="pointer-events-none select-none absolute left-1/3 -top-16 opacity-35 z-0 blur-[2px] w-1/2 h-40 bg-gradient-to-r from-indigo-800 via-purple-800/80 to-pink-900 rounded-full" />
      <div className="hidden md:block pointer-events-none select-none absolute right-1/2 bottom-4 w-40 h-40 rounded-full border-2 border-dashed border-zinc-600/40 opacity-40 rotate-6" />
      <div className="pointer-events-none absolute left-2 bottom-40 w-48 h-16 z-0">
        <svg width="160" height="64" fill="none" viewBox="0 0 160 64" className="opacity-30">
          <path d="M5 25C45 -2 96 82 155 11" stroke="#fff" strokeWidth="2" strokeDasharray="7 10" />
        </svg>
      </div>
      {/* Grid container */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-8 z-10">
        {/* Left (About Me & Profile pic) */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-4 rounded-xl bg-zinc-900/70 p-8 border border-zinc-800 shadow-xl backdrop-blur-sm animate-fade-in">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl font-extrabold tracking-tight text-white/95">About Me</span>
              <span className="text-amber-400 text-2xl animate-bounce">✱</span>
              <span className="inline-block -translate-y-0.5">
                <svg width={29} height={24} className="inline" viewBox="0 0 32 30" fill="none">
                  <circle cx="11" cy="10" r="8" stroke="#e6e7eb" strokeWidth={2} fill="#191729" />
                  <rect x="12" y="20" width="14" height="5" rx="2.5" fill="#191729" stroke="#e6e7eb" strokeWidth={2} />
                  <rect x="18" y="6" width="5" height="10" rx="2.5" fill="#191729" stroke="#e6e7eb" strokeWidth={2} />
                </svg>
              </span>
            </div>
            <p className="text-zinc-300 text-lg italic font-mono">
              I have experience of over <span className="font-bold text-emerald-300">2.5+ years</span> creating creative edits and storytelling videos that <span className="font-bold text-primary">audiences resonate to</span>.
              <br />
              <span className="inline-block mt-2">Softwares I have command on:</span>
            </p>
            {/* Software Icons */}
            <div className="flex gap-4 mt-1">{software.map((sw) => (
              <span key={sw.name} className="flex items-center bg-zinc-800/80 px-3 py-2 rounded-xl shadow border border-zinc-700 mr-1 last:mr-0">
                {sw.icon}
                <span className="ml-1 text-base text-zinc-100 font-semibold">{sw.name}</span>
              </span>
            ))}</div>
          </div>
          {/* Card with hobbies and contact */}
          <div className="flex flex-col gap-6 bg-zinc-900/80 shadow border border-zinc-800 rounded-xl p-6 animate-fade-in mt-0">
            <div>
              <div className="font-bold text-xl text-rose-200 flex items-center gap-2">
                <span className="inline-block">Hobbies</span>
                <span className="inline-block text-2xl">🎨</span>
              </div>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1 text-zinc-300 text-base pl-4 list-disc">
                {hobbies.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
            <div>
              <div className="font-bold text-xl text-cyan-300 flex items-center gap-2 mb-1">
                <span>Contact</span>
                <span className="text-base font-normal text-muted-foreground ml-1">for collab & work</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <a href="mailto:pramit.0904@gmail.com" className="flex items-center gap-2 text-white hover:text-primary transition story-link text-base">
                  <span className="bg-zinc-950 border border-zinc-700 px-1.5 py-1 rounded">
                    <svg aria-hidden="true" width={18} height={18} viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4z" fill="#fff"/><path d="M4 4l8 8 8-8" stroke="#232535" strokeWidth="2"/></svg>
                  </span>
                  pramit.0904@gmail.com
                </a>
                <a href="https://instagram.com/editverse_x" className="flex items-center gap-2 text-white hover:text-pink-400 transition story-link text-base" target="_blank" rel="noopener">
                  <span className="bg-gradient-to-tr from-indigo-500 via-purple-400 to-pink-400 p-1.5 rounded-lg">
                    <Instagram className="w-5 h-5 text-zinc-50" />
                  </span>
                  @editverse_x
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Right (Experience/Skills) */}
        <div className="col-span-1 md:col-span-5">
          <div className="flex flex-col gap-7 w-full animate-fade-in">
            {/* Experience Timeline */}
            <div className="bg-zinc-900/70 rounded-xl border border-zinc-800 p-7 pb-5 shadow-lg relative">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-2xl font-bold tracking-tight text-white">
                  Experience
                </span>
                <span className="inline-block text-yellow-200 text-2xl">⭐</span>
              </div>
              <div className="border-l-2 border-primary/40 pl-6 ml-2 mt-4 space-y-5 relative">
                <div>
                  <div className="text-sm text-pink-300 font-semibold mb-1 tracking-widest">2023-2024</div>
                  <div className="text-zinc-300 text-base">
                    Began video editing with my college's student council, creating after-movies, reels, and editing for agencies, enhancing my skills.
                  </div>
                </div>
                <div>
                  <div className="text-sm text-pink-300 font-semibold mb-1 tracking-widest">2024-2025</div>
                  <div className="text-zinc-300 text-base">
                    Edited reels and a music video for a client, gaining valuable experience, and also created a short film for myself.
                  </div>
                </div>
              </div>
            </div>
            {/* Skills Block */}
            <div className="bg-zinc-900/80 rounded-xl border border-zinc-800 p-7 shadow flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="tracking-wider text-xl font-bold text-white">Skills</span>
                <span className="font-sans text-2xl">🎬</span>
              </div>
              <ul className="grid grid-cols-2 gap-2 text-zinc-200 text-base pl-2 list-disc">
                {skills.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            {/* Quirky Arrow right decoration */}
            <div className="hidden md:block absolute left-0 bottom-0 translate-y-14 -translate-x-24 opacity-50">
              <svg width="128" height="36" fill="none" viewBox="0 0 128 36">
                <path d="M7 27C37 1 100 38 121 12" stroke="#CEC1F8" strokeWidth="3" strokeDasharray="6 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
