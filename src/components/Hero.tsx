import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroShirt1 from "@/assets/hero-shirt-1.jpg";
import heroShirt2 from "@/assets/hero-shirt-2.jpg";
import heroShirt3 from "@/assets/hero-shirt-3.jpg";

const Hero = () => {
  return (
    <section className="relative w-full bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            FREE SHIPPING ON FIRST ORDER
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Search for your style..."
                className="pl-12 h-14 text-lg bg-background text-foreground border-none rounded-full shadow-xl"
              />
              <Button 
                variant="hero" 
                size="icon" 
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
            
            <Button variant="ghost" className="mt-4 text-primary-foreground hover:text-primary-foreground/90">
              Sign in for saved preferences
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Images */}
      <div className="absolute top-10 left-10 w-64 h-64 opacity-80 hidden lg:block">
        <img 
          src={heroShirt1} 
          alt="Premium black t-shirt" 
          className="w-full h-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="absolute top-20 right-10 w-72 h-72 opacity-80 hidden lg:block">
        <img 
          src={heroShirt2} 
          alt="Premium white t-shirt" 
          className="w-full h-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="absolute bottom-10 right-1/4 w-80 h-56 opacity-70 hidden xl:block">
        <img 
          src={heroShirt3} 
          alt="Collection of premium t-shirts" 
          className="w-full h-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default Hero;
