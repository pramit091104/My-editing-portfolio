import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BrandsSection from "@/components/BrandsSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShowreelPlayer from "@/components/ShowreelPlayer";
import PageTransition from "@/components/PageTransition";
import { useInView } from "@/hooks/useInView";
import { SHOWREEL, FOOTER } from "@/constants/uiTexts";

const Index = () => {
  const [latestRef, latestInView] = useInView({ threshold: 0.05 });
  const [footerRef, footerInView] = useInView({ threshold: 0.05 });

  return (
    <PageTransition>
      <Navigation />
      <main className="min-h-screen w-full bg-zinc-950 text-zinc-100">
        <HeroSection />

        {/* Latest Showreel */}
        <section
          ref={latestRef}
          id="latest"
          className={`relative py-12 sm:py-16 px-4 sm:px-6 flex flex-col items-center transition-all duration-700 ${
            latestInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: "url(/images/showreel.png)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-900/60 to-zinc-950/90" />

          <div className="max-w-4xl w-full mx-auto relative z-10">
            <div className="text-center mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                {SHOWREEL.heading}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                  {SHOWREEL.headingAccent}
                </span>
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">{SHOWREEL.subtitle}</p>
            </div>

            <ShowreelPlayer />
          </div>
        </section>

        {/* Stats */}
        <StatsSection />

        {/* Brands */}
        <BrandsSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* About */}
        <div id="about">
          <AboutSection />
        </div>

        {/* How I Work */}
        <ProcessSection />

        {/* Footer */}
        <Footer
          footerRef={footerRef}
          title={FOOTER.indexTitle}
          subtitle={FOOTER.indexSubtitle}
          className={`transition-all duration-700 ${
            footerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        />
      </main>
    </PageTransition>
  );
};

export default Index;
