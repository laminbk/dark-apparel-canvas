import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import Filters from "./Filters";

const ProductGrid = () => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handleColorToggle = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const handleReset = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([0, 100]);
  };

  const filteredProducts = products.filter(product => {
    // Size filter
    if (selectedSizes.length > 0) {
      const hasMatchingSize = product.sizes.some(size => selectedSizes.includes(size));
      if (!hasMatchingSize) return false;
    }

    // Color filter
    if (selectedColors.length > 0) {
      const hasMatchingColor = product.colors.some(color => selectedColors.includes(color));
      if (!hasMatchingColor) return false;
    }

    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    return true;
  });

  return (
    <section className="w-full py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Shop Our Collection</h2>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Filters
              selectedSizes={selectedSizes}
              selectedColors={selectedColors}
              priceRange={priceRange}
              onSizeToggle={handleSizeToggle}
              onColorToggle={handleColorToggle}
              onPriceChange={setPriceRange}
              onReset={handleReset}
            />
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-2xl text-muted-foreground mb-4">No products found</p>
                <p className="text-muted-foreground mb-6">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
