const SectionTitle = ({ icon, title, subtitle }) => (
  <div className="text-center mb-8 sm:mb-12 px-2">
    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
      {icon && <span className="text-xl sm:text-2xl">{icon}</span>}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white">
        {title}
      </h2>
    </div>
    {subtitle && (
      <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed px-2">
        {subtitle}
      </p>
    )}
    <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto mt-3 sm:mt-4" />
  </div>
);

export default SectionTitle;