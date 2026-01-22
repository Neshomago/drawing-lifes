import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import heroBg from "@/assets/hero-bg-ok.jpg";
import bgWave from "@/assets/bg.png";
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="drawing-font text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
          Descubre Arte Increíble
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
          Explora ilustraciones únicas y fan arts de artistas talentosos alrededor del mundo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
          <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-accent to-secondary hover:opacity-90 transition-opacity">
            <HashLink smooth to="/#gallery">Ver Galería</HashLink>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 border-2">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Ver Carrito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
