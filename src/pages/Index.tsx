import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import YoutubeGallery from "@/components/YoutubeGallery";
import ReelsGallery from "@/components/ReelsGallery";
import VfxBreakdownSection from "@/components/VfxBreakdownSection";
import { Youtube, Video } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import Timeline from "@/components/Timeline";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "portfolio", label: "Breakdowns", color: "bg-violet-400" },
  { id: "longform", label: "Long Videos", color: "bg-blue-400" },
  { id: "vertical", label: "Vertical Content", color: "bg-pink-400" },
  { id: "about", label: "About", color: "bg-zinc-400" },
];

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
    <main className="min-h-screen w-full bg-zinc-950 text-zinc-100 flex">
      <Timeline sections={SECTIONS} activeSection={activeSection} />
      <div className="flex-1 ml-0 lg:ml-40">
      {/* Hero Section First */}
      <HeroSection />

      {/* Latest Content Section */}
      <section id="latest" className="py-10 md:py-16 px-4 flex flex-col items-center">
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
      
      {/* VFX Breakdown Section */}
      <div id="portfolio">
        <VfxBreakdownSection />
      </div>

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
          <p className="text-sm md:text-base text-zinc-500">
            &copy; {new Date().getFullYear()} Creative Video Portfolio. 
            <span className="text-violet-400 mx-2">•</span>
            Crafted with passion for visual storytelling.
          </p>
        </div>
      </footer>
      </div>
    </main>
  );
};

export default Index;
