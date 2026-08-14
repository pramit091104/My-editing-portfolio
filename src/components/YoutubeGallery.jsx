import { useState } from "react";
import { Youtube, ExternalLink, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { YOUTUBE_VIDEOS } from "@/constants/uiTexts";

function YoutubeCard({ video, index }) {
  const [playing, setPlaying] = useState(false);
  const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`);

  return (
    <div
      className="group relative bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-zinc-700/30 hover:border-red-500/30 transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
      data-cursor="play"
      onClick={() => {
        if (!playing) setPlaying(true);
      }}
    >
      {/* Cinematic Ambient Glow */}
      <div className="absolute -inset-6 bg-red-500/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

      <div className="relative w-full h-full rounded-xl overflow-hidden z-10">
        {/* YouTube Badge */}
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600 text-white text-sm font-medium shadow-lg">
            <Youtube className="w-4 h-4" />
            <span>YouTube</span>
          </div>
        </div>

        {/* External Link */}
        <div className="absolute top-3 right-3 z-20" onClick={(e) => e.stopPropagation()}>
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-zinc-900/80 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-zinc-800"
          >
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Video or Thumbnail Overlay */}
        <AspectRatio ratio={16 / 9} className="w-full bg-zinc-950">
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
              style={{ border: "none" }}
            />
          ) : (
            <div className="relative w-full h-full cursor-pointer flex items-center justify-center">
              <img
                src={imgSrc}
                alt={video.title}
                onError={() => setImgSrc(`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Central Play Button */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-red-600/90 text-white border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
              </div>
            </div>
          )}
        </AspectRatio>

        {/* Title Overlay */}
        {!playing && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 pt-16 pointer-events-none">
            {/* Category tag */}
            {video.category && (
              <span className="inline-block text-[10px] uppercase tracking-wider font-bold text-violet-400/90 bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20 mb-2">
                {video.category}
              </span>
            )}
            <h3 className="text-white font-semibold text-xs sm:text-sm transition-opacity duration-300">
              {video.title}
            </h3>
            {video.description && (
              <p className="text-zinc-400 text-xs mt-1 line-clamp-2">{video.description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const YoutubeGallery = () => (
  <div className="w-full max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      {YOUTUBE_VIDEOS.map((video, index) => (
        <YoutubeCard key={video.id} video={video} index={index} />
      ))}
    </div>
  </div>
);

export default YoutubeGallery;

