import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { TrendingUp, ShoppingCart, DollarSign, Package } from "lucide-react";

const Analytics = () => {
  return (
    <DashboardLayout title="Analytics Snapshot">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Total Orders</p>
              <ShoppingCart className="h-5 w-5 text-primary" />
            </div>
            <p className="text-3xl font-bold">24</p>
            <p className="text-xs text-success mt-1">+12% from last month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Total Spent</p>
              <DollarSign className="h-5 w-5 text-success" />
            </div>
            <p className="text-3xl font-bold">₹2.4L</p>
            <p className="text-xs text-success mt-1">+8% from last month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Materials Sourced</p>
              <Package className="h-5 w-5 text-accent" />
            </div>
            <p className="text-3xl font-bold">1,850Q</p>
            <p className="text-xs text-success mt-1">+15% from last month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Active Suppliers</p>
              <TrendingUp className="h-5 w-5 text-warning" />
            </div>
            <p className="text-3xl font-bold">12</p>
            <p className="text-xs text-success mt-1">+3 this month</p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Top Materials Sourced</h2>
          <div className="space-y-4">
            {[
              { name: "Rice Husk", quantity: "650 Q", percentage: 35 },
              { name: "Wheat Straw", quantity: "480 Q", percentage: 26 },
              { name: "Paddy Straw", quantity: "420 Q", percentage: 23 },
              { name: "Sugarcane Bagasse", quantity: "300 Q", percentage: 16 },
            ].map((material, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{material.name}</span>
                  <span className="text-muted-foreground">{material.quantity}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all"
                    style={{ width: `${material.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Recent Suppliers</h2>
            <div className="space-y-3">
              {["Rajesh Kumar", "Suresh Patel", "Amit Singh", "Ramesh Yadav"].map((name, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="font-medium">{name}</span>
                  <span className="text-sm text-muted-foreground">Active</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Cost Savings</h2>
            <div className="space-y-4">
              <div className="bg-success/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Average savings per order</p>
                <p className="text-2xl font-bold text-success">₹2,400</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Total savings this quarter</p>
                <p className="text-2xl font-bold text-primary">₹57,600</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
