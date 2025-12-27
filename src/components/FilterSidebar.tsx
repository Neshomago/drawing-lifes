import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal } from "lucide-react";

const categories = [
  "Diseño de Personajes",
  "Fan Art", 
  "Diseño de Logos",
  "Paisajes",
  "Abstracto",
  "Estilo Cómic",
];

interface FilterSidebarProps {
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  priceRange: number[];
  onPriceChange: (range: number[]) => void;
}

const FilterSidebar = ({ 
  selectedCategories, 
  onCategoryChange,
  priceRange,
  onPriceChange 
}: FilterSidebarProps) => {
  return (
    <aside className="w-full lg:w-64 space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold text-foreground">Filtros</h2>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">Categorías</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox 
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => onCategoryChange(category)}
              />
              <Label 
                htmlFor={category}
                className="text-sm font-normal cursor-pointer text-foreground hover:text-primary transition-colors"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">Rango de Precio</h3>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={onPriceChange}
            max={200}
            min={0}
            step={10}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <Button 
        variant="outline" 
        className="w-full"
        onClick={() => {
          onPriceChange([0, 200]);
        }}
      >
        Restablecer Filtros
      </Button>
    </aside>
  );
};

export default FilterSidebar;
