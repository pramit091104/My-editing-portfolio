
import { Youtube } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Add custom keyframes via inline style for the hologram shimmer
const HOLOGRAM_ANIMATION =
  `@keyframes hologramBorder {
    0% { filter: hue-rotate(0deg) brightness(1.1) saturate(1.2);}
    50% { filter: hue-rotate(60deg) brightness(1.4) saturate(1.8);}
    100% { filter: hue-rotate(360deg) brightness(1.1) saturate(1.2);}
  }
  @keyframes hologramGlow {
    0% { box-shadow: 0 0 32px 0 rgba(99, 102, 241, 0.6), 0 0 80px 0 rgba(225, 29, 72, 0.14);}
    50% { box-shadow: 0 0 48px 8px rgba(225, 29, 72, 0.22), 0 0 128px 0 rgba(109,40,217,0.21);}
    100% { box-shadow: 0 0 32px 0 rgba(99, 102, 241, 0.6), 0 0 80px 0 rgba(225, 29, 72, 0.14);}
  }
`;

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
    {/* Inject custom keyframes for hologram animation */}
    <style>{HOLOGRAM_ANIMATION}</style>
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
            <div
              className="
                relative
                bg-card rounded-xl border w-full flex flex-col animate-fade-in max-w-lg mx-auto
                overflow-hidden 
                before:absolute before:inset-0 before:pointer-events-none
              "
              style={{
                boxShadow:
                  "0 0 36px 0 rgba(99,102,241,0.33), 0 0 0px 1.5px rgba(109,40,217,0.20)",
                animation: "hologramGlow 2.2s infinite alternate cubic-bezier(0.4,0,0.6,1)",
                border: "2px solid transparent",
                background: "linear-gradient(120deg, rgba(236,72,153,0.16) 0%, rgba(67,56,202,0.11) 100%)"
              }}
            >
              {/* Hologram animated border overlay */}
              <div
                className="absolute inset-0 rounded-xl pointer-events-none z-10"
                aria-hidden="true"
                style={{
                  border: "2.5px solid #6366f1",
                  maskImage:
                    "linear-gradient(120deg,rgba(0,0,0,.5) 70%,rgba(0,0,0,0))",
                  WebkitMaskImage:
                    "linear-gradient(120deg,rgba(0,0,0,.5) 80%,rgba(0,0,0,0))",
                  zIndex: 2,
                  animation: "hologramBorder 3.5s linear infinite",
                  boxShadow:
                    "0 0 16px 6px rgba(99,102,241,0.18), 0 0 40px 0 rgba(236,72,153,0.14)",
                }}
              />
              {/* Rainbow shimmer overlay */}
              <div
                className="absolute inset-0 rounded-xl pointer-events-none z-10"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(120deg,rgba(109,40,217,0.10) 0%, rgba(236,72,153,0.08) 100%)",
                  mixBlendMode: "screen",
                  filter: "blur(0.5px)",
                  opacity: 0.50,
                  animation: "hologramBorder 5.5s linear infinite",
                  zIndex: 1,
                }}
              />
              {/* Main video content */}
              <div className="relative aspect-video bg-black z-20 shadow-inner rounded-t-xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  allowFullScreen
                  className="w-full h-full"
                />
                <Youtube className="absolute top-2 left-2 text-red-600 bg-white/70 rounded-full p-1" size={28} />
              </div>
              <div className="p-5 flex flex-col gap-2 z-20">
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
