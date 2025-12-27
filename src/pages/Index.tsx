import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import CustomLogoCTA from "@/components/CustomLogoCTA";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import { CartItem } from "@/components/CartSheet";
import { useToast } from "@/hooks/use-toast";

// Mock product data
import sample1 from "@/assets/sample-1.jpg";
import sample2 from "@/assets/sample-2.jpg";
import sample3 from "@/assets/sample-3.jpg";
import sample4 from "@/assets/sample-4.jpg";
import sample5 from "@/assets/sample-5.jpg";
import sample6 from "@/assets/sample-6.jpg";
import sample7 from "@/assets/sample-7.jpg";
import logo from "@/assets/logo.jpg";
import slogan from "@/assets/2.png";

const products = [
  { id: 1, title: "Pokemon Charmander", artist: "SakuraArt", price: 45, image: sample1, category: "Fan Art" },
  { id: 2, title: "Vector Spiderman", artist: "ModernMinds", price: 35, image: sample2, category: "Estilo Cómic" },
  { id: 3, title: "Tom y Jerry", artist: "CloudNine", price: 65, image: sample3, category: "Paisajes" },
  { id: 4, title: "Tom Feliz", artist: "CuteCreations", price: 40, image: sample4, category: "Diseño de Personajes" },
  { id: 5, title: "Poster contra Bullying", artist: "FanArtist99", price: 55, image: sample5, category: "Fan Art" },
  { id: 6, title: "Pokemon Mudkip", artist: "ComicPro", price: 50, image: sample6, category: "Abstracto" },
  { id: 7, title: "Pokemon Squirtle", artist: "ComicPro", price: 50, image: sample6, category: "Abstracto" },
];

const Index = () => {
  const { toast } = useToast();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 200]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleAddToCart = (product: any) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast({
      title: "¡Añadido al carrito!",
      description: `${product.title} se ha añadido a tu carrito.`,
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
      <Hero />
      <WhatsAppFloatButton />
      
      <CustomLogoCTA />
      
      <main className="container mx-auto px-6 py-12" id="gallery">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar 
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
          />
          
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Ilustraciones Destacadas</h2>
              <p className="text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'obra' : 'obras'} disponible{filteredProducts.length === 1 ? '' : 's'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} {...product} onAddToCart={handleAddToCart} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">No hay obras que coincidan con tus filtros</p>
                <p className="text-muted-foreground">Intenta ajustar tus criterios de búsqueda</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-muted/30 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} width={60} />
                <img src={slogan} width={190} />
                {/* <span className="text-lg font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Drawing Lifes
                </span> */}
              </div>
              <p className="text-sm text-muted-foreground">
                Tu destino para ilustraciones únicas y arte personalizado
              </p>
              <p className="text-sm italic text-primary mt-2">
                "te dibujamos la bienvenida"
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Tienda</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Todas las Obras</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Nuevos Lanzamientos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Más Vendidos</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Soporte</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Contáctanos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Preguntas Frecuentes</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Envíos</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Licencias</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Torres & Carvajal Design. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
