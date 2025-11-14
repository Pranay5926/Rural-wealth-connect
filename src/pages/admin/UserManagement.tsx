import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, Users, Factory, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const pendingUsers = [
  { id: "1", name: "Rajesh Kumar", type: "farmer", phone: "+91 98765 43210", location: "Punjab", status: "pending" },
  { id: "2", name: "Green Industries", type: "buyer", phone: "+91 98765 43211", location: "Haryana", status: "pending" },
  { id: "3", name: "Quick Transport", type: "logistics", phone: "+91 98765 43212", location: "Punjab", status: "pending" },
];

const UserManagement = () => {
  const { toast } = useToast();
  const [users, setUsers] = useState(pendingUsers);

  const handleApprove = (id: string) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: "approved" } : user));
    toast({
      title: "User Approved",
      description: "The user has been successfully approved",
    });
  };

  const handleReject = (id: string) => {
    setUsers(users.filter(user => user.id !== id));
    toast({
      title: "User Rejected",
      description: "The user application has been rejected",
      variant: "destructive",
    });
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "farmer": return Users;
      case "buyer": return Factory;
      case "logistics": return Truck;
      default: return Users;
    }
  };

  return (
    <DashboardLayout title="User Management">
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">Pending Approval</TabsTrigger>
          <TabsTrigger value="approved">Approved Users</TabsTrigger>
          <TabsTrigger value="all">All Users</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {users.filter(u => u.status === "pending").map((user) => {
            const Icon = getIcon(user.type);
            return (
              <Card key={user.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{user.name}</h3>
                        <Badge variant="outline" className="capitalize">{user.type}</Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Phone</p>
                        <p className="font-medium">{user.phone}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Location</p>
                        <p className="font-medium">{user.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleApprove(user.id)}
                      className="gap-2"
                    >
                      <Check className="h-4 w-4" />
                      Approve
                    </Button>
                    <Button 
                      variant="destructive"
                      onClick={() => handleReject(user.id)}
                      className="gap-2"
                    >
                      <X className="h-4 w-4" />
                      Reject
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}

          {users.filter(u => u.status === "pending").length === 0 && (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No pending user approvals</p>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="approved" className="space-y-4">
          {users.filter(u => u.status === "approved").map((user) => {
            const Icon = getIcon(user.type);
            return (
              <Card key={user.id} className="p-6">
                <div className="flex items-center gap-3">
                  <div className="bg-success/10 p-3 rounded-full">
                    <Icon className="h-5 w-5 text-success" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{user.name}</h3>
                      <Badge className="bg-success capitalize">{user.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{user.location}</p>
                  </div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </Card>
            );
          })}

          {users.filter(u => u.status === "approved").length === 0 && (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No approved users yet</p>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold">842</p>
              <p className="text-sm text-muted-foreground">Farmers</p>
            </Card>
            <Card className="p-6 text-center">
              <Factory className="h-8 w-8 text-secondary mx-auto mb-2" />
              <p className="text-3xl font-bold">186</p>
              <p className="text-sm text-muted-foreground">Buyers</p>
            </Card>
            <Card className="p-6 text-center">
              <Truck className="h-8 w-8 text-accent mx-auto mb-2" />
              <p className="text-3xl font-bold">256</p>
              <p className="text-sm text-muted-foreground">Logistics</p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default UserManagement;
