const Timeline = ({ sections, activeSection }) => {
  // Scroll to section smoothly
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80, // offset for fixed nav
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      {/* Vertical timeline for desktop */}
      <div className="hidden lg:flex flex-col items-center fixed top-1/4 left-0 z-30 px-1 h-2/3 justify-between" style={{height: '60vh'}}>
        <div className="flex flex-col items-center h-full justify-between">
          {sections.map((section, idx) => (
            <div key={section.id} className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => handleClick(section.id)}
                className="focus:outline-none bg-transparent border-0 p-0 flex flex-col items-center group"
                aria-label={`Go to ${section.label}`}
              >
                <span className={`mb-1 text-[11px] font-light tracking-wide ${activeSection === section.id ? 'text-white' : 'text-zinc-500'} transition-colors group-hover:underline`}>{section.label}</span>
                <div className={`w-2 h-2 rounded-full ${activeSection === section.id ? section.color : 'bg-zinc-600'} transition-all duration-300 group-hover:scale-125`}></div>
              </button>
              {idx < sections.length - 1 && (
                <div className="w-px h-8 bg-zinc-700/40"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Horizontal timeline for mobile */}
      <div className="flex lg:hidden fixed top-0 left-0 w-full z-40 bg-zinc-950/80 px-2 py-2 shadow-sm backdrop-blur-sm justify-center">
        <div className="flex flex-row items-center w-full max-w-xl justify-between mx-auto">
          {sections.map((section, idx) => (
            <div key={section.id} className="flex flex-col items-center flex-1">
              <button
                type="button"
                onClick={() => handleClick(section.id)}
                className="focus:outline-none bg-transparent border-0 p-0 flex flex-col items-center group"
                aria-label={`Go to ${section.label}`}
              >
                <div className={`w-2 h-2 rounded-full mb-1 ${activeSection === section.id ? section.color : 'bg-zinc-600'} transition-all duration-300 group-hover:scale-125`}></div>
                <span className={`text-[10px] font-light tracking-wide ${activeSection === section.id ? 'text-white' : 'text-zinc-500'} transition-colors whitespace-nowrap group-hover:underline`}>{section.label}</span>
              </button>
              {idx < sections.length - 1 && (
                <div className="hidden sm:block w-full h-px bg-zinc-700/40 mt-1"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;