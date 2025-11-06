import { ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 bg-primary text-primary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6" />
          <span className="text-xl font-bold">STYLE STORE</span>
        </div>
        
        <p className="text-sm text-primary-foreground/80">
          Premium quality shirts for modern style
        </p>
      </div>
    </footer>
  );
};

export default Footer;
