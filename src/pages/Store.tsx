import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductGrid from "@/components/store/ProductGrid";
import CartSheet from "@/components/store/CartSheet";

const Store = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-display tracking-tight">
              LuxeStore
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/products" className="text-sm hover:text-accent transition-smooth">
                Products
              </Link>
              <Link to="/collections" className="text-sm hover:text-accent transition-smooth">
                Collections
              </Link>
              <Link to="/about" className="text-sm hover:text-accent transition-smooth">
                About
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Link to="/admin">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <CartSheet />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient py-32 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-display mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Timeless Essentials
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Thoughtfully curated products designed for modern living. Every piece tells a story of craftsmanship and intentional design.
          </p>
          <Button size="lg" className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Explore Collection
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-display">Featured Products</h2>
            <div className="flex items-center gap-4">
              <Input 
                placeholder="Search products..." 
                className="w-64"
              />
            </div>
          </div>
          
          <ProductGrid />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 mt-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display text-xl mb-4">LuxeStore</h3>
              <p className="text-sm text-muted-foreground">
                Curated luxury for the modern lifestyle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/products" className="hover:text-foreground transition-smooth">All Products</Link></li>
                <li><Link to="/collections" className="hover:text-foreground transition-smooth">Collections</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-smooth">Our Story</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-smooth">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 LuxeStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Store;
