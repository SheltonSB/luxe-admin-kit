import { Link, useNavigate } from "react-router-dom";
import { Package, Upload, BarChart3, Settings, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="text-xl font-display">Admin Dashboard</h1>
            </div>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-display mb-2">Welcome back</h2>
          <p className="text-muted-foreground">Manage your store from here</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Products Card */}
          <Card className="hover:shadow-lg transition-smooth cursor-pointer" onClick={() => navigate('/admin/products')}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Package className="h-8 w-8 text-accent" />
                <span className="text-2xl font-display">12</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">Products</CardTitle>
              <CardDescription>Manage your product catalog</CardDescription>
            </CardContent>
          </Card>

          {/* Upload Card */}
          <Card className="hover:shadow-lg transition-smooth cursor-pointer" onClick={() => navigate('/admin/products')}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Upload className="h-8 w-8 text-accent" />
                <span className="text-2xl font-display">+</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">Upload Images</CardTitle>
              <CardDescription>Add product photos to your catalog</CardDescription>
            </CardContent>
          </Card>

          {/* Analytics Card */}
          <Card className="hover:shadow-lg transition-smooth">
            <CardHeader>
              <div className="flex items-center justify-between">
                <BarChart3 className="h-8 w-8 text-accent" />
                <span className="text-2xl font-display">$2.4k</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">Analytics</CardTitle>
              <CardDescription>View your store performance</CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-12">
          <h3 className="text-xl font-display mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-start text-left h-auto py-4"
              onClick={() => navigate('/admin/products')}
            >
              <div>
                <div className="font-semibold mb-1">Add New Product</div>
                <div className="text-xs text-muted-foreground">Create a new product listing with images</div>
              </div>
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start text-left h-auto py-4"
            >
              <div>
                <div className="font-semibold mb-1">Manage Inventory</div>
                <div className="text-xs text-muted-foreground">Update stock levels and availability</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
