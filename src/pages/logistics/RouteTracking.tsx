import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Clock, Package } from "lucide-react";

const RouteTracking = () => {
  const navigate = useNavigate();
  const { pickupId } = useParams();

  return (
    <DashboardLayout title="Route Tracking">
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Navigation className="h-6 w-6 text-primary" />
            <div>
              <h2 className="text-xl font-bold">GPS Route Tracking</h2>
              <p className="text-sm text-muted-foreground">Pickup ID: #{pickupId}</p>
            </div>
          </div>

          <Badge variant="outline" className="bg-accent/10 text-accent-foreground">
            Static Map Preview - GPS tracking feature
          </Badge>
        </Card>

        <Card className="p-6 bg-muted/50">
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center space-y-2">
              <MapPin className="h-16 w-16 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground font-medium">Interactive Map View</p>
              <p className="text-sm text-muted-foreground">GPS route tracking will be displayed here</p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Distance</p>
                <p className="font-bold">12 km</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-warning/10 p-3 rounded-full">
                <Clock className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">ETA</p>
                <p className="font-bold">25 mins</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-accent/10 p-3 rounded-full">
                <Package className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Load</p>
                <p className="font-bold">100 Q</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Route Details</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-primary rounded-full p-2 mt-1">
                <MapPin className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Pickup Location</p>
                <p className="text-sm text-muted-foreground">Village Khanna, Punjab</p>
              </div>
            </div>

            <div className="ml-5 border-l-2 border-dashed border-border h-8"></div>

            <div className="flex items-start gap-3">
              <div className="bg-success rounded-full p-2 mt-1">
                <MapPin className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Delivery Location</p>
                <p className="text-sm text-muted-foreground">Green Energy Industries, Punjab</p>
              </div>
            </div>
          </div>
        </Card>

        <Button 
          onClick={() => navigate(`/logistics/delivery-confirmation/${pickupId}`)}
          className="w-full h-12"
          size="lg"
        >
          Proceed to Delivery Confirmation
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default RouteTracking;
