import { useState } from "react";
import ReelCategoryTabs from "./ReelCategoryTabs";
import { Video } from "lucide-react";

const CATEGORIES = [
  { key: "Trending", label: "Trending" },
  { key: "informative", label: "Informative" },
  {key: "events" , label: "Events"},
  {key: "others" , label: "Others"}

];

const REELS = [
  // Creative
  {
    id: "c1",
    category: "Trending",
    embedUrl: "https://player.vimeo.com/video/1107162548",
    title: "Model/fashion Shoot Edit (Vimeo)",
  },
  {
    id: "c2",
    category: "Trending",
    embedUrl: "https://player.vimeo.com/video/1107158436",
    title: "Cafe Vibes Edit (Vimeo)",
  },
  {
    id: "c3",
    category: "Trending",
    embedUrl: "https://player.vimeo.com/video/1107162446",
    title: "Gym Workout Edit (Vimeo)",
  },

  {
    id: "i1",
    category: "informative",
    embedUrl: "https://player.vimeo.com/video/1136422943",
    title: "Info Reel (Vimeo)",
  },

  {
    id: "i2",
    category: "informative",
    embedUrl: "https://player.vimeo.com/video/1106914262",
    title: "Info Reel (Vimeo)",
  },

  {
    id: "i3",
    category: "informative",
    embedUrl: "https://player.vimeo.com/video/1131483009",
    title: "Info Reel (Vimeo)",
  },

  // Events
  {
    id: "e1",
    category: "events",
    embedUrl: "https://player.vimeo.com/video/1129288199",
    title: "Event1 (Vimeo)",
  },

  // {
  //   id: "e2",
  //   category: "events",
  //   embedUrl: "https://player.vimeo.com/video/1107158629",
  //   title: "Event2 (Vimeo)",
  // },  
  
  //Others

  {
    id: "o1",
    category: "others",
    embedUrl: "https://player.vimeo.com/video/1106914506",
    title: "Event2 (Vimeo)",
  },
  {
    id: "o1",
    category: "others",
    embedUrl: "https://player.vimeo.com/video/1137229787",
    title: "Real Estate",
  },
  
];

const ReelsGallery = () => {
  const [selected, setSelected] = useState("Trending");

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
    <div className="w-full flex flex-col items-center px-2 sm:px-4">
      <ReelCategoryTabs
        value={selected}
        onChange={setSelected}
        categories={CATEGORIES}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl justify-items-center">
        {filtered.map((reel, idx) => {
          const isInstagram = isInstagramReel(reel.embedUrl);
          
          return (
            <div
              key={reel.id}
              className={`transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1 rounded-xl overflow-hidden ${
                isInstagram 
                  ? "w-full max-w-[280px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]" 
                  : "w-full max-w-[320px] h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
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
