import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ReelCategoryTabs = ({ value, onChange, categories }) => (
  <Tabs value={value} onValueChange={onChange} className="w-full flex justify-center mb-6 sm:mb-8 animate-fade-in">
    <TabsList 
      className="flex flex-nowrap justify-start sm:justify-center items-center w-full max-w-full overflow-x-auto py-1 px-4 sm:px-2 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl gap-1 no-scrollbar"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch"
      }}
    >
      {categories.map(cat => (
        <TabsTrigger
          key={cat.key}
          value={cat.key}
          className="mx-0.5 sm:mx-1 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-xl font-semibold transition-colors story-link whitespace-nowrap data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-pink-500 data-[state=active]:text-white text-zinc-400 hover:text-zinc-200 cursor-pointer"
        >
          {cat.label}
        </TabsTrigger>
      ))}
    </TabsList>
  </Tabs>
);

export default ReelCategoryTabs;