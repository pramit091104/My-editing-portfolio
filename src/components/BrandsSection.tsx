import React from "react";

const BRANDS = [
  { name: "Eagle boys", img: "/brands/eagleboys.jpg", url: "https://www.instagram.com/eagleboys_pizzeria.loni/" },
  { name: "The Fitness empire", img: "/brands/fitnessempire.jpg", url: "https://www.instagram.com/fitness_empire_loni_kalbhor/" },
  { name: "thesoulvard", img: "/brands/thesoulvard.jpg", url: "https://www.instagram.com/thesoulvard/" },
  { name: "Meditourz", img: "/brands/meditourz.jpg", url: "https://www.instagram.com/meditourz/" },
  { name: "Bartisans", img: "/brands/bartisans.jpg", url: "https://www.instagram.com/bartisans.in/" },
];

const BrandsSection = () => {
  return (
    <section className="py-6 sm:py-8 md:py-10 px-2 sm:px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-2 px-2">Brands I've Worked With</h2>
          <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto mt-2 sm:mt-3" />
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-2">
          {BRANDS.map((brand, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {brand.img && brand.url ? (
                <a href={brand.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover shadow border-2 border-zinc-800 bg-white"
                    loading="lazy"
                  />
                </a>
              ) : (
                <div className="w-24 h-12 sm:w-28 sm:h-14 md:w-40 md:h-20 rounded-full flex items-center justify-center bg-zinc-800 text-white text-lg sm:text-xl font-bold shadow border-2 border-zinc-700"
                  style={{ aspectRatio: '2/1' }}>
                  {brand.name[0]}
                </div>
              )}
              <span className="mt-2 text-zinc-200 text-xs sm:text-sm md:text-base font-medium text-center whitespace-nowrap">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
