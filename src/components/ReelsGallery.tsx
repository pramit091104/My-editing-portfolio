import { useState } from "react";
import ReelCategoryTabs from "./ReelCategoryTabs";
import { Video } from "lucide-react";

const CATEGORIES = [
  { key: "creative", label: "Creative" },
  { key: "informative", label: "Informative" },
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
    id: "i1",
    category: "informative",
    embedUrl: "https://www.youtube.com/embed/AfCR6ZxCA_c",
    title: "Info Reel",
  },
  // Business
  // {
  //   id: "b1",
  //   category: "business",
  //   embedUrl: "https://www.youtube.com/embed/TzchRcsBEmk",
  //   title: "Business Pitch Reel",
  // },
  // {
  //   id: "b2",
  //   category: "business",
  //   embedUrl: "https://www.youtube.com/embed/7BSxwtG7__s",
  //   title: "Brand Promo Vertical",
  // },
  // Informative
  
  
];

const ReelsGallery = () => {
  const [selected, setSelected] = useState("creative");

  const filtered = REELS.filter((r) => r.category === selected);

  return (
    <div className="w-full flex flex-col items-center px-4">
      <ReelCategoryTabs
        value={selected}
        onChange={setSelected}
        categories={CATEGORIES}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full max-w-7xl">
        {filtered.map((reel, idx) => (
          <div
            key={reel.id}
            className="w-full max-w-[320px] h-[400px] md:h-[500px] lg:h-[550px] transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1 rounded-xl overflow-hidden"
            style={{ animationDelay: `${50 * idx}ms` }}
          >
            <iframe
              src={reel.embedUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover"
              style={{ aspectRatio: "9/16" }}
              title={reel.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelsGallery;
