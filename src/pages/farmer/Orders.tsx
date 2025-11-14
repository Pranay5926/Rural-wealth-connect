import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const demoOffers = [
  {
    id: "1",
    buyerName: "Green Energy Industries",
    residueType: "Rice Husk",
    quantity: "100",
    offeredRate: "520",
    status: "pending",
  },
  {
    id: "2",
    buyerName: "Biomass Solutions Ltd",
    residueType: "Wheat Straw",
    quantity: "200",
    offeredRate: "380",
    status: "pending",
  },
];

const Orders = () => {
  const { toast } = useToast();
  const [offers, setOffers] = useState(demoOffers);

  const handleAccept = (id: string) => {
    setOffers(offers.map(offer => 
      offer.id === id ? { ...offer, status: "accepted" } : offer
    ));
    
    toast({
      title: "Offer Accepted",
      description: "The buyer has been notified",
    });
  };

  const handleReject = (id: string) => {
    setOffers(offers.map(offer => 
      offer.id === id ? { ...offer, status: "rejected" } : offer
    ));
    
    toast({
      title: "Offer Rejected",
      description: "The buyer has been notified",
    });
  };

  const pendingOffers = offers.filter(o => o.status === "pending");
  const acceptedOffers = offers.filter(o => o.status === "accepted");
  const rejectedOffers = offers.filter(o => o.status === "rejected");

  return (
    <DashboardLayout title="Orders">
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">
            Pending ({pendingOffers.length})
          </TabsTrigger>
          <TabsTrigger value="accepted">
            Accepted ({acceptedOffers.length})
          </TabsTrigger>
          <TabsTrigger value="history">
            History ({rejectedOffers.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {pendingOffers.map((offer) => (
            <Card key={offer.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{offer.buyerName}</h3>
                    <Badge variant="outline" className="gap-1">
                      <Clock className="h-3 w-3" />
                      Pending
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Residue</p>
                      <p className="font-medium">{offer.residueType}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Quantity</p>
                      <p className="font-medium">{offer.quantity} Q</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Offered Rate</p>
                      <p className="font-medium text-primary">₹{offer.offeredRate}/Q</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleAccept(offer.id)}
                    className="gap-2"
                  >
                    <Check className="h-4 w-4" />
                    Accept
                  </Button>
                  <Button 
                    variant="destructive"
                    onClick={() => handleReject(offer.id)}
                    className="gap-2"
                  >
                    <X className="h-4 w-4" />
                    Reject
                  </Button>
                </div>
              </div>
            </Card>
          ))}
          
          {pendingOffers.length === 0 && (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No pending offers</p>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="accepted" className="space-y-4">
          {acceptedOffers.map((offer) => (
            <Card key={offer.id} className="p-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{offer.buyerName}</h3>
                  <Badge className="gap-1 bg-success">
                    <Check className="h-3 w-3" />
                    Accepted
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Residue</p>
                    <p className="font-medium">{offer.residueType}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Quantity</p>
                    <p className="font-medium">{offer.quantity} Q</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Agreed Rate</p>
                    <p className="font-medium text-success">₹{offer.offeredRate}/Q</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
          
          {acceptedOffers.length === 0 && (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No accepted orders yet</p>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          {rejectedOffers.map((offer) => (
            <Card key={offer.id} className="p-6 opacity-60">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{offer.buyerName}</h3>
                  <Badge variant="destructive" className="gap-1">
                    <X className="h-3 w-3" />
                    Rejected
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Residue</p>
                    <p className="font-medium">{offer.residueType}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Quantity</p>
                    <p className="font-medium">{offer.quantity} Q</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Rate</p>
                    <p className="font-medium">₹{offer.offeredRate}/Q</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
          
          {rejectedOffers.length === 0 && (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No order history</p>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Orders;
