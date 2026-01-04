import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartSheet, { CartItem } from "./CartSheet";
import { HashLink } from 'react-router-hash-link';

import logo from "@/assets/logo.jpg";
import slogan from "@/assets/2.png";

interface HeaderProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const Header = ({ cartItems, onUpdateQuantity, onRemoveItem }: HeaderProps) => {
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} width={60} />
          <img src={slogan} width={190} />
          
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <HashLink smooth to="/#gallery"
          className="text-foreground hover:text-primary transition-colors font-medium">
            Galería
          </HashLink>
          <a href="#categories" className="text-foreground hover:text-primary transition-colors font-medium">
            Categorías
          </a>
          <a href="#custom" className="text-foreground hover:text-primary transition-colors font-medium">
            Logo Personalizado
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
            Acerca de
          </a>
        </nav>

        {/* Cart Button */}
        <div className="flex items-center gap-4">
          <CartSheet 
            items={cartItems}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
            itemCount={itemCount}
          />

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-6 mt-8">
                <a href="#gallery" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Galería
                </a>
                <a href="#categories" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Categorías
                </a>
                <a href="#custom" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Logo Personalizado
                </a>
                <a href="#about" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Acerca de
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

