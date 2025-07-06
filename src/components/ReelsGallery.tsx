import { useState } from "react";
import ReelCategoryTabs from "./ReelCategoryTabs";
import { Video } from "lucide-react";

const CATEGORIES = [
  { key: "creative", label: "Creative" },
  { key: "informative", label: "Informative" },
  {key: "events" , label: "Events"}
];

const REELS = [
  // Creative
  {
    id: "c1",
    category: "creative",
    embedUrl: "https://www.youtube.com/embed/tFGF0ByR8HY",
    title: "Model/fashion Shoot Edit",
  },
  {
    id: "c2",
    category: "creative",
    embedUrl: "https://www.youtube.com/embed/N-gfUtjgqY8",
    title: "Cafe Vibes Edit",
  },
  {
    id: "c3",
    category: "creative",
    embedUrl: "https://www.youtube.com/embed/TzchRcsBEmk",
    title: "Gym Workout Edit",
  },

  {
    id: "i1",
    category: "informative",
    embedUrl: "https://www.youtube.com/embed/7BSxwtG7__s",
    title: "Info Reel",
  },

  {
    id: "i2",
    category: "informative",
    embedUrl: "https://www.youtube.com/embed/AfCR6ZxCA_c",
    title: "Info Reel",
  },

  // Events
  {
    id: "e1",
    category: "events",
    embedUrl: "https://www.instagram.com/reel/DHKpoRgAC4H/embed/",
    title: "Event1",
  },
  {
    id: "e2",
    category: "events",
    embedUrl: "https://www.instagram.com/reel/DHEcnqgAjK-/embed/",
    title: "Event2",
  },  
  
];

const ReelsGallery = () => {
  const [selected, setSelected] = useState("creative");

  const filtered = REELS.filter((r) => r.category === selected);

  // Helper function to check if it's an Instagram Reel
  const isInstagramReel = (url: string) => {
    return url.includes('instagram.com/reel');
  };

  // Helper function to get the appropriate embed URL for Instagram Reels
  const getEmbedUrl = (url: string) => {
    if (isInstagramReel(url)) {
      // Add parameters to ensure browser-only playback and proper sizing
      return `${url}?autoplay=0&controls=1&rel=0&showinfo=0&modestbranding=1&playsinline=1`;
    }
    return url;
  };

  return (
    <div className="w-full flex flex-col items-center px-4">
      <ReelCategoryTabs
        value={selected}
        onChange={setSelected}
        categories={CATEGORIES}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full max-w-7xl">
        {filtered.map((reel, idx) => {
          const isInstagram = isInstagramReel(reel.embedUrl);
          
          return (
            <div
              key={reel.id}
              className={`transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1 rounded-xl overflow-hidden ${
                isInstagram 
                  ? "w-full max-w-[280px] h-[350px] md:h-[400px] lg:h-[450px]" 
                  : "w-full max-w-[320px] h-[400px] md:h-[500px] lg:h-[550px]"
              }`}
              style={{ animationDelay: `${50 * idx}ms` }}
            >
              <iframe
                src={getEmbedUrl(reel.embedUrl)}
                width="100%"
                height="100%"
                frameBorder="0"
                allow={isInstagram 
                  ? "autoplay; encrypted-media; picture-in-picture; web-share"
                  : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                }
                allowFullScreen
                className="w-full h-full object-cover"
                style={{ 
                  aspectRatio: isInstagram ? "9/16" : "9/16",
                  maxWidth: isInstagram ? "280px" : "320px"
                }}
                title={reel.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReelsGallery;
