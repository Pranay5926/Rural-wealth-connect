import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Wheat, Factory, Truck, Shield } from "lucide-react";

const roles = [
  {
    id: "farmer",
    title: "Farmer",
    description: "Sell agricultural residues at fair prices",
    icon: Wheat,
    path: "/farmer/dashboard",
    color: "bg-primary"
  },
  {
    id: "buyer",
    title: "Industry Buyer",
    description: "Source quality agricultural materials",
    icon: Factory,
    path: "/buyer/dashboard",
    color: "bg-secondary"
  },
  {
    id: "logistics",
    title: "Logistics Partner",
    description: "Facilitate transportation and delivery",
    icon: Truck,
    path: "/logistics/dashboard",
    color: "bg-accent"
  },
  {
    id: "admin",
    title: "Admin",
    description: "Manage platform and users",
    icon: Shield,
    path: "/admin/dashboard",
    color: "bg-earth-dark"
  },
];

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (path: string, role: string) => {
    localStorage.setItem("userRole", role);
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-earth-beige to-muted flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Choose Your Role</h1>
          <p className="text-muted-foreground text-lg">
            Select how you want to participate in the platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card
                key={role.id}
                className="p-8 cursor-pointer transition-all hover:shadow-xl hover:scale-105 active:scale-95"
                onClick={() => handleRoleSelect(role.path, role.id)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`${role.color} p-6 rounded-full`}>
                    <Icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {role.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {role.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
