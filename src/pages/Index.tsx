import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import YoutubeGallery from "@/components/YoutubeGallery";
import ReelsGallery from "@/components/ReelsGallery";
import { Youtube, Video, Mail, MapPin } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import Timeline from "@/components/Timeline";
import { useEffect, useState } from "react";
import React from "react";

const SECTIONS = [
  { id: "home", label: "Home", color: "bg-violet-400" },
  { id: "longform", label: "Long Videos", color: "bg-blue-400" },
  { id: "vertical", label: "Vertical Content", color: "bg-pink-400" },
  { id: "about", label: "About", color: "bg-zinc-400" },
];

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "longform", label: "Long Form Content" },
  { id: "vertical", label: "Vertical Content" },
  { id: "contact", label: "Contact" },
];

const handleNavClick = (id: string) => {
  if (id === "contact") {
    const el = document.getElementById("contact") || document.querySelector("footer");
    if (el) {
      window.scrollTo({
        top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth",
    });
  }
};

const Index = () => {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let current = SECTIONS[0].id;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/90 border-b border-zinc-800/50 shadow-sm backdrop-blur flex items-center justify-between px-10 py-4">
        {/* Brand name */}
        <div className="text-5xl font-blank-script text-white">editverse</div>
        {/* Center nav links */}
        <div className="flex-1 flex justify-center gap-10">
          {NAV_ITEMS.filter(item => item.id !== "contact").map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-zinc-100 hover:text-violet-400 transition-colors font-mono text-lg tracking-wide focus:outline-none"
              style={{ background: 'none', border: 'none' }}
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* Contact button */}
        <button
          onClick={() => handleNavClick("contact")}
          className="bg-white text-zinc-900 font-mono px-6 py-2 rounded-xl shadow hover:bg-zinc-100 transition-colors text-base font-semibold focus:outline-none"
        >
          CONTACT
        </button>
      </nav>
      
      <main className="min-h-screen w-full bg-zinc-950 text-zinc-100 flex">
        <div className="flex-1 ml-0 lg:ml-0">
        {/* Hero Section First */}
        <HeroSection />

        {/* Latest Content Section */}
        <section id="latest" className="py-10 -mt-10 md:py-12 px-4 flex flex-col items-center">
          <div className="max-w-2xl w-full mx-auto">
            <SectionTitle
              title="Latest Content"
              subtitle="Check out my most recent video upload."
            />
            <div className="w-full aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg mt-6">
              <iframe
                src="https://www.youtube.com/embed/gKrMW3Ci60o"
                title="Latest Content"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* YouTube Gallery Section */}
        <section id="longform" className="py-16 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              // icon={<Youtube className="text-red-500" />}
              title="Long Videos"
              subtitle="Featured video edits showcasing creative storytelling and professional production quality."
            />
            <YoutubeGallery />
          </div>
        </section>

        {/* Instagram Reels Section */}
        <section id="vertical" className="py-16 md:py-20 px-4 bg-gradient-to-b from-zinc-950 to-zinc-900">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              icon={<Video className="text-violet-400" />}
              title="Vertical Content"
              subtitle="Vertical format content designed for maximum engagement across social platforms."
            />
            <ReelsGallery />
          </div>
        </section>

        

        {/* About Section Last with unique animations */}
        <div id="about" className="animate-[fadeInUp_1s_ease-out]">
          <AboutSection />
        </div>

        {/* Footer */}
        <footer className="py-8 md:py-12 text-center border-t border-zinc-800/50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-4">
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">Let's Connect</h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-zinc-300 text-sm md:text-base">
                <a 
                  href="mailto:pramit.0904@gmail.com" 
                  className="flex items-center gap-2 hover:text-white transition-all duration-300 group"
                >
                  <span className="inline-block w-6 h-6 md:w-8 md:h-8 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-xs">📧</span>
                  </span>
                  <span className="break-all">pramit.0904@gmail.com</span>
                </a>
                <a 
                  href="https://instagram.com/_editverse_x" 
                  target="_blank" 
                  rel="noopener"
                  className="flex items-center gap-2 hover:text-pink-400 transition-all duration-300 group"
                >
                  <span className="inline-block w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center group-hover:rotate-12 transition-all duration-300">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 0A5.75 5.75 0 0 0 2 7.75Zm8.5 0A5.75 5.75 0 0 1 22 7.75Zm0 20A5.75 5.75 0 0 0 22 16.25Zm-8.5 0A5.75 5.75 0 0 1 2 16.25ZM8 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0Zm8.5-3.25h.01v.01h-.01Z"/></svg>
                  </span>
                  <span>@editverse_x</span>
                </a>
              </div>
            </div>
            <p className="text-sm md:text-base text-zinc-500">
              &copy; {new Date().getFullYear()} Creative Video Portfolio. 
              <span className="text-violet-400 mx-2">•</span>
              Crafted with passion for visual storytelling.
            </p>
          </div>
        </footer>
        </div>
      </main>
    </>
  );
};

export default Index;
