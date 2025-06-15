
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ReelCategoryTabsProps {
  value: string;
  onChange: (category: string) => void;
  categories: { key: string; label: string }[];
}
const ReelCategoryTabs = ({ value, onChange, categories }: ReelCategoryTabsProps) => (
  <Tabs value={value} onValueChange={onChange} className="w-full flex justify-center mb-6 animate-fade-in">
    <TabsList>
      {categories.map(cat => (
        <TabsTrigger
          key={cat.key}
          value={cat.key}
          className="mx-1 px-4 py-2 rounded-xl font-semibold transition-colors story-link"
        >
          {cat.label}
        </TabsTrigger>
      ))}
    </TabsList>
  </Tabs>
);

export default ReelCategoryTabs;
