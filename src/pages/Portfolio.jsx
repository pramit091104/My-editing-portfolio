import Navigation from "@/components/Navigation";
import YoutubeGallery from "@/components/YoutubeGallery";
import ReelsGallery from "@/components/ReelsGallery";
import Footer from "@/components/Footer";
import { Youtube, Video, Play } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { PORTFOLIO, OWNER } from "@/constants/uiTexts";

const Portfolio = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [youtubeRef, youtubeInView] = useInView({ threshold: 0.2 });
  const [reelsRef, reelsInView] = useInView({ threshold: 0.2 });
  const [footerRef, footerInView] = useInView({ threshold: 0.3 });

  return (
    <>
      <Navigation />
      <main className="min-h-screen w-full bg-zinc-950 text-zinc-100">
        {/* Hero */}
        <section
          ref={heroRef}
          className={`pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6 transition-all duration-700 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {PORTFOLIO.heading}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                {PORTFOLIO.headingAccent}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed">{PORTFOLIO.subtitle}</p>
          </div>
        </section>

        {/* Long Form Content */}
        <section
          ref={youtubeRef}
          className={`py-12 sm:py-16 px-4 sm:px-6 transition-all duration-700 ${
            youtubeInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-red-500" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">{PORTFOLIO.longForm.heading}</h2>
              </div>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">{PORTFOLIO.longForm.subtitle}</p>
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mt-4 rounded-full" />
            </div>
            <YoutubeGallery />
          </div>
        </section>

        {/* Vertical Content */}
        <section
          ref={reelsRef}
          className={`py-12 sm:py-16 px-4 sm:px-6 bg-zinc-900 transition-all duration-700 ${
            reelsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                  <Video className="w-5 h-5 text-violet-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">{PORTFOLIO.vertical.heading}</h2>
              </div>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">{PORTFOLIO.vertical.subtitle}</p>
              <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto mt-4 rounded-full" />
            </div>
            <ReelsGallery />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 rounded-2xl bg-zinc-800/30 border border-violet-500/30">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {PORTFOLIO.cta.heading}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                  {PORTFOLIO.cta.headingAccent}
                </span>
              </h3>
              <p className="text-zinc-300 text-lg mb-6">{PORTFOLIO.cta.subtitle}</p>
              <a
                href={`mailto:${OWNER.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold rounded-xl hover:from-violet-600 hover:to-pink-600 transition-colors duration-300"
              >
                <Play className="w-5 h-5" />
                <span>{PORTFOLIO.cta.button}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer
          footerRef={footerRef}
          className={`transition-all duration-700 ${
            footerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        />
      </main>
    </>
  );
};

export default Portfolio;
