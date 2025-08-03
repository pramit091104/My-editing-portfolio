import React from "react";

const BRANDS = [
  { name: "Eagle boys", img: "/brands/eagleboys.jpg" },
  { name: "The Fitness empire", img: "/brands/fitnessempire.jpg" },
  { name: "thesoulvard", img: "/brands/thesoulvard.jpg" },
  { name: "Meditourz", img: "/brands/meditourz.jpg" },
  { name: "Bartisans", img: "/brands/bartisans.jpg" },
];

const BrandsSection = () => {
  return (
    <section className="py-8 md:py-10 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-2">Brands I've Worked With</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto mt-3" />
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {BRANDS.map((brand, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {brand.img ? (
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow border-2 border-zinc-800 bg-white"
                  loading="lazy"
                />
              ) : (
                <div className="w-28 h-14 md:w-40 md:h-20 rounded-full flex items-center justify-center bg-zinc-800 text-white text-xl font-bold shadow border-2 border-zinc-700"
                  style={{ aspectRatio: '2/1' }}>
                  {brand.name[0]}
                </div>
              )}
              <span className="mt-2 text-zinc-200 text-base font-medium text-center whitespace-nowrap">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
