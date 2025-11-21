import { Card } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-none bg-transparent">
      <div className="aspect-square overflow-hidden bg-muted mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
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
