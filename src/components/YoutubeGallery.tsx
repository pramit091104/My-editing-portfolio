import { Youtube } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

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

// Helper to chunk videos into groups of 4
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const videoChunks = chunkArray(YOUTUBE_VIDEOS, 4);

const YoutubeGallery = () => (
  <div className="w-full max-w-4xl mx-auto px-4">
    <Carousel className="relative">
      <CarouselContent>
        {videoChunks.map((chunk, idx) => (
          <CarouselItem key={idx}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {chunk.map((video) => (
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
                  <AspectRatio ratio={16 / 9} className="relative bg-zinc-950 overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </AspectRatio>

                  {/* Content removed for minimal look */}

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-600/0 to-purple-600/0 group-hover:from-violet-600/5 group-hover:to-purple-600/5 transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  </div>
);

export default YoutubeGallery;
