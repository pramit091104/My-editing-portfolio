import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import ReelsGallery from "@/components/ReelsGallery";
import { Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VerticalContent = () => {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
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
      <main className="min-h-screen w-full bg-zinc-950 text-zinc-100 pt-20 sm:pt-24">
        {/* Instagram Reels Section */}
        <section className="py-12 sm:py-16 md:py-20 px-2 sm:px-4 bg-gradient-to-b from-zinc-950 to-zinc-900">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              icon={<Video className="text-violet-400" />}
              title="Vertical Content"
              subtitle="Vertical format content designed for maximum engagement across social platforms."
            />
            <ReelsGallery />
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-6 sm:py-8 md:py-12 border-t border-zinc-800/50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-6 sm:mb-8">
              {/* Left: Explore Section */}
              <div className="text-center md:text-left">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-3 sm:mb-4">Explore</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-zinc-300 text-xs sm:text-sm md:text-base">
                  <a 
                    href="/" 
                    className="hover:text-violet-400 transition-colors"
                  >
                    Home
                  </a>
                  <a 
                    href="/portfolio" 
                    className="hover:text-violet-400 transition-colors"
                  >
                    Portfolio
                  </a>
                  <a 
                    href="#contact" 
                    onClick={handleContactClick}
                    className="hover:text-violet-400 transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Right: Let's Connect Section */}
              <div className="text-center md:text-right">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-3 sm:mb-4">Let's Connect</h3>
                <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-3 sm:gap-4 text-zinc-300 text-xs sm:text-sm md:text-base">
                  <a 
                    href="mailto:pramit.0904@gmail.com" 
                    className="flex items-center gap-2 hover:text-white transition-all duration-300 group"
                  >
                    <span className="inline-block w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 group-hover:rotate-12 transition-all duration-300">
                      <span className="text-xs">📧</span>
                    </span>
                    <span className="break-all text-xs sm:text-sm">pramit.0904@gmail.com</span>
                  </a>
                  <a 
                    href="https://instagram.com/_editverse_x" 
                    target="_blank" 
                    rel="noopener"
                    className="flex items-center gap-2 hover:text-pink-400 transition-all duration-300 group"
                  >
                    <span className="inline-block w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center group-hover:rotate-12 transition-all duration-300">
                      <svg className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 0A5.75 5.75 0 0 0 2 7.75Zm8.5 0A5.75 5.75 0 0 1 22 7.75Zm0 20A5.75 5.75 0 0 0 22 16.25Zm-8.5 0A5.75 5.75 0 0 1 2 16.25ZM8 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0Zm8.5-3.25h.01v.01h-.01Z"/></svg>
                    </span>
                    <span className="text-xs sm:text-sm">@editverse_x</span>
                  </a>
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-zinc-500 px-2 text-center">
              &copy; {new Date().getFullYear()} Creative Video Portfolio. 
              <span className="text-violet-400 mx-1 sm:mx-2">•</span>
              Crafted with passion for visual storytelling.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default VerticalContent;