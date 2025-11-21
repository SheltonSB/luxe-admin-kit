import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data - will be replaced with real data from database
const productDetails: Record<string, any> = {
  "1": {
    name: "Ceramic Vase",
    price: 89,
    images: [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=1200&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&q=80"
    ],
    category: "Home",
    description: "Handcrafted ceramic vase with a minimalist design. Each piece is unique, featuring subtle variations in glaze and form that celebrate the artisan's touch.",
    details: [
      "Height: 12 inches",
      "Diameter: 6 inches",
      "Material: Stoneware ceramic",
      "Handmade in Portugal",
      "Watertight glazed interior"
    ]
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productDetails[id || "1"] || productDetails["1"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-display tracking-tight">
              LuxeStore
            </Link>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-smooth">
          <ArrowLeft className="h-4 w-4" />
          Back to products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(1).map((img: string, idx: number) => (
                <div key={idx} className="aspect-square bg-muted overflow-hidden">
                  <img 
                    src={img} 
                    alt={`${product.name} view ${idx + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-display mb-4">{product.name}</h1>
              <p className="text-2xl text-muted-foreground">${product.price}</p>
            </div>

            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Details</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {product.details.map((detail: string, idx: number) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="pt-6 space-y-4">
              <Button size="lg" className="w-full">
                Add to Cart
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Free shipping on orders over $150
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
