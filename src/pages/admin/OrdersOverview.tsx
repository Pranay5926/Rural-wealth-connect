import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const orders = [
  { id: "ORD-001", farmer: "Rajesh Kumar", buyer: "Green Energy Industries", material: "Rice Husk", quantity: "100", value: "52000", status: "completed" },
  { id: "ORD-002", farmer: "Suresh Patel", buyer: "Biomass Solutions", material: "Wheat Straw", quantity: "200", value: "76000", status: "in-transit" },
  { id: "ORD-003", farmer: "Amit Singh", buyer: "Eco Materials Corp", material: "Paddy Straw", quantity: "150", value: "52500", status: "confirmed" },
  { id: "ORD-004", farmer: "Ramesh Yadav", buyer: "Renewable Resources", material: "Cow Dung", quantity: "80", value: "14400", status: "pending" },
];

const OrdersOverview = () => {
  return (
    <DashboardLayout title="Orders Overview">
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 text-center">
            <p className="text-3xl font-bold text-success">1,856</p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-3xl font-bold text-warning">124</p>
            <p className="text-sm text-muted-foreground">In Transit</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-3xl font-bold text-primary">86</p>
            <p className="text-sm text-muted-foreground">Confirmed</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-3xl font-bold text-muted-foreground">90</p>
            <p className="text-sm text-muted-foreground">Pending</p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold">{order.id}</h3>
                      <Badge
                        variant={
                          order.status === "completed" ? "default" :
                          order.status === "in-transit" ? "outline" :
                          order.status === "confirmed" ? "secondary" : "outline"
                        }
                        className={order.status === "completed" ? "bg-success" : ""}
                      >
                        {order.status.replace("-", " ")}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Farmer</p>
                        <p className="font-medium">{order.farmer}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Buyer</p>
                        <p className="font-medium">{order.buyer}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Material</p>
                        <p className="font-medium">{order.material}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Quantity</p>
                        <p className="font-medium">{order.quantity} Q</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Value</p>
                        <p className="font-medium text-success">₹{parseInt(order.value).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default OrdersOverview;
