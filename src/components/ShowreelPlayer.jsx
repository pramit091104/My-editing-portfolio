import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { SHOWREEL } from "@/constants/uiTexts";

export default function ShowreelPlayer() {
  const [playing, setPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${SHOWREEL.vimeoId}&width=1280`)
      .then((r) => r.json())
      .then((data) => {
        if (data.thumbnail_url) setThumbnail(data.thumbnail_url);
      })
      .catch(() => {});
  }, []);

  return (
    <div
      className="group relative w-full rounded-xl transition-all duration-300"
      style={{ height: "clamp(250px, 56vw, 450px)" }}
      data-cursor={!playing ? "play" : undefined}
      onClick={() => {
        if (!playing) setPlaying(true);
      }}
    >
      {/* Pulsating cinematic ambient glow behind the player */}
      <div className="absolute -inset-8 bg-gradient-to-r from-violet-500/20 via-pink-500/10 to-violet-500/5 rounded-2xl blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none z-0 animate-pulse" />

      {/* Overflow wrapper */}
      <div className="relative rounded-xl overflow-hidden border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm w-full h-full z-10 shadow-2xl">
        {playing ? (
          <iframe
            src={`${SHOWREEL.embedUrl}?autoplay=1`}
            title={SHOWREEL.headingAccent}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
            style={{ minHeight: 0, border: "none" }}
          />
        ) : (
          <div className="relative w-full h-full cursor-pointer flex items-center justify-center">
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={SHOWREEL.headingAccent}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />
            ) : (
              <div className="w-full h-full bg-zinc-900/80 flex items-center justify-center text-zinc-500 font-mono text-sm">
                Loading Showreel...
              </div>
            )}
            
            {/* Dark tint overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

            {/* Glowing Play Icon Badge */}
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-2xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
