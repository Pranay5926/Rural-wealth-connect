import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Phone } from "lucide-react";

const listings = [
  { id: "1", farmer: "Rajesh Kumar", residueType: "Rice Husk", quantity: "100", rate: "520", location: "Punjab", moisture: "12%" },
  { id: "2", farmer: "Suresh Patel", residueType: "Wheat Straw", quantity: "200", rate: "380", location: "Haryana", moisture: "10%" },
  { id: "3", farmer: "Amit Singh", residueType: "Paddy Straw", quantity: "150", rate: "350", location: "Punjab", moisture: "11%" },
  { id: "4", farmer: "Ramesh Yadav", residueType: "Cow Dung", quantity: "80", rate: "180", location: "UP", moisture: "15%" },
];

const SearchResidues = () => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchPrice, setSearchPrice] = useState("");

  const filteredListings = listings.filter(listing => {
    if (searchType && !listing.residueType.toLowerCase().includes(searchType.toLowerCase())) return false;
    if (searchLocation && !listing.location.toLowerCase().includes(searchLocation.toLowerCase())) return false;
    if (searchPrice && parseInt(listing.rate) > parseInt(searchPrice)) return false;
    return true;
  });

  return (
    <DashboardLayout title="Search Residues">
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Search Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Select value={searchType} onValueChange={setSearchType}>
                <SelectTrigger>
                  <SelectValue placeholder="Residue Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Types</SelectItem>
                  <SelectItem value="rice">Rice Husk</SelectItem>
                  <SelectItem value="wheat">Wheat Straw</SelectItem>
                  <SelectItem value="paddy">Paddy Straw</SelectItem>
                  <SelectItem value="dung">Cow Dung</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Input
                placeholder="Location"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
            <div>
              <Input
                type="number"
                placeholder="Max Price (₹/Q)"
                value={searchPrice}
                onChange={(e) => setSearchPrice(e.target.value)}
              />
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          {filteredListings.map((listing) => (
            <Card key={listing.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl font-semibold">{listing.residueType}</h3>
                    <Badge variant="outline">Available</Badge>
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
                      <p className="font-medium text-primary">₹{listing.rate}/Q</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Moisture</p>
                      <p className="font-medium">{listing.moisture}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{listing.location}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button onClick={() => navigate(`/buyer/chat/${listing.id}`)} className="gap-2">
                    <Phone className="h-4 w-4" />
                    Contact Farmer
                  </Button>
                  <Button variant="outline">View Details</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <Card className="p-12 text-center">
            <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No residues match your search criteria</p>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SearchResidues;
