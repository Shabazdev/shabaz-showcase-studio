import { Star } from "lucide-react";
import { Button } from "./ui/button";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-card rounded-full border border-border text-sm font-medium">
            HEY! 👋
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            I'm <span className="text-primary">Shabaz</span>,<br />
            Product Designer
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-md">
            A PRODUCT DESIGNER LOCATED IN MUMBAI WHO LOVES TO CRAFT ATTRACTIVE DESIGNS AND EXPERIENCES
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="lg" className="rounded-full">
              PORTFOLIO
            </Button>
            
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-semibold">10 Years</span>
            </div>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Background blob */}
            <div className="absolute inset-0 bg-primary/30 rounded-full scale-110 blur-2xl animate-pulse" />
            
            {/* Image container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-background shadow-2xl">
              <img 
                src={profileImg} 
                alt="Shabaz - Product Designer" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative small blob */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary rounded-full animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
