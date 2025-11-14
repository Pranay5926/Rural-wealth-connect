import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, Mic, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const AddResidue = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [residueType, setResidueType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [moisture, setMoisture] = useState("");
  const [location, setLocation] = useState("");
  const [rate, setRate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const listing = {
      id: Date.now().toString(),
      residueType,
      quantity,
      moisture,
      location,
      rate,
      description,
      createdAt: new Date().toISOString(),
    };

    const existingListings = JSON.parse(localStorage.getItem("farmerListings") || "[]");
    localStorage.setItem("farmerListings", JSON.stringify([...existingListings, listing]));

    toast({
      title: "Residue Added Successfully",
      description: "Your listing is now visible to buyers",
    });

    navigate("/farmer/listings");
  };

  return (
    <DashboardLayout title="Add Residue">
      <Card className="max-w-2xl mx-auto p-6 space-y-6">
        <div className="bg-accent/10 border border-accent rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="bg-accent text-accent-foreground">
              AI Feature
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            AI Waste Type Detection - Upload image for automatic identification (Static UI)
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 h-20 flex flex-col gap-2">
            <Camera className="h-6 w-6" />
            <span className="text-sm">Upload Photo</span>
          </Button>
          <Button variant="outline" className="flex-1 h-20 flex flex-col gap-2">
            <Mic className="h-6 w-6" />
            <span className="text-sm">Voice Input</span>
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="residueType">Residue Type</Label>
            <Select value={residueType} onValueChange={setResidueType} required>
              <SelectTrigger>
                <SelectValue placeholder="Select residue type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rice-husk">Rice Husk</SelectItem>
                <SelectItem value="wheat-straw">Wheat Straw</SelectItem>
                <SelectItem value="paddy-straw">Paddy Straw</SelectItem>
                <SelectItem value="cow-dung">Cow Dung</SelectItem>
                <SelectItem value="groundnut-shells">Groundnut Shells</SelectItem>
                <SelectItem value="sugarcane-bagasse">Sugarcane Bagasse</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity (Quintals)</Label>
              <Input
                id="quantity"
                type="number"
                placeholder="100"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="moisture">Moisture (%)</Label>
              <Input
                id="moisture"
                type="number"
                placeholder="12"
                value={moisture}
                onChange={(e) => setMoisture(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              type="text"
              placeholder="Village, District, State"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rate">Rate (₹/Quintal)</Label>
            <Input
              id="rate"
              type="number"
              placeholder="500"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Additional details about the residue quality and availability"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full h-12" size="lg">
            <Send className="h-5 w-5 mr-2" />
            Submit Listing
          </Button>
        </form>
      </Card>
    </DashboardLayout>
  );
};

export default AddResidue;
