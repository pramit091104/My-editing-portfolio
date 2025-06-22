import { Youtube } from "lucide-react";
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
    title: "High-Energy Sports Promo | Dynamic Action Edit",
    description: "A fast-paced sports promo capturing the intensity and excitement of athletic competition through dynamic filming and editing.",
  },

  {
    id: "nWuKVOo50aY",
    title: "Fashion Team Reveal | Stylish Model Edit",
    description: "A creative team reveal video for my college’s Student Council, highlighting style and visual storytelling.",
  },

  {
    id: "64M463Dn14Q",
    title: "College Sports Event Aftermovie | Highlights & Memories",
    description: "An engaging aftermovie showcasing the best moments and energy from our college sports event.",
  },

  {
    id: "cgquyjJJ6MA",
    title: "College Farewell Event Aftermovie | Highlights & Memories",
    description: "An engaging farewell aftermovie showcasing the best moments and memories from our college farewell event.",
  },
];

const YoutubeGallery = () => (
  <div className="w-full max-w-6.4xl mx-auto px-4">
    <Carousel
      className="w-full"
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="gap-4 md:gap-6">
        {YOUTUBE_VIDEOS.map((video) => (
          <CarouselItem key={video.id} className="basis-full md:basis-1/2 lg:basis-1/3">
            <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 overflow-hidden hover:border-zinc-700/50 transition-all duration-300">
              {/* YouTube Badge */}
              <div className="absolute top-3 md:top-4 left-3 md:left-4 z-20">
                <div className="flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-red-600 text-white text-xs md:text-sm font-medium shadow-lg">
                  <Youtube className="w-3 h-3 md:w-4 md:h-4" />
                  YouTube
                </div>
              </div>

              {/* Video Container */}
              <div className="relative aspect-video bg-zinc-950 overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                  {video.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-600/0 to-purple-600/0 group-hover:from-violet-600/5 group-hover:to-purple-600/5 transition-all duration-300 pointer-events-none" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      {/* Navigation - Hide on mobile */}
      <CarouselPrevious className="hidden md:flex bg-zinc-900/80 border-zinc-700 hover:bg-zinc-800 text-white -left-12" />
      <CarouselNext className="hidden md:flex bg-zinc-900/80 border-zinc-700 hover:bg-zinc-800 text-white -right-12" />
    </Carousel>
  </div>
);

export default YoutubeGallery;
