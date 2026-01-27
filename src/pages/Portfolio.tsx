import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import YoutubeGallery from "@/components/YoutubeGallery";
import ReelsGallery from "@/components/ReelsGallery";
import { Youtube, Video, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useInView } from "@/hooks/useInView";

const Portfolio = () => {
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView<HTMLElement>({ threshold: 0.3 });
  const [youtubeRef, youtubeInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [reelsRef, reelsInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [footerRef, footerInView] = useInView<HTMLElement>({ threshold: 0.3 });

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen w-full bg-zinc-950 text-zinc-100">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className={`pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6 transition-all duration-700 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Portfolio</span>
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed">
              A showcase of creative video content across different formats and platforms
            </p>
          </div>
        </section>

        {/* YouTube Gallery Section */}
        <section 
          ref={youtubeRef}
          className={`py-12 sm:py-16 px-4 sm:px-6 transition-all duration-700 ${
            youtubeInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-red-500" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Long Form Content</h2>
              </div>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                Featured video edits showcasing creative storytelling and professional production quality
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
            </div>
            <YoutubeGallery />
          </div>
        </section>

        {/* Instagram Reels Section */}
        <section 
          ref={reelsRef}
          className={`py-12 sm:py-16 px-4 sm:px-6 bg-zinc-900 transition-all duration-700 ${
            reelsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                  <Video className="w-5 h-5 text-violet-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Vertical Content</h2>
              </div>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                Vertical format content designed for maximum engagement across social platforms
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
            </div>
            <ReelsGallery />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 rounded-2xl bg-zinc-800/30 border border-violet-500/30">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Create Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Next Project?</span>
              </h3>
              <p className="text-zinc-300 text-lg mb-6">
                Let's collaborate and bring your creative vision to life with professional video content.
              </p>
              <a 
                href="mailto:pramit.0904@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold rounded-xl hover:from-violet-600 hover:to-pink-600 transition-colors duration-300"
              >
                <Play className="w-5 h-5" />
                <span>Start Your Project</span>
              </a>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer 
          ref={footerRef}
          id="contact" 
          className={`py-12 sm:py-16 border-t border-zinc-800/50 bg-zinc-900 transition-all duration-700 ${
            footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-5xl mx-auto px-6">
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
                    onClick={handleContactClick}
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
      </main>
    </>
  );
};

export default Portfolio;

