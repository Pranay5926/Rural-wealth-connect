import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Camera, CheckCircle, FileSignature } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DeliveryConfirmation = () => {
  const navigate = useNavigate();
  const { pickupId } = useParams();
  const { toast } = useToast();
  const [receiverName, setReceiverName] = useState("");
  const [notes, setNotes] = useState("");

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Delivery Confirmed",
      description: "Payment will be processed shortly",
    });
    
    navigate("/logistics/dashboard");
  };

  return (
    <DashboardLayout title="Delivery Confirmation">
      <Card className="max-w-2xl mx-auto p-6 space-y-6">
        <div className="flex items-center gap-3">
          <CheckCircle className="h-6 w-6 text-success" />
          <div>
            <h2 className="text-xl font-bold">Confirm Delivery</h2>
            <p className="text-sm text-muted-foreground">Pickup ID: #{pickupId}</p>
          </div>
        </div>

        <Card className="p-4 bg-muted/50">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Material:</span>
              <span className="font-medium">Rice Husk</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Quantity:</span>
              <span className="font-medium">100 Quintals</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">From:</span>
              <span className="font-medium">Rajesh Kumar</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">To:</span>
              <span className="font-medium">Green Energy Industries</span>
            </div>
          </div>
        </Card>

        <form onSubmit={handleConfirm} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="receiverName">Receiver Name</Label>
            <Input
              id="receiverName"
              placeholder="Enter receiver's name"
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Proof of Delivery</Label>
            <div className="grid grid-cols-2 gap-3">
              <Button type="button" variant="outline" className="h-20 flex flex-col gap-2">
                <Camera className="h-6 w-6" />
                <span className="text-sm">Upload Photo</span>
              </Button>
              <Button type="button" variant="outline" className="h-20 flex flex-col gap-2">
                <FileSignature className="h-6 w-6" />
                <span className="text-sm">Digital Signature</span>
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Delivery Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Any additional notes about the delivery"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full h-12" size="lg">
            <CheckCircle className="h-5 w-5 mr-2" />
            Confirm Delivery
          </Button>
        </form>
      </Card>
    </DashboardLayout>
  );
};

export default DeliveryConfirmation;
