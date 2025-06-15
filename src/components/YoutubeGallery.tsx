
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
    id: "dQw4w9WgXcQ",
    title: "Business Launch Highlights",
    description: "Transformative story-driven commercial edits.",
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "Product Reveal",
    description: "Cinematic transitions and creative storytelling.",
  },
  {
    id: "V-_O7nl0Ii0",
    title: "Informational Tutorial",
    description: "Engaging, easy-to-follow guides.",
  },
];

const YoutubeGallery = () => (
  <div className="w-full max-w-3xl mx-auto px-2 relative">
    <Carousel
      className="w-full"
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent>
        {YOUTUBE_VIDEOS.map((video) => (
          <CarouselItem key={video.id} className="flex items-center justify-center">
            <div className="bg-card rounded-xl shadow-lg overflow-hidden border w-full flex flex-col animate-fade-in max-w-lg mx-auto">
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  allowFullScreen
                  className="w-full h-full"
                />
                <Youtube className="absolute top-2 left-2 text-red-600 bg-white/80 rounded-full p-1" size={28} />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg text-zinc-900">{video.title}</h3>
                <p className="text-muted-foreground text-sm">{video.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);

export default YoutubeGallery;
