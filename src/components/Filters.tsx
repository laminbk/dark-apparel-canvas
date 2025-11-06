import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface FiltersProps {
  selectedSizes: string[];
  selectedColors: string[];
  priceRange: [number, number];
  onSizeToggle: (size: string) => void;
  onColorToggle: (color: string) => void;
  onPriceChange: (value: [number, number]) => void;
  onReset: () => void;
}

const Filters = ({
  selectedSizes,
  selectedColors,
  priceRange,
  onSizeToggle,
  onColorToggle,
  onPriceChange,
  onReset
}: FiltersProps) => {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = ["Black", "White", "Gray", "Navy", "Orange", "Green", "Ice Blue", "Silver", "Olive"];

  const hasActiveFilters = selectedSizes.length > 0 || selectedColors.length > 0 || priceRange[0] > 0 || priceRange[1] < 100;

  return (
    <div className="bg-card p-6 rounded-lg border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Filters</h2>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onReset} className="gap-2">
            <X className="h-4 w-4" />
            Clear All
          </Button>
        )}
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <Label className="text-base font-semibold mb-3 block">Size</Label>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <Badge
              key={size}
              variant={selectedSizes.includes(size) ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => onSizeToggle(size)}
            >
              {size}
            </Badge>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <Label className="text-base font-semibold mb-3 block">Color</Label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <Badge
              key={color}
              variant={selectedColors.includes(color) ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => onColorToggle(color)}
            >
              {color}
            </Badge>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <Label className="text-base font-semibold mb-3 block">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </Label>
        <Slider
          value={priceRange}
          onValueChange={onPriceChange}
          max={100}
          step={5}
          className="mb-2"
        />
      </div>
    </div>
  );
};

export default Filters;
