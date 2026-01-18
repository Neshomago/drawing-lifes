import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  title: string;
  artist: string;
  price: number;
  image: string;
  category: string;
  onAddToCart: (product: ProductCardProps) => void;
}

const ProductCard = ({ id, title, artist, price, image, category, onAddToCart }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300 border-border">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-stone-900/80 backdrop-blur-sm text-white text-xs font-bold rounded-full">
            {category}
          </span>
        </div>

        {/* Favorite Button */}
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-all duration-200"
        >
          <Heart 
            className={`h-5 w-5 transition-colors ${isFavorite ? 'fill-secondary text-secondary' : 'text-foreground'}`} 
          />
        </button>

        {/* Quick Add Button */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <Button 
            className="w-full bg-amber-500 hover:bg-amber-700/90"
            onClick={() => onAddToCart({ id, title, artist, price, image, category, onAddToCart })}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Añadir al Carrito
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-foreground line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">by {artist}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            ${price}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
