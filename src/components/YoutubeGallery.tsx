
import { Youtube } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

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
  <div
    className="w-full max-w-3xl mx-auto px-2 relative rounded-3xl overflow-visible shadow-2xl"
    style={{
      background:
        "linear-gradient(120deg, rgba(35,33,60,0.92) 85%, rgba(57,44,98,0.91) 100%)",
      boxShadow:
        "0 8px 60px 0 rgba(67,56,202,0.22), 0 0 0px 1.5px rgba(236,72,153,0.12)",
      minHeight: "500px",
      border: "2.5px solid transparent",
      zIndex: 2,
    }}
  >
    {/* Dark overlay for extra contrast and depth */}
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none rounded-3xl"
      style={{
        background:
          "radial-gradient(ellipse at 80% 0%, rgba(109,40,217,0.05) 0%, rgba(24,26,32,0.88) 35%)",
        opacity: 0.95,
      }}
    />
    {/* Animate-glow and border */}
    <style>{HOLOGRAM_ANIMATION}</style>
    <div
      className="pointer-events-none absolute inset-0 rounded-3xl z-20"
      aria-hidden="true"
      style={{
        border: "2px solid #a78bfa",
        zIndex: 5,
        animation: "hologramBorder 6s linear infinite",
        boxShadow:
          "0 0 32px 2px rgba(139,92,246,0.14), 0 0 60px 6px rgba(236,72,153,0.05)",
      }}
    />
    <Carousel
      className="w-full relative z-10"
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent>
        {YOUTUBE_VIDEOS.map((video, idx) => (
          <CarouselItem key={video.id} className="flex items-center justify-center">
            <div
              className="
                relative
                bg-[rgba(35,33,60,0.92)]
                rounded-2xl border-2 border-zinc-700 w-full flex flex-col max-w-lg mx-auto px-0 overflow-visible
                transition-shadow
                shadow-lg
                animate-fade-in
              "
              style={{
                boxShadow:
                  "0 0 48px 10px rgba(99,102,241,0.12), 0 4px 64px 0 rgba(225,29,72,0.07)",
                borderImage:
                  "linear-gradient(120deg, #a78bfa, #f472b6 90%) 1",
                position: "relative",
                background:
                  "linear-gradient(133deg, #23213c 80%, #42287a 120%)",
                minHeight: "410px",
                animation: "hologramGlow 2.5s infinite alternate cubic-bezier(0.4,0,0.6,1)",
              }}
            >
              {/* Creative floating YouTube sticker */}
              <div className="absolute -top-6 left-6 z-30">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 via-fuchsia-500 to-violet-600 text-white font-bold text-base shadow-lg border-4 border-zinc-900/70 animate-pulse select-none">
                  <Youtube className="text-white drop-shadow-lg" size={21} /> YouTube
                </span>
              </div>
              {/* Main video content with glass border */}
              <div className="relative aspect-video bg-zinc-900/90 z-20 shadow-inner rounded-xl mt-10 mx-4 overflow-hidden border-2 border-indigo-500/20 backdrop-blur-md">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  allowFullScreen
                  className="w-full h-full"
                  style={{
                    background: "#12141e",
                    borderRadius: "0.75rem",
                  }}
                />
                {/* Small semi-transparent yt icon at corner */}
                <Youtube className="absolute top-2 left-2 text-red-500 bg-white/90 rounded-full p-0.5 shadow-md" size={20} />
              </div>
              {/* Details area */}
              <div className="p-6 pt-3 flex flex-col gap-2 z-20 text-center">
                <h3 className="font-extrabold text-2xl text-white tracking-tight drop-shadow-glow mb-1 font-playfair">
                  {video.title}
                </h3>
                <p className="text-fuchsia-200 text-base font-medium drop-shadow-md">
                  {video.description}
                </p>
              </div>
              {/* Light Frosted Shine Overlay */}
              <div
                className="absolute inset-0 rounded-xl pointer-events-none z-30"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(100deg,rgba(255,255,255,0.04) 30%,rgba(209,213,255,0.1) 58%,rgba(225,29,72,0.045) 85%)",
                  mixBlendMode: "screen",
                  filter: "blur(2.5px)",
                  zIndex: 2,
                  opacity: 0.32,
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Custom CarouselPrevious Button */}
      <CarouselPrevious className="bg-fuchsia-800/90 border-fuchsia-400 hover:bg-fuchsia-700 transition-colors animate-pulse shadow-md -left-6 top-1/2" />
      {/* Custom CarouselNext Button */}
      <CarouselNext className="bg-fuchsia-800/90 border-fuchsia-400 hover:bg-fuchsia-700 transition-colors animate-pulse shadow-md -right-6 top-1/2" />
    </Carousel>
  </div>
);

export default YoutubeGallery;

