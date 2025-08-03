import { Youtube } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";


const YOUTUBE_VIDEOS = [
  {
    id: "xjb1SzUb4rU",
  },

  {
    id: "nWuKVOo50aY",
  },

  {
    id: "64M463Dn14Q",
  },

  {
    id: "cgquyjJJ6MA",
  },
  
  
];

const YoutubeGallery = () => (
  <div className="w-full max-w-4xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {YOUTUBE_VIDEOS.map((video) => (
        <div
          key={video.id}
          className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 overflow-hidden hover:border-zinc-700/50 transition-all duration-300 flex flex-col"
        >
          {/* YouTube Badge */}
          <div className="absolute top-3 md:top-4 left-3 md:left-4 z-20">
            <div className="flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-red-600 text-white text-xs md:text-sm font-medium shadow-lg">
              <Youtube className="w-3 h-3 md:w-4 md:h-4" />
              YouTube
            </div>
          </div>

          {/* Video Container */}
          <AspectRatio ratio={16 / 9} className="w-full">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </AspectRatio>

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-violet-600/0 to-purple-600/0 group-hover:from-violet-600/5 group-hover:to-purple-600/5 transition-all duration-300 pointer-events-none" />
        </div>
      ))}
    </div>
  </div>
);

export default YoutubeGallery;
