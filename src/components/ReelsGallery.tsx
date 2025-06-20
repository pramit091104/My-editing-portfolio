
import { useState } from "react";
import ReelCategoryTabs from "./ReelCategoryTabs";
import { Video } from "lucide-react";

const CATEGORIES = [
  { key: "business", label: "Business" },
  { key: "informative", label: "Informative" },
  { key: "creative", label: "Creative" },
];

const REELS = [
  // Business
  {
    id: "b1",
    category: "business",
    embedUrl: "https://www.youtube.com/embed/TzchRcsBEmk",
    title: "Business Pitch Reel",
  },
  {
    id: "b2",
    category: "business",
    embedUrl: "https://www.youtube.com/embed/7BSxwtG7__s",
    title: "Brand Promo Vertical",
  },
  // Informative
  {
    id: "i1",
    category: "informative",
    embedUrl: "https://www.youtube.com/embed/7BSxwtG7__s",
    title: "How To: Quick Guide",
  },
  {
    id: "i2",
    category: "informative",
    embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    title: "5 Tips for Productivity",
  },
  // Creative
  {
    id: "c1",
    category: "creative",
    embedUrl: "https://www.youtube.com/embed/tFGF0ByR8HY",
    title: "Color Splash Reel",
  },
  {
    id: "c2",
    category: "creative",
    embedUrl: "https://www.youtube.com/embed/N-gfUtjgqY8",
    title: "Dance With Light",
  },

  {
    id: "c3",
    category: "creative",
    embedUrl: "https://www.youtube.com/embed/TzchRcsBEmk",
    title: "Color Splash Reel",
  },
];

const ReelsGallery = () => {
  const [selected, setSelected] = useState("business");

  const filtered = REELS.filter((r) => r.category === selected);

  return (
    <div className="w-full flex flex-col items-center">
      <ReelCategoryTabs
        value={selected}
        onChange={setSelected}
        categories={CATEGORIES}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl px-2">
        {filtered.map((reel, idx) => (
          <div
            key={reel.id}
            className={`flex flex-col items-center bg-gradient-to-b from-white to-slate-50 rounded-3xl shadow-2xl border border-zinc-200 p-3 hover:scale-105 hover:shadow-primary transition-transform duration-300 relative group animate-fade-in`}
            style={{ animationDelay: `${50 * idx}ms` }}
          >
            <div className="relative rounded-2xl overflow-hidden w-[320px] h-[550px] shadow-md bg-black">
              <iframe
                src={reel.embedUrl}
                width="320"
                height="550"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full object-cover"
                style={{ aspectRatio: "9/16" }}
                title={reel.title}
              />
              {/* Vertical video overlay frame */}
              <div className="absolute top-3 left-3 text-primary-foreground bg-primary rounded-full px-2 py-1 text-xs flex items-center gap-2 shadow animate-scale-in z-10">
                <Video size={18} /> Short
              </div>
              {/* Hover overlay for animation */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
            </div>
            <div className="mt-4 text-lg font-semibold text-zinc-900 text-center">{reel.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelsGallery;
