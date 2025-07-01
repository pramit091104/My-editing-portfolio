import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Zap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const VFX_BREAKDOWNS = [
  {
    id: "vfx1",
    videoUrl: "https://www.youtube.com/embed/4Dl7cL65CEo",
    fullVideoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1",
    category: "Compositing"
  },
  {
    id: "vfx2", 
    
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
    fullVideoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2",
    category: "Motion Graphics"
  },
  {
    id: "vfx3",
   
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3", 
    fullVideoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3",
    category: "Color Grading"
  },
];

const VfxBreakdownSection = () => {
  return (
    <div className="w-full flex flex-col items-center px-6 bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full max-w-6xl">
        
        {VFX_BREAKDOWNS.map((breakdown, idx) => (
          <div
            key={breakdown.id}
            className="group w-full max-w-[320px] h-[400px] md:h-[500px] lg:h-[550px] transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1 rounded-xl overflow-hidden"
            style={{ animationDelay: `${50 * idx}ms` }}
          >
            <iframe
              src={breakdown.videoUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover"
              style={{ aspectRatio: "9/16" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VfxBreakdownSection;
