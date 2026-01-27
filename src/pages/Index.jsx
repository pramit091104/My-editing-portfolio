import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BrandsSection from "@/components/BrandsSection";
import Navigation from "@/components/Navigation";
import { useInView } from "@/hooks/useInView";

const Index = () => {
  const [latestRef, latestInView] = useInView({ threshold: 0.3 });
  const [footerRef, footerInView] = useInView({ threshold: 0.3 });

  return (
    <>
      <Navigation />
      <main className="min-h-screen w-full bg-zinc-950 text-zinc-100 flex">
        <div className="flex-1 ml-0 lg:ml-0">
        {/* Hero Section First */}
        <HeroSection />

        {/* Latest Content Section */}
        <section 
          ref={latestRef}
          id="latest" 
          className={`relative py-12 sm:py-16 px-4 sm:px-6 flex flex-col items-center transition-all duration-700 ${
            latestInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: 'url(/images/showreel.png)' }}
          ></div>
          
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-900/60 to-zinc-950/90"></div>
          
          {/* Content container */}
          <div className="max-w-4xl w-full mx-auto relative z-10">
            {/* Section title */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Showreel</span>
              </h2>
              <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
                Discover my most recent creative work and visual storytelling
              </p>
            </div>

            {/* Video container */}
            <div className="w-full rounded-xl overflow-hidden shadow-xl border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm" style={{ height: 'clamp(250px, 56vw, 400px)' }}>
              <iframe
                src="https://player.vimeo.com/video/1158649716"
                title="Latest Content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                style={{ minHeight: 0, border: 'none' }}
              />
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <BrandsSection />

        {/* About Section */}
        <div id="about">
          <AboutSection />
        </div>

        {/* Footer */}
        <footer 
          ref={footerRef}
          id="contact" 
          className={`py-12 sm:py-16 border-t border-zinc-800/50 bg-zinc-900 transition-all duration-700 ${
            footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-5xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Let's Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Together</span>
              </h2>
              <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
                Ready to bring your vision to life? Get in touch and let's start crafting something extraordinary.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Left: Explore Section */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-4">Explore</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <a 
                    href="/" 
                    className="text-zinc-300 hover:text-violet-400 transition-colors duration-300"
                  >
                    Home
                  </a>
                  <a 
                    href="/portfolio" 
                    className="text-zinc-300 hover:text-violet-400 transition-colors duration-300"
                  >
                    Portfolio
                  </a>
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("contact");
                      if (el) {
                        window.scrollTo({
                          top: el.getBoundingClientRect().top + window.scrollY - 80,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className="text-zinc-300 hover:text-violet-400 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Right: Let's Connect Section */}
              <div className="text-center md:text-right">
                <h3 className="text-xl font-bold text-white mb-4">Let's Connect</h3>
                <div className="flex flex-col gap-4 items-center md:items-end">
                  <a 
                    href="mailto:pramit.0904@gmail.com" 
                    className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-violet-500/50 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                      <span className="text-lg">📧</span>
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-zinc-400">Email</div>
                      <div className="text-zinc-200 font-mono text-sm">pramit.0904@gmail.com</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://instagram.com/_editverse_x" 
                    target="_blank" 
                    rel="noopener"
                    className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-pink-500/50 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 0A5.75 5.75 0 0 0 2 7.75Zm8.5 0A5.75 5.75 0 0 1 22 7.75Zm0 20A5.75 5.75 0 0 0 22 16.25Zm-8.5 0A5.75 5.75 0 0 1 2 16.25ZM8 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0Zm8.5-3.25h.01v.01h-.01Z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-zinc-400">Instagram</div>
                      <div className="text-zinc-200 font-mono text-sm">@editverse_x</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer bottom */}
            <div className="text-center pt-8 border-t border-zinc-700/50">
              <p className="text-zinc-400 font-mono text-sm">
                &copy; {new Date().getFullYear()} Creative Video Portfolio
                <span className="mx-2 text-violet-400">•</span>
                <span className="text-violet-400">
                  Crafted with passion for visual storytelling
                </span>
              </p>
            </div>
          </div>
        </footer>
        </div>
      </main>
    </>
  );
};

export default Index;