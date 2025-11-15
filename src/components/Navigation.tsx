import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home", path: "/" },
  { id: "portfolio", label: "Portfolio", path: "/portfolio" },
  { id: "contact", label: "Contact", path: "/#contact" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Close menu when route changes
    setMenuOpen(false);
  }, [location.pathname]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("contact") || document.querySelector("footer");
        if (el) {
          window.scrollTo({
            top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // If on home page, scroll to contact
      const el = document.getElementById("contact") || document.querySelector("footer");
      if (el) {
        window.scrollTo({
          top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/90 border-b border-zinc-800/50 shadow-sm backdrop-blur flex flex-col md:flex-row items-center justify-between px-3 sm:px-4 md:px-8 py-2 sm:py-3 gap-2 md:gap-0">
      {/* Brand name */}
      <div className="flex w-full items-center justify-between md:justify-start">
        <Link to="/" className="text-2xl sm:text-3xl md:text-4xl font-blank-script text-white mb-0">
          editverse
        </Link>
        {/* Hamburger menu icon for mobile */}
        <button
          className="md:hidden p-2 focus:outline-none text-white"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {/* Center nav links and contact button, hidden on mobile unless menuOpen */}
      <div className={`flex-col md:flex md:flex-row w-full md:w-auto justify-center gap-3 sm:gap-4 md:gap-10 items-center ${menuOpen ? 'flex' : 'hidden'} md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 pb-2 md:pb-0`}>
        {NAV_ITEMS.filter(item => item.id !== "contact").map((item) => (
          <Link
            key={item.id}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={`text-zinc-100 hover:text-violet-400 transition-colors font-mono text-sm sm:text-base md:text-lg tracking-wide focus:outline-none ${
              location.pathname === item.path ? 'text-violet-400' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      {/* Contact button positioned on the right */}
      <div className="hidden md:block">
        <button
          onClick={handleContactClick}
          className="bg-white text-zinc-900 font-mono px-4 md:px-6 py-2 rounded-xl shadow hover:bg-zinc-100 transition-colors text-sm md:text-base font-semibold focus:outline-none"
        >
          CONTACT
        </button>
      </div>
      {/* Contact button for mobile */}
      <div className={`md:hidden w-full ${menuOpen ? 'block' : 'hidden'}`}>
        <button
          onClick={handleContactClick}
          className="bg-white text-zinc-900 font-mono px-4 py-2 rounded-xl shadow hover:bg-zinc-100 transition-colors text-sm font-semibold focus:outline-none w-full"
        >
          CONTACT
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

