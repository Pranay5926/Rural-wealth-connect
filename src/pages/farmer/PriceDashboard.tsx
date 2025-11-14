import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, TrendingUp, TrendingDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const priceData = [
  {
    id: "1",
    name: "Rice Husk",
    currentPrice: "520",
    previousPrice: "500",
    unit: "Quintal",
    trend: "up",
    change: "+4%",
  },
  {
    id: "2",
    name: "Wheat Straw",
    currentPrice: "380",
    previousPrice: "390",
    unit: "Quintal",
    trend: "down",
    change: "-2.5%",
  },
  {
    id: "3",
    name: "Paddy Straw",
    currentPrice: "350",
    previousPrice: "340",
    unit: "Quintal",
    trend: "up",
    change: "+2.9%",
  },
  {
    id: "4",
    name: "Cow Dung",
    currentPrice: "180",
    previousPrice: "180",
    unit: "Quintal",
    trend: "stable",
    change: "0%",
  },
  {
    id: "5",
    name: "Groundnut Shells",
    currentPrice: "450",
    previousPrice: "465",
    unit: "Quintal",
    trend: "down",
    change: "-3.2%",
  },
  {
    id: "6",
    name: "Sugarcane Bagasse",
    currentPrice: "280",
    previousPrice: "270",
    unit: "Quintal",
    trend: "up",
    change: "+3.7%",
  },
];

const PriceDashboard = () => {
  const { toast } = useToast();
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString());

  const handleRefresh = () => {
    setLastUpdated(new Date().toLocaleString());
    toast({
      title: "Prices Refreshed",
      description: "Latest market prices loaded",
    });
  };

  return (
    <DashboardLayout title="Price Dashboard">
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold">Real-Time Market Prices</h2>
              <p className="text-sm text-muted-foreground">
                Last updated: {lastUpdated}
              </p>
            </div>
            <Button onClick={handleRefresh} variant="outline" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Refresh Prices
            </Button>
          </div>

          <Badge variant="outline" className="bg-accent/10 text-accent-foreground">
            AI Dynamic Pricing Algorithm (Static UI)
          </Badge>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {priceData.map((item) => (
            <Card key={item.id} className="p-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  {item.trend !== "stable" && (
                    <div className={`flex items-center gap-1 ${
                      item.trend === "up" ? "text-success" : "text-destructive"
                    }`}>
                      {item.trend === "up" ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span className="text-sm font-medium">{item.change}</span>
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-3xl font-bold text-primary">
                    ₹{item.currentPrice}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    per {item.unit}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Previous:</span>
                  <span className={
                    item.trend === "up" ? "text-muted-foreground line-through" : 
                    item.trend === "down" ? "text-destructive" : ""
                  }>
                    ₹{item.previousPrice}
                  </span>
                </div>

                <Badge variant={
                  item.trend === "up" ? "default" : 
                  item.trend === "down" ? "destructive" : "outline"
                } className="w-full justify-center">
                  {item.trend === "up" ? "Price Increased" : 
                   item.trend === "down" ? "Price Decreased" : "Stable"}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PriceDashboard;
