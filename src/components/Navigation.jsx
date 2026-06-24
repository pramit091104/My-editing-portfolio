import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { NAV_ITEMS, SITE } from "@/constants/uiTexts";
import { useContactScroll } from "@/hooks/useContactScroll";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const scrollToContact = useContactScroll();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e) => {
    setMenuOpen(false);
    scrollToContact(e);
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out border flex flex-col md:flex-row items-center justify-between shadow-lg backdrop-blur-md ${
        menuOpen
          ? "top-3 w-[90%] py-4 px-5 bg-zinc-950/95 border-zinc-800/90 rounded-2xl gap-4"
          : scrolled
          ? "top-3 w-[90%] max-w-5xl py-2 px-4 sm:px-6 bg-zinc-950/80 border-zinc-800/80 rounded-xl gap-2 md:gap-0"
          : "top-5 w-[94%] max-w-6xl py-3.5 px-6 sm:px-8 bg-zinc-950/45 border-zinc-800/40 rounded-2xl gap-2 md:gap-0"
      }`}
    >
      {/* Brand name */}
      <div className="flex w-full items-center justify-between md:justify-start">
        <Link to="/" className="text-2xl sm:text-3xl md:text-4xl font-blank-script text-white mb-0">
          {SITE.brandName}
        </Link>
        <button
          className="md:hidden p-2 focus:outline-none text-white cursor-pointer"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Nav links */}
      <div className={`flex-col md:flex md:flex-row w-full md:w-auto justify-center gap-3 sm:gap-4 md:gap-10 items-center ${menuOpen ? "flex" : "hidden"} md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 pb-2 md:pb-0`}>
        {NAV_ITEMS.filter((item) => item.id !== "contact").map((item) => (
          <Link
            key={item.id}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={`text-zinc-100 hover:text-violet-400 transition-colors font-mono text-sm sm:text-base md:text-lg tracking-wide focus:outline-none whitespace-nowrap ${
              location.pathname === item.path ? "text-violet-400" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Contact button — desktop */}
      <div className="hidden md:block">
        <button
          onClick={handleContactClick}
          className="bg-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-500 hover:text-white text-zinc-900 font-mono px-4 md:px-6 py-2 rounded-xl shadow transition-all duration-300 text-sm md:text-base font-semibold focus:outline-none cursor-pointer"
        >
          CONTACT
        </button>
      </div>

      {/* Contact button — mobile */}
      <div className={`md:hidden w-full ${menuOpen ? "block" : "hidden"}`}>
        <button
          onClick={handleContactClick}
          className="bg-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-500 hover:text-white text-zinc-900 font-mono px-4 py-2 rounded-xl shadow transition-all duration-300 text-sm font-semibold focus:outline-none w-full cursor-pointer"
        >
          CONTACT
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
