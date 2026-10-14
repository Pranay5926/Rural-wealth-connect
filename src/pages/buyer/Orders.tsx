import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Truck, CheckCircle } from "lucide-react";

const orders = [
  { id: "1", farmer: "Rajesh Kumar", material: "Rice Husk", quantity: "100", price: "520", status: "pending", date: "2026-10-14" },
  { id: "2", farmer: "Suresh Patel", material: "Wheat Straw", quantity: "200", price: "380", status: "confirmed", date: "2026-10-13" },
  { id: "3", farmer: "Amit Singh", material: "Paddy Straw", quantity: "150", price: "350", status: "completed", date: "2026-10-10" },
];

const Orders = () => {
  const pending = orders.filter(o => o.status === "pending");
  const confirmed = orders.filter(o => o.status === "confirmed");
  const completed = orders.filter(o => o.status === "completed");

  return (
    <DashboardLayout title="My Orders">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All ({orders.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({pending.length})</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed ({confirmed.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completed.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-semibold">{order.material}</h3>
                    <Badge variant={
                      order.status === "completed" ? "default" :
                      order.status === "confirmed" ? "outline" : "secondary"
                    } className={order.status === "completed" ? "bg-success" : ""}>
                      {order.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Farmer</p>
                      <p className="font-medium">{order.farmer}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Quantity</p>
                      <p className="font-medium">{order.quantity} Q</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Price</p>
                      <p className="font-medium text-primary">₹{parseInt(order.price) * parseInt(order.quantity)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Date</p>
                      <p className="font-medium">{order.date}</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {pending.map((order) => (
            <Card key={order.id} className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{order.material}</h3>
                  <Badge variant="secondary">Pending</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Farmer</p>
                    <p className="font-medium">{order.farmer}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Quantity</p>
                    <p className="font-medium">{order.quantity} Q</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total</p>
                    <p className="font-medium text-primary">₹{parseInt(order.price) * parseInt(order.quantity)}</p>
                  </div>
                </div>
                <Button className="w-full">Track Order</Button>
              </div>
            </Card>
          ))}
          {pending.length === 0 && (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No pending orders</p>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="confirmed" className="space-y-4">
          {confirmed.map((order) => (
            <Card key={order.id} className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{order.material}</h3>
                  <Badge variant="outline" className="gap-1">
                    <Truck className="h-3 w-3" />
                    Confirmed
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Farmer</p>
                    <p className="font-medium">{order.farmer}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Quantity</p>
                    <p className="font-medium">{order.quantity} Q</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total</p>
                    <p className="font-medium text-primary">₹{parseInt(order.price) * parseInt(order.quantity)}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full gap-2">
                  <Truck className="h-4 w-4" />
                  Track Delivery
                </Button>
              </div>
            </Card>
          ))}
          {confirmed.length === 0 && (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No confirmed orders</p>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completed.map((order) => (
            <Card key={order.id} className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{order.material}</h3>
                  <Badge className="bg-success gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Completed
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Farmer</p>
                    <p className="font-medium">{order.farmer}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Quantity</p>
                    <p className="font-medium">{order.quantity} Q</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total</p>
                    <p className="font-medium text-success">₹{parseInt(order.price) * parseInt(order.quantity)}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">View Invoice</Button>
              </div>
            </Card>
          ))}
          {completed.length === 0 && (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No completed orders</p>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Orders;
