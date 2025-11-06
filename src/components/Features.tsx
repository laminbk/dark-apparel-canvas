import { Truck, Award, RefreshCw } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Fast & Free",
      description: "Free shipping on orders over $50. Express delivery available."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "100% premium cotton. Designed for comfort and durability."
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day return policy. Hassle-free exchanges and refunds."
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <Icon className="h-16 w-16 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-lg max-w-xs">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
