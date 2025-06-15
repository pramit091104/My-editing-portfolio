
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
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Business Pitch Reel",
    thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "b2",
    category: "business",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    title: "Brand Promo Vertical",
    thumb: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
  },
  // Informative
  {
    id: "i1",
    category: "informative",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "How To: Quick Guide",
    thumb: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "i2",
    category: "informative",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    title: "5 Tips for Productivity",
    thumb: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
  },
  // Creative
  {
    id: "c1",
    category: "creative",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Color Splash Reel",
    thumb:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "c2",
    category: "creative",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    title: "Dance With Light",
    thumb:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
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
              <video
                controls
                playsInline
                poster={reel.thumb}
                src={reel.videoUrl}
                className="w-full h-full object-cover object-center"
                style={{ aspectRatio: "9/16" }}
              />
              {/* Vertical video overlay frame */}
              <div className="absolute top-3 left-3 text-primary-foreground bg-primary rounded-full px-2 py-1 text-xs flex items-center gap-2 shadow animate-scale-in">
                <Video size={18} /> Reel
              </div>
              {/* Hover overlay for animation */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <div className="mt-4 text-lg font-semibold text-zinc-900 text-center">{reel.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelsGallery;
