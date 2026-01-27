import { Youtube, ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const YOUTUBE_VIDEOS = [
  {
    id: "xjb1SzUb4rU",
    title: "Creative Video Edit"
  },
  {
    id: "nWuKVOo50aY",
    title: "Professional Production"
  },
  {
    id: "64M463Dn14Q",
    title: "Cinematic Storytelling"
  },
  {
    id: "cgquyjJJ6MA",
    title: "Visual Narrative"
  },
];

const YoutubeGallery = () => (
  <div className="w-full max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      {YOUTUBE_VIDEOS.map((video, index) => (
        <div
          key={video.id}
          className="group relative bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-zinc-700/30 overflow-hidden hover:border-red-500/30 transition-all duration-300"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* YouTube Badge */}
          <div className="absolute top-3 left-3 z-20">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600 text-white text-sm font-medium shadow-lg">
              <Youtube className="w-4 h-4" />
              <span>YouTube</span>
            </div>
          </div>

          {/* External Link */}
          <div className="absolute top-3 right-3 z-20">
            <a 
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-zinc-900/80 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-zinc-800"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>

          {/* Video Container */}
          <AspectRatio ratio={16 / 9} className="w-full">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
              style={{ border: 'none' }}
            />
          </AspectRatio>

          {/* Video Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {video.title}
            </h3>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-red-600/5 transition-all duration-300 pointer-events-none" />
        </div>
      ))}
    </div>
  </div>
);

export default YoutubeGallery;