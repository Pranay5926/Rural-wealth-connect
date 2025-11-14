import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Listing {
  id: string;
  residueType: string;
  quantity: string;
  moisture: string;
  location: string;
  rate: string;
  description: string;
  createdAt: string;
}

const MyListings = () => {
  const { toast } = useToast();
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const savedListings = JSON.parse(localStorage.getItem("farmerListings") || "[]");
    setListings(savedListings);
  }, []);

  const handleDelete = (id: string) => {
    const updatedListings = listings.filter(listing => listing.id !== id);
    localStorage.setItem("farmerListings", JSON.stringify(updatedListings));
    setListings(updatedListings);
    
    toast({
      title: "Listing Deleted",
      description: "Your listing has been removed",
    });
  };

  return (
    <DashboardLayout title="My Listings">
      <div className="space-y-4">
        {listings.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground text-lg">No listings yet</p>
            <p className="text-sm text-muted-foreground mt-2">Add your first residue listing to get started</p>
          </Card>
        ) : (
          listings.map((listing) => (
            <Card key={listing.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl font-semibold capitalize">
                      {listing.residueType.replace("-", " ")}
                    </h3>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Quantity</p>
                      <p className="font-medium">{listing.quantity} Q</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Rate</p>
                      <p className="font-medium">₹{listing.rate}/Q</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Moisture</p>
                      <p className="font-medium">{listing.moisture}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Location</p>
                      <p className="font-medium">{listing.location}</p>
                    </div>
                  </div>

                  {listing.description && (
                    <p className="text-sm text-muted-foreground">{listing.description}</p>
                  )}
                </div>

                <div className="flex md:flex-col gap-2">
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="icon"
                    onClick={() => handleDelete(listing.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyListings;
