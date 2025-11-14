import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Check, X } from "lucide-react";

const disputes = [
  {
    id: "DIS-001",
    orderid: "ORD-124",
    farmer: "Rajesh Kumar",
    buyer: "Green Energy Industries",
    issue: "Quality mismatch - Moisture content higher than agreed",
    date: "2024-11-10",
    status: "pending",
  },
  {
    id: "DIS-002",
    orderid: "ORD-156",
    farmer: "Suresh Patel",
    buyer: "Biomass Solutions",
    issue: "Payment delay - Buyer hasn't released payment after 7 days",
    date: "2024-11-08",
    status: "in-review",
  },
  {
    id: "DIS-003",
    orderid: "ORD-142",
    farmer: "Amit Singh",
    buyer: "Eco Materials",
    issue: "Quantity shortage - 10 quintals less than order",
    date: "2024-11-05",
    status: "resolved",
  },
];

const Disputes = () => {
  return (
    <DashboardLayout title="Payment Disputes">
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 text-center">
            <p className="text-3xl font-bold text-destructive">8</p>
            <p className="text-sm text-muted-foreground">Pending</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-3xl font-bold text-warning">5</p>
            <p className="text-sm text-muted-foreground">In Review</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-3xl font-bold text-success">142</p>
            <p className="text-sm text-muted-foreground">Resolved</p>
          </Card>
        </div>

        <div className="space-y-4">
          {disputes.map((dispute) => (
            <Card key={dispute.id} className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <AlertCircle className="h-5 w-5 text-destructive" />
                      <h3 className="font-semibold text-lg">{dispute.id}</h3>
                      <Badge
                        variant={
                          dispute.status === "resolved" ? "default" :
                          dispute.status === "in-review" ? "outline" : "destructive"
                        }
                        className={dispute.status === "resolved" ? "bg-success" : ""}
                      >
                        {dispute.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Order ID</p>
                        <p className="font-medium">{dispute.orderid}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Farmer</p>
                        <p className="font-medium">{dispute.farmer}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Buyer</p>
                        <p className="font-medium">{dispute.buyer}</p>
                      </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-1">Issue Description:</p>
                      <p className="text-sm text-muted-foreground">{dispute.issue}</p>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      Reported on: {dispute.date}
                    </p>
                  </div>
                </div>

                {dispute.status === "pending" && (
                  <div className="flex gap-2 pt-4 border-t">
                    <Button className="flex-1 gap-2">
                      <Check className="h-4 w-4" />
                      Review Dispute
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2">
                      <X className="h-4 w-4" />
                      Dismiss
                    </Button>
                  </div>
                )}

                {dispute.status === "in-review" && (
                  <div className="flex gap-2 pt-4 border-t">
                    <Button className="flex-1 gap-2 bg-success">
                      <Check className="h-4 w-4" />
                      Resolve in Favor of Farmer
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Resolve in Favor of Buyer
                    </Button>
                  </div>
                )}

                {dispute.status === "resolved" && (
                  <div className="pt-4 border-t">
                    <Badge className="bg-success gap-1">
                      <Check className="h-3 w-3" />
                      Resolved - Refund processed
                    </Badge>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Disputes;
