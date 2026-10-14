import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Check, AlertCircle, Info } from "lucide-react";

const notifications = [
  {
    id: "1",
    type: "alert",
    title: "System Maintenance Scheduled",
    message: "Demo notice: platform maintenance scheduled for Oct 20, 2026 from 2:00 AM to 4:00 AM",
    time: "2 hours ago",
    read: false,
  },
  {
    id: "2",
    type: "info",
    title: "New User Registration",
    message: "5 new farmers registered from Punjab region",
    time: "5 hours ago",
    read: false,
  },
  {
    id: "3",
    type: "success",
    title: "Monthly Target Achieved",
    message: "Platform crossed 2,000 trades milestone this month",
    time: "1 day ago",
    read: true,
  },
  {
    id: "4",
    type: "alert",
    title: "Dispute Requires Attention",
    message: "New payment dispute filed - Order #ORD-158",
    time: "1 day ago",
    read: false,
  },
  {
    id: "5",
    type: "info",
    title: "Weekly Report Generated",
    message: "Platform analytics demo report for week 42 is ready",
    time: "2 days ago",
    read: true,
  },
];

const Notifications = () => {
  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case "alert": return <AlertCircle className="h-5 w-5 text-destructive" />;
      case "success": return <Check className="h-5 w-5 text-success" />;
      default: return <Info className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <DashboardLayout title="Notifications">
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="h-6 w-6 text-primary" />
              <div>
                <h2 className="text-xl font-bold">All Notifications</h2>
                <p className="text-sm text-muted-foreground">
                  You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
            <Button variant="outline">Mark All as Read</Button>
          </div>
        </Card>

        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`p-6 ${!notification.read ? 'border-l-4 border-l-primary bg-primary/5' : ''}`}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">{getIcon(notification.type)}</div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold">{notification.title}</h3>
                      {!notification.read && (
                        <Badge variant="default" className="text-xs">New</Badge>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {notification.time}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {notification.message}
                  </p>

                  {!notification.read && (
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Check className="h-4 w-4" />
                      Mark as Read
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

export default Notifications;
