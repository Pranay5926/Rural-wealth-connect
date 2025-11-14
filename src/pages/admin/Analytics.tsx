import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Users, Leaf } from "lucide-react";

const Analytics = () => {
  return (
    <DashboardLayout title="Platform Analytics">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Total Trades</p>
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <p className="text-3xl font-bold">2,156</p>
            <p className="text-xs text-success mt-1">+18% from last month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Total Users</p>
              <Users className="h-5 w-5 text-secondary" />
            </div>
            <p className="text-3xl font-bold">1,284</p>
            <p className="text-xs text-success mt-1">+12% from last month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <DollarSign className="h-5 w-5 text-success" />
            </div>
            <p className="text-3xl font-bold">₹12.4L</p>
            <p className="text-xs text-success mt-1">+24% from last month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Pollution Reduced</p>
              <Leaf className="h-5 w-5 text-accent" />
            </div>
            <p className="text-3xl font-bold">42%</p>
            <p className="text-xs text-success mt-1">Regional impact</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Top Materials Traded</h2>
            <div className="space-y-4">
              {[
                { name: "Rice Husk", trades: 842, percentage: 39 },
                { name: "Wheat Straw", trades: 654, percentage: 30 },
                { name: "Paddy Straw", trades: 432, percentage: 20 },
                { name: "Others", trades: 228, percentage: 11 },
              ].map((material, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{material.name}</span>
                    <span className="text-muted-foreground">{material.trades} trades</span>
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

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Environmental Impact</h2>
            <div className="space-y-4">
              <div className="bg-success/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">CO₂ Emissions Prevented</p>
                <p className="text-2xl font-bold text-success">4,280 tons</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Waste Diverted from Burning</p>
                <p className="text-2xl font-bold text-accent">12,450 tons</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Rural Income Generated</p>
                <p className="text-2xl font-bold text-primary">₹8.6 Crore</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Top Performing Regions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Punjab", "Haryana", "Uttar Pradesh"].map((region, index) => (
              <Card key={index} className="p-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">{region}</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>Trades: {[856, 642, 428][index]}</p>
                    <p>Users: {[428, 324, 286][index]}</p>
                    <p>Revenue: ₹{[4.2, 3.6, 2.8][index]}L</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
