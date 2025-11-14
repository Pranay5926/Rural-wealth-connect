import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Package, Check, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const pickupRequests = [
  { id: "1", farmer: "Rajesh Kumar", material: "Rice Husk", quantity: "100 Q", location: "Village Khanna, Punjab", distance: "12 km", status: "pending" },
  { id: "2", farmer: "Suresh Patel", material: "Wheat Straw", quantity: "200 Q", location: "Village Rohtak, Haryana", distance: "25 km", status: "pending" },
  { id: "3", farmer: "Amit Singh", material: "Paddy Straw", quantity: "150 Q", location: "Village Patiala, Punjab", distance: "8 km", status: "accepted" },
  { id: "4", farmer: "Ramesh Yadav", material: "Cow Dung", quantity: "80 Q", location: "Village Meerut, UP", distance: "45 km", status: "pending" },
];

const PickupRequests = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAccept = (id: string) => {
    toast({
      title: "Pickup Accepted",
      description: "You can now proceed to pickup location",
    });
    navigate(`/logistics/route-tracking/${id}`);
  };

  return (
    <DashboardLayout title="Pickup Requests">
      <div className="space-y-4">
        {pickupRequests.map((request) => (
          <Card key={request.id} className="p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-semibold">{request.farmer}</h3>
                    <Badge variant={request.status === "accepted" ? "default" : "outline"}>
                      {request.status === "accepted" ? (
                        <><Check className="h-3 w-3 mr-1" /> Accepted</>
                      ) : (
                        <><Clock className="h-3 w-3 mr-1" /> Pending</>
                      )}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Material</p>
                        <p className="font-medium">{request.material}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Quantity</p>
                      <p className="font-medium">{request.quantity}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Distance</p>
                      <p className="font-medium">{request.distance}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{request.location}</span>
                  </div>
                </div>
              </div>

              {request.status === "pending" ? (
                <Button 
                  onClick={() => handleAccept(request.id)}
                  className="w-full gap-2"
                >
                  <Check className="h-4 w-4" />
                  Accept Pickup
                </Button>
              ) : (
                <Button 
                  onClick={() => navigate(`/logistics/route-tracking/${request.id}`)}
                  variant="outline"
                  className="w-full"
                >
                  View Route
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default PickupRequests;
