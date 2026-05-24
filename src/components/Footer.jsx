import { useContactScroll } from "@/hooks/useContactScroll";
import { FOOTER, SITE, OWNER } from "@/constants/uiTexts";

const InstagramIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 0A5.75 5.75 0 0 0 2 7.75Zm8.5 0A5.75 5.75 0 0 1 22 7.75Zm0 20A5.75 5.75 0 0 0 22 16.25Zm-8.5 0A5.75 5.75 0 0 1 2 16.25ZM8 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0Zm8.5-3.25h.01v.01h-.01Z" />
  </svg>
);

const Footer = ({ title, subtitle, footerRef, className = "" }) => {
  const scrollToContact = useContactScroll();

  return (
    <footer
      ref={footerRef}
      id="contact"
      className={`py-12 sm:py-16 border-t border-zinc-800/50 bg-zinc-900 ${className}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Optional header */}
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
            {subtitle && (
              <p className="text-zinc-300 text-lg max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Explore */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">{FOOTER.exploreTitle}</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <a href="/" className="text-zinc-300 hover:text-violet-400 transition-colors duration-300">
                Home
              </a>
              <a href="/portfolio" className="text-zinc-300 hover:text-violet-400 transition-colors duration-300">
                Portfolio
              </a>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="text-zinc-300 hover:text-violet-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Let's Connect */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-white mb-4">{FOOTER.connectTitle}</h3>
            <div className="flex flex-col gap-4 items-center md:items-end">
              <a
                href={`mailto:${OWNER.email}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-violet-500/50 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                  <span className="text-lg">📧</span>
                </div>
                <div className="text-left">
                  <div className="text-sm text-zinc-400">Email</div>
                  <div className="text-zinc-200 font-mono text-sm">{OWNER.email}</div>
                </div>
              </a>

              <a
                href={OWNER.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-pink-500/50 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <InstagramIcon />
                </div>
                <div className="text-left">
                  <div className="text-sm text-zinc-400">Instagram</div>
                  <div className="text-zinc-200 font-mono text-sm">{OWNER.instagram.handle}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-center pt-8 border-t border-zinc-700/50">
          <p className="text-zinc-400 font-mono text-sm">
            &copy; {new Date().getFullYear()} {SITE.copyright}
            <span className="mx-2 text-violet-400">•</span>
            <span className="text-violet-400">{SITE.copyrightTagline}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
