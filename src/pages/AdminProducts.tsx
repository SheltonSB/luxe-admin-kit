import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Upload, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Mock data
const mockProducts = [
  { id: "1", name: "Ceramic Vase", price: 89, category: "Home", stock: 12, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=200&q=80" },
  { id: "2", name: "Linen Throw", price: 125, category: "Textiles", stock: 8, image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=200&q=80" },
  { id: "3", name: "Leather Journal", price: 65, category: "Stationery", stock: 24, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=200&q=80" },
];

const AdminProducts = () => {
  const [products] = useState(mockProducts);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="text-xl font-display">Product Management</h1>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Product</DialogTitle>
                  <DialogDescription>
                    Fill in the product details and upload images. Images will be stored in Lovable Cloud.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Product Name</Label>
                      <Input id="name" placeholder="Enter product name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price ($)</Label>
                      <Input id="price" type="number" placeholder="0.00" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Input id="category" placeholder="e.g., Home, Textiles" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stock">Stock</Label>
                      <Input id="stock" type="number" placeholder="0" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe the product..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Product Images</Label>
                    <Card className="border-dashed">
                      <CardContent className="flex flex-col items-center justify-center py-12">
                        <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Drag and drop images or click to browse
                        </p>
                        <p className="text-xs text-muted-foreground mb-4">
                          PNG, JPG or WEBP (max. 5MB each)
                        </p>
                        <Button variant="outline" size="sm">
                          Select Images
                        </Button>
                        <p className="text-xs text-muted-foreground mt-4">
                          Note: Image upload requires Lovable Cloud
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="flex justify-end gap-3">
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsAddDialogOpen(false)}>
                    Create Product
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>All Products</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminProducts;
