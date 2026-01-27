import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ReelCategoryTabs = ({ value, onChange, categories }) => (
  <Tabs value={value} onValueChange={onChange} className="w-full flex justify-center mb-4 sm:mb-6 animate-fade-in overflow-x-auto">
    <TabsList className="flex-wrap sm:flex-nowrap w-full sm:w-auto justify-center">
      {categories.map(cat => (
        <TabsTrigger
          key={cat.key}
          value={cat.key}
          className="mx-1 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl font-semibold transition-colors story-link whitespace-nowrap"
        >
          {cat.label}
        </TabsTrigger>
      ))}
    </TabsList>
  </Tabs>
);

export default ReelCategoryTabs;