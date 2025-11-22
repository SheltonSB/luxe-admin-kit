import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id, name, price, image, category });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-none bg-transparent">
      <div className="relative aspect-square overflow-hidden bg-muted mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        <Button
          size="icon"
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth"
          onClick={handleAddToCart}
        >
          <ShoppingBag className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{category}</p>
        <h3 className="font-display text-xl">{name}</h3>
        <p className="text-sm text-muted-foreground">${price}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
