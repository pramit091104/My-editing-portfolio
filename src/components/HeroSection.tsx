import { Mail, MapPin } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { useRef } from "react";

const HeroSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <section ref={ref} className="relative w-full min-h-[90vh] flex flex-col justify-center bg-zinc-950 px-2 sm:px-4 hero-noise-bg">
      <div className="w-full flex flex-col justify-center mt-8 md:mt-16 lg:mt-24">
        {/* Tagline */}
        <div className={`text-2xl sm:text-4xl md:text-3xl font-mono font-semibold text-zinc-100 mb-5 ml-2 sm:ml-8 md:ml-12 lg:ml-24 text-left ${inView ? 'blur-fade-up-posterize' : ''}`} style={{ letterSpacing: '0.03em' }}>
        Transforming ideas into compelling visual narratives<br/>through creative editing, cinematic storytelling, and<br/>engaging content that resonates with audiences.
        </div>

        {/* Contact Info */}
        <div className={`flex flex-col gap-2 text-zinc-300 text-base sm:text-lg font-mono ml-2 sm:ml-8 md:ml-12 lg:ml-24 mt-2 ${inView ? 'blur-fade-up-posterize' : ''}`}>

          <div className="flex items-center gap-2">
            <MapPin size={20} className="inline-block" />
            <span>Pune, Maharashtra, India</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={20} className="inline-block" />
            <span>pramit.0904@gmail.com</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
