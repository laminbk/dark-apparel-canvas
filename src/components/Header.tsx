import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-8 w-8" />
          <span className="text-2xl font-bold">STYLE STORE</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="lg">
            Sign In
          </Button>
          <Button variant="default" size="lg">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
