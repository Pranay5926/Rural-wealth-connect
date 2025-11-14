import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, Download, Wallet } from "lucide-react";

const paymentTransactions = [
  {
    id: "TXN001",
    buyerName: "Green Energy Industries",
    amount: "52000",
    date: "2024-11-10",
    status: "completed",
    mode: "UPI",
  },
  {
    id: "TXN002",
    buyerName: "Biomass Solutions Ltd",
    amount: "76000",
    date: "2024-11-08",
    status: "completed",
    mode: "Bank Transfer",
  },
  {
    id: "TXN003",
    buyerName: "Eco Materials Corp",
    amount: "34500",
    date: "2024-11-12",
    status: "pending",
    mode: "UPI",
  },
];

const PaymentStatus = () => {
  const completed = paymentTransactions.filter(t => t.status === "completed");
  const pending = paymentTransactions.filter(t => t.status === "pending");
  
  const totalEarnings = completed.reduce((sum, t) => sum + parseInt(t.amount), 0);

  return (
    <DashboardLayout title="Payment Status">
      <div className="space-y-6">
        <Card className="p-6 bg-gradient-to-r from-success to-accent text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90 mb-1">Total Earnings</p>
              <h2 className="text-4xl font-bold">₹{totalEarnings.toLocaleString()}</h2>
            </div>
            <Wallet className="h-16 w-16 opacity-80" />
          </div>
        </Card>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">
              All ({paymentTransactions.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({completed.length})
            </TabsTrigger>
            <TabsTrigger value="pending">
              Pending ({pending.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {paymentTransactions.map((txn) => (
              <Card key={txn.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-semibold">{txn.buyerName}</h3>
                      <Badge 
                        variant={txn.status === "completed" ? "default" : "outline"}
                        className={txn.status === "completed" ? "bg-success gap-1" : "gap-1"}
                      >
                        {txn.status === "completed" ? (
                          <CheckCircle className="h-3 w-3" />
                        ) : (
                          <Clock className="h-3 w-3" />
                        )}
                        {txn.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-bold text-lg text-success">₹{parseInt(txn.amount).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Date</p>
                        <p className="font-medium">{txn.date}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Mode</p>
                        <p className="font-medium">{txn.mode}</p>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground">Transaction ID: {txn.id}</p>
                  </div>

                  {txn.status === "completed" && (
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completed.map((txn) => (
              <Card key={txn.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">{txn.buyerName}</h3>
                      <Badge className="bg-success gap-1">
                        <CheckCircle className="h-3 w-3" />
                        Completed
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-bold text-lg text-success">₹{parseInt(txn.amount).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Date</p>
                        <p className="font-medium">{txn.date}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Mode</p>
                        <p className="font-medium">{txn.mode}</p>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            {pending.map((txn) => (
              <Card key={txn.id} className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{txn.buyerName}</h3>
                    <Badge variant="outline" className="gap-1">
                      <Clock className="h-3 w-3" />
                      Pending
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Amount</p>
                      <p className="font-bold text-lg text-warning">₹{parseInt(txn.amount).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Date</p>
                      <p className="font-medium">{txn.date}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Mode</p>
                      <p className="font-medium">{txn.mode}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
            
            {pending.length === 0 && (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground">No pending payments</p>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default PaymentStatus;
