
import { ReactNode } from "react";

interface SectionTitleProps {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
}
const SectionTitle = ({ icon, title, subtitle }: SectionTitleProps) => (
  <div className="flex flex-col items-center mb-8 mt-16 w-full">
    <div className="flex items-center gap-2 text-3xl font-bold text-zinc-800 animate-fade-in">
      {icon && <span className="text-primary">{icon}</span>}
      <span>{title}</span>
    </div>
    {subtitle && (
      <div className="text-base text-muted-foreground mt-2 max-w-lg animate-fade-in">
        {subtitle}
      </div>
    )}
  </div>
);

export default SectionTitle;
