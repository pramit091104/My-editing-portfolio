
import { ReactNode } from "react";

interface SectionTitleProps {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ icon, title, subtitle }: SectionTitleProps) => (
  <div className="text-center mb-12">
    <div className="flex items-center justify-center gap-3 mb-4">
      {icon && <span className="text-2xl">{icon}</span>}
      <h2 className="text-3xl md:text-4xl font-light text-white">
        {title}
      </h2>
    </div>
    {subtitle && (
      <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
    <div className="w-24 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto mt-4" />
  </div>
);

export default SectionTitle;
