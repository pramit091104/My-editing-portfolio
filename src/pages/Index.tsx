
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import YoutubeGallery from "@/components/YoutubeGallery";
import ReelsGallery from "@/components/ReelsGallery";
import { Youtube, Video } from "lucide-react";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-background">
      <AboutSection />
      <HeroSection />

      {/* YouTube Gallery Section */}
      <section className="max-w-6xl mx-auto py-12 w-full">
        <SectionTitle
          icon={<Youtube className="text-red-600" size={32} />}
          title="YouTube Highlights"
          subtitle="Featured YouTube video edits for shows, business, and education."
        />
        <YoutubeGallery />
      </section>

      {/* Instagram Reels/Shorts Section */}
      <section className="mt-0 max-w-6xl mx-auto py-12 w-full">
        <SectionTitle
          icon={<Video className="text-primary" size={32} />}
          title="Instagram Reels & Shorts"
          subtitle="Mix of Business, Informative, & Creative reels – vertical format, fast and engaging."
        />
        <ReelsGallery />
      </section>

      {/* Footer */}
      <footer className="mt-16 py-10 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Video Editing Portfolio. Crafted with <span className="text-primary">♥</span>
      </footer>
    </main>
  );
};

export default Index;
