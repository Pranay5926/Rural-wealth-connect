import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Plus, Edit, CheckCircle, AlertCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const vehicles = [
  { id: "1", number: "PB 01 AB 1234", type: "Mini Truck", capacity: "2 Tons", status: "available" },
  { id: "2", number: "HR 26 CD 5678", type: "Tractor Trolley", capacity: "3 Tons", status: "in-use" },
  { id: "3", number: "PB 02 EF 9012", type: "Large Truck", capacity: "5 Tons", status: "available" },
  { id: "4", number: "UP 14 GH 3456", type: "Mini Truck", capacity: "2 Tons", status: "maintenance" },
];

const VehicleManagement = () => {
  const [vehicleList, setVehicleList] = useState(vehicles);

  return (
    <DashboardLayout title="Vehicle Management">
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold">Fleet Overview</h2>
              <p className="text-sm text-muted-foreground">
                Manage your vehicle availability
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Vehicle
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Vehicle</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label>Vehicle Number</Label>
                    <Input placeholder="PB 01 AB 1234" />
                  </div>
                  <div className="space-y-2">
                    <Label>Vehicle Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mini-truck">Mini Truck</SelectItem>
                        <SelectItem value="tractor">Tractor Trolley</SelectItem>
                        <SelectItem value="large-truck">Large Truck</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Capacity</Label>
                    <Input placeholder="2 Tons" />
                  </div>
                  <Button className="w-full">Add Vehicle</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-success/10 rounded-lg">
              <p className="text-3xl font-bold text-success">
                {vehicleList.filter(v => v.status === "available").length}
              </p>
              <p className="text-sm text-muted-foreground">Available</p>
            </div>
            <div className="text-center p-4 bg-warning/10 rounded-lg">
              <p className="text-3xl font-bold text-warning">
                {vehicleList.filter(v => v.status === "in-use").length}
              </p>
              <p className="text-sm text-muted-foreground">In Use</p>
            </div>
            <div className="text-center p-4 bg-destructive/10 rounded-lg">
              <p className="text-3xl font-bold text-destructive">
                {vehicleList.filter(v => v.status === "maintenance").length}
              </p>
              <p className="text-sm text-muted-foreground">Maintenance</p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vehicleList.map((vehicle) => (
            <Card key={vehicle.id} className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{vehicle.number}</h3>
                      <p className="text-sm text-muted-foreground">{vehicle.type}</p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      vehicle.status === "available" ? "default" :
                      vehicle.status === "in-use" ? "outline" : "destructive"
                    }
                    className={
                      vehicle.status === "available" ? "bg-success gap-1" :
                      vehicle.status === "in-use" ? "gap-1" : "gap-1"
                    }
                  >
                    {vehicle.status === "available" && <CheckCircle className="h-3 w-3" />}
                    {vehicle.status === "maintenance" && <AlertCircle className="h-3 w-3" />}
                    {vehicle.status.replace("-", " ")}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Capacity</p>
                    <p className="font-medium">{vehicle.capacity}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Type</p>
                    <p className="font-medium">{vehicle.type}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-2">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  {vehicle.status === "available" && (
                    <Button size="sm" className="flex-1">
                      Assign
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VehicleManagement;
