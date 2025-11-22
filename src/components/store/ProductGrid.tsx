import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

// Mock data - will be replaced with real data from database
const products = [
  {
    id: "1",
    name: "Ceramic Vase",
    price: 89,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
    category: "Home"
  },
  {
    id: "2",
    name: "Linen Throw",
    price: 125,
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    category: "Textiles"
  },
  {
    id: "3",
    name: "Leather Journal",
    price: 65,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80",
    category: "Stationery"
  },
  {
    id: "4",
    name: "Brass Candleholder",
    price: 95,
    image: "https://images.unsplash.com/photo-1602874801006-95415c52e0d6?w=800&q=80",
    category: "Home"
  },
  {
    id: "5",
    name: "Wool Blanket",
    price: 185,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80",
    category: "Textiles"
  },
  {
    id: "6",
    name: "Oak Tray",
    price: 72,
    image: "https://images.unsplash.com/photo-1595814433015-e3f096b9e6f7?w=800&q=80",
    category: "Home"
  }
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`} className="block">
          <ProductCard id={product.id} {...product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
