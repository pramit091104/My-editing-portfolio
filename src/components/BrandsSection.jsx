import { useInView } from "../hooks/useInView";
import { ExternalLink } from "lucide-react";

const scrollStyle = `
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .brands-scroll {
    animation: scroll-left 20s linear infinite;
  }
  .brands-scroll:hover {
    animation-play-state: paused;
  }
`;

const BRANDS = [
  { 
    name: "Bartisans", 
    img: "/brands/bartisans.jpg", 
    url: "https://www.instagram.com/bartisans.in/",
    category: "Hospitality"
  },
  { 
    name: "eatmurukku", 
    img: "/brands/murukku.jpg", 
    url: "https://www.instagram.com/eatmurukku/",
    category: "Hospitality"
  },
  { 
    name: "Kytvhens", 
    img: "/brands/kytchens.jpg", 
    url: "https://www.instagram.com/kytchens/",
    category: "Hospitality"
  },
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
  
];

const BrandsSection = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

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

        {/* Scrolling Brands */}
        <div className="overflow-hidden">
          <style>{scrollStyle}</style>
          <div className="flex brands-scroll w-max">
            {[...BRANDS, ...BRANDS].map((brand, idx) => (
              <a
                key={idx}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 mx-8 group flex-shrink-0"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-zinc-700/50 group-hover:border-violet-400/70 transition-colors duration-300">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-zinc-400 text-xs font-medium group-hover:text-violet-300 transition-colors duration-300 whitespace-nowrap">
                  {brand.name}
                </span>
              </a>
            ))}
          </div>
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