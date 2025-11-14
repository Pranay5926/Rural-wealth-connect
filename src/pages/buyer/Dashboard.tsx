import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Search, FileText, ShoppingCart, MessageSquare, BarChart3 } from "lucide-react";

const menuItems = [
  { title: "Search Residues", icon: Search, path: "/buyer/search", color: "bg-primary" },
  { title: "Post Requirement", icon: FileText, path: "/buyer/post-requirement", color: "bg-secondary" },
  { title: "My Orders", icon: ShoppingCart, path: "/buyer/orders", color: "bg-accent" },
  { title: "Negotiation Chat", icon: MessageSquare, path: "/buyer/chat/1", color: "bg-earth-brown" },
  { title: "Analytics", icon: BarChart3, path: "/buyer/analytics", color: "bg-success" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Buyer Dashboard" showBack={false}>
      <div className="space-y-6">
        <Card className="p-6 bg-gradient-to-r from-secondary to-primary text-primary-foreground">
          <h2 className="text-2xl font-bold mb-2">Welcome, Industry Buyer!</h2>
          <p className="text-primary-foreground/90">
            Source quality agricultural materials at competitive prices
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

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground">Active Orders</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-success">8</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-warning">4</p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
