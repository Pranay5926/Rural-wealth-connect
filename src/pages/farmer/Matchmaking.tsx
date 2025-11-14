import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Filter, DollarSign, MapPin, TrendingUp, Building2, Phone, Mail } from "lucide-react";

const buyers = [
  {
    id: "1",
    name: "Green Energy Industries",
    residueNeeded: "Rice Husk",
    quantity: "500",
    offeredPrice: "530",
    location: "Punjab",
    distance: "45 km",
    demand: "High",
  },
  {
    id: "2",
    name: "Biomass Solutions Ltd",
    residueNeeded: "Wheat Straw",
    quantity: "800",
    offeredPrice: "390",
    location: "Haryana",
    distance: "78 km",
    demand: "Medium",
  },
  {
    id: "3",
    name: "Eco Materials Corp",
    residueNeeded: "Paddy Straw",
    quantity: "600",
    offeredPrice: "360",
    location: "Punjab",
    distance: "32 km",
    demand: "High",
  },
  {
    id: "4",
    name: "Renewable Resources Inc",
    residueNeeded: "Rice Husk",
    quantity: "400",
    offeredPrice: "525",
    location: "Rajasthan",
    distance: "120 km",
    demand: "Medium",
  },
];

const Matchmaking = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedBuyer, setSelectedBuyer] = useState<typeof buyers[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleViewDetails = (buyer: typeof buyers[0]) => {
    setSelectedBuyer(buyer);
    setDialogOpen(true);
  };

  const handleContact = () => {
    setDialogOpen(false);
    navigate("/buyer/chat/1");
  };

  const filteredBuyers = buyers.filter(buyer => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "best-offer") return parseInt(buyer.offeredPrice) > 500;
    if (selectedFilter === "nearest") return parseInt(buyer.distance) < 50;
    if (selectedFilter === "high-demand") return buyer.demand === "High";
    return true;
  });

  return (
    <DashboardLayout title="Matchmaking">
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Filter Buyers</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedFilter === "all" ? "default" : "outline"}
              onClick={() => setSelectedFilter("all")}
              size="sm"
            >
              All Buyers
            </Button>
            <Button
              variant={selectedFilter === "best-offer" ? "default" : "outline"}
              onClick={() => setSelectedFilter("best-offer")}
              size="sm"
              className="gap-2"
            >
              <DollarSign className="h-4 w-4" />
              Best Offer
            </Button>
            <Button
              variant={selectedFilter === "nearest" ? "default" : "outline"}
              onClick={() => setSelectedFilter("nearest")}
              size="sm"
              className="gap-2"
            >
              <MapPin className="h-4 w-4" />
              Nearest Industry
            </Button>
            <Button
              variant={selectedFilter === "high-demand" ? "default" : "outline"}
              onClick={() => setSelectedFilter("high-demand")}
              size="sm"
              className="gap-2"
            >
              <TrendingUp className="h-4 w-4" />
              Highest Demand
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBuyers.map((buyer) => (
            <Card key={buyer.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">{buyer.name}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{buyer.location} • {buyer.distance}</span>
                    </div>
                  </div>
                  <Badge variant={buyer.demand === "High" ? "default" : "outline"}>
                    {buyer.demand} Demand
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Needs</p>
                    <p className="font-medium">{buyer.residueNeeded}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Quantity</p>
                    <p className="font-medium">{buyer.quantity} Q</p>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-3">
                  <p className="text-sm text-muted-foreground mb-1">Offered Price</p>
                  <p className="text-2xl font-bold text-primary">₹{buyer.offeredPrice}/Q</p>
                </div>

                <Button 
                  onClick={() => handleViewDetails(buyer)}
                  className="w-full"
                >
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredBuyers.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No buyers match your filter criteria</p>
          </Card>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedBuyer?.name}</DialogTitle>
            <DialogDescription>Buyer Details and Contact Information</DialogDescription>
          </DialogHeader>

          {selectedBuyer && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Residue Needed</p>
                  <p className="font-medium">{selectedBuyer.residueNeeded}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Quantity</p>
                  <p className="font-medium">{selectedBuyer.quantity} Quintals</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Offered Price</p>
                  <p className="font-medium text-primary">₹{selectedBuyer.offeredPrice}/Q</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{selectedBuyer.location}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Distance</p>
                  <p className="font-medium">{selectedBuyer.distance}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Demand Level</p>
                  <p className="font-medium">{selectedBuyer.demand}</p>
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <Button onClick={handleContact} className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  Contact Buyer
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Mail className="h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default Matchmaking;
