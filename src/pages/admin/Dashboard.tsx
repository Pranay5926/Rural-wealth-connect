import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Users, List, ShoppingCart, BarChart3, AlertCircle, Bell } from "lucide-react";

const menuItems = [
  { title: "User Management", icon: Users, path: "/admin/users", color: "bg-primary" },
  { title: "Listings Management", icon: List, path: "/admin/listings", color: "bg-secondary" },
  { title: "Orders Overview", icon: ShoppingCart, path: "/admin/orders", color: "bg-accent" },
  { title: "Analytics", icon: BarChart3, path: "/admin/analytics", color: "bg-success" },
  { title: "Disputes", icon: AlertCircle, path: "/admin/disputes", color: "bg-destructive" },
  { title: "Notifications", icon: Bell, path: "/admin/notifications", color: "bg-warning" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Admin Dashboard" showBack={false}>
      <div className="space-y-6">
        <Card className="p-6 bg-gradient-to-r from-primary to-earth-dark text-primary-foreground">
          <h2 className="text-2xl font-bold mb-2">Admin Control Panel</h2>
          <p className="text-primary-foreground/90">
            Manage platform users, listings, and monitor all activities
          </p>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">1,284</p>
              <p className="text-sm text-muted-foreground">Total Users</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">458</p>
              <p className="text-sm text-muted-foreground">Active Listings</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-success">2,156</p>
              <p className="text-sm text-muted-foreground">Total Trades</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">42%</p>
              <p className="text-sm text-muted-foreground">Pollution Reduction</p>
            </div>
          </Card>
        </div>

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
