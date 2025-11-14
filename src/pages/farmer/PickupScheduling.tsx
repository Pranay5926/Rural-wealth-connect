import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, MapPin, DollarSign, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const transportOptions = [
  {
    id: "1",
    provider: "Rural Transport Services",
    vehicleType: "Mini Truck",
    capacity: "2 Tons",
    price: "1200",
    eta: "2 hours",
    rating: "4.5",
  },
  {
    id: "2",
    provider: "Farm Logistics Co",
    vehicleType: "Tractor Trolley",
    capacity: "3 Tons",
    price: "900",
    eta: "3 hours",
    rating: "4.2",
  },
  {
    id: "3",
    provider: "Quick Haul Express",
    vehicleType: "Large Truck",
    capacity: "5 Tons",
    price: "2000",
    eta: "4 hours",
    rating: "4.7",
  },
  {
    id: "4",
    provider: "Green Transport",
    vehicleType: "Mini Truck",
    capacity: "2 Tons",
    price: "1100",
    eta: "1.5 hours",
    rating: "4.6",
  },
];

const PickupScheduling = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedTransport, setSelectedTransport] = useState<string | null>(null);

  const handleSelectTransport = (id: string) => {
    setSelectedTransport(id);
  };

  const handleConfirmPickup = () => {
    if (selectedTransport) {
      toast({
        title: "Pickup Scheduled",
        description: "The logistics partner will contact you shortly",
      });
      navigate("/farmer/orders");
    } else {
      toast({
        title: "Select Transport",
        description: "Please select a transport option first",
        variant: "destructive",
      });
    }
  };

  return (
    <DashboardLayout title="Pickup Scheduling">
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Truck className="h-6 w-6 text-primary" />
            <div>
              <h2 className="text-xl font-bold">Select Transport Option</h2>
              <p className="text-sm text-muted-foreground">
                Choose the best logistics partner for your delivery
              </p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {transportOptions.map((transport) => (
            <Card
              key={transport.id}
              className={`p-6 cursor-pointer transition-all ${
                selectedTransport === transport.id
                  ? "ring-2 ring-primary shadow-lg"
                  : "hover:shadow-md"
              }`}
              onClick={() => handleSelectTransport(transport.id)}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      {transport.provider}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {transport.vehicleType}
                    </p>
                  </div>
                  {selectedTransport === transport.id && (
                    <div className="bg-primary text-primary-foreground rounded-full p-1">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-muted-foreground" />
                    <span>{transport.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{transport.eta}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="text-2xl font-bold text-primary">
                      ₹{transport.price}
                    </p>
                  </div>
                  <Badge variant="outline">
                    ⭐ {transport.rating}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {selectedTransport && (
          <Card className="p-6 bg-primary/5 border-primary">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold mb-1">Selected Transport</h3>
                <p className="text-sm text-muted-foreground">
                  {transportOptions.find(t => t.id === selectedTransport)?.provider}
                </p>
              </div>
              <Button onClick={handleConfirmPickup} size="lg" className="gap-2">
                <Check className="h-5 w-5" />
                Confirm Pickup
              </Button>
            </div>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default PickupScheduling;
