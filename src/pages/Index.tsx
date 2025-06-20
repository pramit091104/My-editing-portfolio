
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import YoutubeGallery from "@/components/YoutubeGallery";
import ReelsGallery from "@/components/ReelsGallery";
import { Youtube, Video } from "lucide-react";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      {/* Hero Section First */}
      <HeroSection />

      {/* YouTube Gallery Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            icon={<Youtube className="text-red-500" />}
            title="YouTube Portfolio"
            subtitle="Featured video edits showcasing creative storytelling and professional production quality."
          />
          <YoutubeGallery />
        </div>
      </section>

      {/* Instagram Reels Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            icon={<Video className="text-violet-400" />}
            title="Reels & Shorts"
            subtitle="Vertical format content designed for maximum engagement across social platforms."
          />
          <ReelsGallery />
        </div>
      </section>

      {/* About Section Last with unique animations */}
      <div className="animate-[fadeInUp_1s_ease-out]">
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
    </main>
  );
};

export default Index;
