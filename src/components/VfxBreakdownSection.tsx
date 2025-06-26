
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Zap, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const VFX_BREAKDOWNS = [
  {
    id: "vfx1",
    title: "Before & After Composite",
    description: "Green screen removal and background replacement",
    beforeUrl: "https://www.youtube.com/embed/YOUR_BEFORE_VIDEO_ID",
    afterUrl: "https://www.youtube.com/embed/YOUR_AFTER_VIDEO_ID",
    fullVideoUrl: "https://www.youtube.com/watch?v=YOUR_FULL_VIDEO_ID",
    category: "Compositing"
  },
  {
    id: "vfx2", 
    title: "Motion Graphics Breakdown",
    description: "Animated text and graphic elements integration",
    beforeUrl: "https://www.youtube.com/embed/YOUR_BEFORE_VIDEO_ID_2",
    afterUrl: "https://www.youtube.com/embed/YOUR_AFTER_VIDEO_ID_2",
    fullVideoUrl: "https://www.youtube.com/watch?v=YOUR_FULL_VIDEO_ID_2",
    category: "Motion Graphics"
  },
  {
    id: "vfx3",
    title: "Color Grading Process",
    description: "Raw footage to cinematic color transformation",
    beforeUrl: "https://www.youtube.com/embed/YOUR_BEFORE_VIDEO_ID_3", 
    afterUrl: "https://www.youtube.com/embed/YOUR_AFTER_VIDEO_ID_3",
    fullVideoUrl: "https://www.youtube.com/watch?v=YOUR_FULL_VIDEO_ID_3",
    category: "Color Grading"
  },
  {
    id: "vfx4",
    title: "Visual Effects Integration",
    description: "Adding digital effects to live action footage",
    beforeUrl: "https://www.youtube.com/embed/YOUR_BEFORE_VIDEO_ID_4",
    afterUrl: "https://www.youtube.com/embed/YOUR_AFTER_VIDEO_ID_4",
    fullVideoUrl: "https://www.youtube.com/watch?v=YOUR_FULL_VIDEO_ID_4",
    category: "VFX"
  }
];

const VfxBreakdownSection = () => {
  const [activeBreakdown, setActiveBreakdown] = useState<string | null>(null);

  const handleViewFullVideo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          icon={<Zap className="text-yellow-400" />}
          title="VFX Breakdown"
          subtitle="Behind-the-scenes look at my video editing and visual effects process"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {VFX_BREAKDOWNS.map((breakdown, idx) => (
            <div
              key={breakdown.id}
              className={`group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 overflow-hidden hover:border-zinc-700/50 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${100 * idx}ms` }}
            >
              {/* Category Badge */}
              <div className="absolute top-3 md:top-4 left-3 md:left-4 z-20">
                <div className="px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-yellow-500/20 text-yellow-400 text-xs md:text-sm font-medium border border-yellow-500/30">
                  {breakdown.category}
                </div>
              </div>

              {/* Before/After Toggle */}
              <div className="absolute top-3 md:top-4 right-3 md:right-4 z-20">
                <button
                  onClick={() => setActiveBreakdown(
                    activeBreakdown === breakdown.id ? null : breakdown.id
                  )}
                  className="flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-xs md:text-sm font-medium transition-colors"
                >
                  <Play className="w-3 h-3 md:w-4 md:h-4" />
                  {activeBreakdown === breakdown.id ? 'After' : 'Before'}
                </button>
              </div>

              {/* Video Container */}
              <div className="relative bg-zinc-950 aspect-video overflow-hidden">
                <iframe
                  src={activeBreakdown === breakdown.id ? breakdown.afterUrl : breakdown.beforeUrl}
                  title={breakdown.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {breakdown.title}
                </h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-4">
                  {breakdown.description}
                </p>
                
                {/* View Full Video Button */}
                <Button
                  onClick={() => handleViewFullVideo(breakdown.fullVideoUrl)}
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Video
                </Button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/0 to-amber-600/0 group-hover:from-yellow-600/5 group-hover:to-amber-600/5 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center">
          <p className="text-sm md:text-base text-zinc-500 max-w-2xl mx-auto">
            Click the "Before" button on each breakdown to toggle between the original footage and the final edited result. Use "View Full Video" to watch the complete breakdown on YouTube.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VfxBreakdownSection;
