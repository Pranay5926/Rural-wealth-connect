import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Package, Map, CheckSquare, Truck } from "lucide-react";

const menuItems = [
  { title: "Pickup Requests", icon: Package, path: "/logistics/pickup-requests", color: "bg-primary" },
  { title: "Route Tracking", icon: Map, path: "/logistics/route-tracking/1", color: "bg-secondary" },
  { title: "Delivery Confirmation", icon: CheckSquare, path: "/logistics/delivery-confirmation/1", color: "bg-accent" },
  { title: "Vehicle Management", icon: Truck, path: "/logistics/vehicles", color: "bg-earth-brown" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Logistics Dashboard" showBack={false}>
      <div className="space-y-6">
        <Card className="p-6 bg-gradient-to-r from-accent to-secondary text-primary-foreground">
          <h2 className="text-2xl font-bold mb-2">Welcome, Logistics Partner!</h2>
          <p className="text-primary-foreground/90">
            Manage pickups, deliveries, and routes efficiently
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Today's Stats</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">8</p>
              <p className="text-sm text-muted-foreground">Pending Pickups</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-warning">5</p>
              <p className="text-sm text-muted-foreground">In Transit</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-success">12</p>
              <p className="text-sm text-muted-foreground">Delivered Today</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
