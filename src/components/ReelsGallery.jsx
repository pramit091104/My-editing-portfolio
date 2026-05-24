import { useState, useEffect } from "react";
import ReelCategoryTabs from "./ReelCategoryTabs";
import { REELS, REEL_CATEGORIES } from "@/constants/uiTexts";

function formatViews(n) {
  if (!n) return null;
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

function ReelCard({ reel, idx }) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [views, setViews] = useState(null);

  useEffect(() => {
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${reel.vimeoId}&width=400`)
      .then((r) => r.json())
      .then((data) => {
        if (data.thumbnail_url) setThumbnail(data.thumbnail_url);
      })
      .catch(() => {});
  }, [reel.vimeoId]);

  return (
    <div
      className="w-full max-w-[300px] rounded-xl overflow-hidden transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1"
      style={{ animationDelay: `${50 * idx}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 9:16 aspect ratio wrapper */}
      <div style={{ position: "relative", paddingBottom: "177.78%", height: 0 }}>
        {/* iframe */}
        <iframe
          src={playing ? `${reel.embedUrl}&autoplay=1` : reel.embedUrl}
          title={reel.title}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        />

        {/* Overlay */}
        {!playing && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
            style={{
              background: hovered
                ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%)"
                : "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
              transition: "background 0.3s ease",
            }}
            onClick={() => setPlaying(true)}
          >
            {/* Thumbnail */}
            {thumbnail && (
              <img
                src={thumbnail}
                alt={reel.title}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: -1,
                }}
              />
            )}

            {/* Views badge */}
            <div
              className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white text-xs font-semibold"
              style={{
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(6px)",
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateY(0)" : "translateY(-6px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              {views !== null ? formatViews(views) : "Vimeo"}
            </div>

            {/* Title */}
            <div
              className="absolute bottom-12 left-3 right-3 text-white text-sm font-semibold leading-tight"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
              }}
            >
              {reel.title}
            </div>

            {/* Play button */}
            <div
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "scale(1)" : "scale(0.8)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "2px solid rgba(255,255,255,0.4)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const ReelsGallery = () => {
  const [selected, setSelected] = useState(REEL_CATEGORIES[0].key);
  const filtered = REELS.filter((r) => r.category === selected);

  return (
    <div className="w-full flex flex-col items-center px-2 sm:px-4">
      <ReelCategoryTabs value={selected} onChange={setSelected} categories={REEL_CATEGORIES} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl justify-items-center">
        {filtered.map((reel, idx) => (
          <ReelCard key={reel.id + idx} reel={reel} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default ReelsGallery;
