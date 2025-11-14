import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Plus, List, ShoppingCart, Wallet, TrendingUp, Users, Truck, WifiOff } from "lucide-react";

const menuItems = [
  { title: "Add Residue", icon: Plus, path: "/farmer/add-residue", color: "bg-primary" },
  { title: "My Listings", icon: List, path: "/farmer/listings", color: "bg-secondary" },
  { title: "Orders", icon: ShoppingCart, path: "/farmer/orders", color: "bg-accent" },
  { title: "Payment Status", icon: Wallet, path: "/farmer/payment-status", color: "bg-success" },
  { title: "Price Dashboard", icon: TrendingUp, path: "/farmer/prices", color: "bg-earth-brown" },
  { title: "Matchmaking", icon: Users, path: "/farmer/matchmaking", color: "bg-warning" },
  { title: "Pickup Scheduling", icon: Truck, path: "/farmer/pickup", color: "bg-primary" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "Farmer";

  return (
    <DashboardLayout title="Farmer Dashboard" showBack={false} showOfflineIndicator>
      <div className="space-y-6">
        <Card className="p-6 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <h2 className="text-2xl font-bold mb-2">Welcome, {userName}!</h2>
          <p className="text-primary-foreground/90">
            Start selling your agricultural residues today
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.path}
                className="p-6 cursor-pointer transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                onClick={() => navigate(item.path)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`${item.color} p-4 rounded-full`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
