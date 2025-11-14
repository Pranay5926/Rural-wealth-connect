import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PostRequirement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [material, setMaterial] = useState("");
  const [quantity, setQuantity] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [quality, setQuality] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Requirement Posted",
      description: "Farmers will be notified about your requirement",
    });
    
    navigate("/buyer/orders");
  };

  return (
    <DashboardLayout title="Post Requirement">
      <Card className="max-w-2xl mx-auto p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Post Your Material Requirement</h2>
          <p className="text-muted-foreground">
            Let farmers know what you're looking for
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="material">Material Needed</Label>
            <Select value={material} onValueChange={setMaterial} required>
              <SelectTrigger>
                <SelectValue placeholder="Select material type" />
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
              <Label htmlFor="quantity">Quantity Required (Quintals)</Label>
              <Input
                id="quantity"
                type="number"
                placeholder="500"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxPrice">Maximum Price (₹/Quintal)</Label>
              <Input
                id="maxPrice"
                type="number"
                placeholder="550"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quality">Quality Requirements</Label>
            <Select value={quality} onValueChange={setQuality} required>
              <SelectTrigger>
                <SelectValue placeholder="Select quality standard" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="premium">Premium (Moisture &lt; 10%)</SelectItem>
                <SelectItem value="standard">Standard (Moisture &lt; 15%)</SelectItem>
                <SelectItem value="basic">Basic (Any moisture level)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Preferred Location</Label>
            <Input
              id="location"
              type="text"
              placeholder="State or District"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="details">Additional Details</Label>
            <Textarea
              id="details"
              placeholder="Specify delivery requirements, payment terms, or any other details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full h-12" size="lg">
            <Send className="h-5 w-5 mr-2" />
            Post Requirement
          </Button>
        </form>
      </Card>
    </DashboardLayout>
  );
};

export default PostRequirement;
