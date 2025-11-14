import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Trash2 } from "lucide-react";

const listings = [
  { id: "1", farmer: "Rajesh Kumar", residue: "Rice Husk", quantity: "100", rate: "520", location: "Punjab", status: "active" },
  { id: "2", farmer: "Suresh Patel", residue: "Wheat Straw", quantity: "200", rate: "380", location: "Haryana", status: "active" },
  { id: "3", farmer: "Amit Singh", residue: "Paddy Straw", quantity: "150", rate: "350", location: "Punjab", status: "sold" },
  { id: "4", farmer: "Ramesh Yadav", residue: "Cow Dung", quantity: "80", rate: "180", location: "UP", status: "active" },
];

const ListingsManagement = () => {
  return (
    <DashboardLayout title="Listings Management">
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 text-center">
            <p className="text-3xl font-bold text-primary">458</p>
            <p className="text-sm text-muted-foreground">Active Listings</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-3xl font-bold text-success">1,698</p>
            <p className="text-sm text-muted-foreground">Sold</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-3xl font-bold text-warning">42</p>
            <p className="text-sm text-muted-foreground">Pending Review</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-3xl font-bold text-muted-foreground">2,198</p>
            <p className="text-sm text-muted-foreground">Total</p>
          </Card>
        </div>

        <div className="space-y-4">
          {listings.map((listing) => (
            <Card key={listing.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-semibold">{listing.residue}</h3>
                    <Badge variant={listing.status === "active" ? "default" : "outline"}>
                      {listing.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Farmer</p>
                      <p className="font-medium">{listing.farmer}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Quantity</p>
                      <p className="font-medium">{listing.quantity} Q</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Rate</p>
                      <p className="font-medium">₹{listing.rate}/Q</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Location</p>
                      <p className="font-medium">{listing.location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ListingsManagement;
