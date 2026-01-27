import { useInView } from "../hooks/useInView";
import { ExternalLink, Star, Users, TrendingUp } from "lucide-react";

const BRANDS = [
  { 
    name: "Eagle Boys", 
    img: "/brands/eagleboys.jpg", 
    url: "https://www.instagram.com/eagleboys_pizzeria.loni/",
    category: "Food & Beverage"
  },
  { 
    name: "The Fitness Empire", 
    img: "/brands/fitnessempire.jpg", 
    url: "https://www.instagram.com/fitness_empire_loni_kalbhor/",
    category: "Health & Fitness"
  },
  { 
    name: "The Soulvard", 
    img: "/brands/thesoulvard.jpg", 
    url: "https://www.instagram.com/thesoulvard/",
    category: "Lifestyle"
  },
  { 
    name: "Meditourz", 
    img: "/brands/meditourz.jpg", 
    url: "https://www.instagram.com/meditourz/",
    category: "Healthcare"
  },
  { 
    name: "Bartisans", 
    img: "/brands/bartisans.jpg", 
    url: "https://www.instagram.com/bartisans.in/",
    category: "Hospitality"
  },
];

const BrandsSection = () => {
  const [headerRef, headerInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Amazing Brands</span>
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Collaborating with innovative brands to create compelling visual stories
          </p>
        </div>

        

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {BRANDS.map((brand, idx) => (
            <a 
              key={idx}
              href={brand.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/30 hover:border-violet-500/50 hover:bg-zinc-800/50 transition-all duration-300"
            >
              {/* Brand Image */}
              <div className="relative mb-3">
                <div className="w-16 h-16 mx-auto rounded-xl overflow-hidden border border-zinc-600/50">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-1 right-1 w-5 h-5 bg-zinc-900/80 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-3 h-3 text-violet-400" />
                </div>
              </div>

              {/* Brand Info */}
              <div className="text-center">
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-violet-300 transition-colors duration-300">
                  {brand.name}
                </h3>
                <div className="inline-block px-2 py-1 bg-violet-500/10 rounded-full">
                  <span className="text-violet-300 text-xs">{brand.category}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-16">
            <h3 className="text-xl font-bold text-white mb-3">
              Ready to Join These <span className="text-violet-400">Success Stories?</span>
            </h3>
            <p className="text-zinc-300 mb-4">
              Let's create compelling visual content for your brand.
            </p>
            <a 
              href="mailto:pramit.0904@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold rounded-lg hover:from-violet-600 hover:to-pink-600 transition-colors duration-300"
            >
              <span>Start Your Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
      </div>
    </section>
  );
};

export default BrandsSection;
