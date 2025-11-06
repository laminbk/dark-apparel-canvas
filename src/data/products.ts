import { Product } from "@/types/product";
import productSummer from "@/assets/product-summer.jpg";
import productRainy from "@/assets/product-rainy.jpg";
import productWinter from "@/assets/product-winter.jpg";
import productSpring from "@/assets/product-spring.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Summer Vibes Tee",
    price: 49.99,
    image: productSummer,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Orange"],
    category: "Summer"
  },
  {
    id: "2",
    name: "Urban Rain Tee",
    price: 54.99,
    image: productRainy,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Gray"],
    category: "Rainy"
  },
  {
    id: "3",
    name: "Winter Frost Tee",
    price: 44.99,
    image: productWinter,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Ice Blue", "Silver"],
    category: "Winter"
  },
  {
    id: "4",
    name: "Spring Nature Tee",
    price: 52.99,
    image: productSpring,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Green", "Olive"],
    category: "Spring"
  }
];
