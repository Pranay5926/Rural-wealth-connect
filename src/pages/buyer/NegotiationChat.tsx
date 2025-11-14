import { useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Phone, Video } from "lucide-react";

const NegotiationChat = () => {
  const { listingId } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: "1", sender: "farmer", text: "Hello! I have 100 quintals of rice husk available.", time: "10:30 AM" },
    { id: "2", sender: "buyer", text: "Great! What's your asking price?", time: "10:32 AM" },
    { id: "3", sender: "farmer", text: "₹520 per quintal. The moisture content is 12%.", time: "10:33 AM" },
    { id: "4", sender: "buyer", text: "Can you do ₹500 per quintal if I buy the whole lot?", time: "10:35 AM" },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: Date.now().toString(),
        sender: "buyer",
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setMessage("");
    }
  };

  return (
    <DashboardLayout title="Negotiation Chat">
      <div className="max-w-4xl mx-auto space-y-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">RK</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Rajesh Kumar</h3>
                <Badge variant="outline" className="text-xs">Farmer</Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="outline">
                <Phone className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Video className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-4 h-[500px] flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "buyer" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    msg.sender === "buyer"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.sender === "buyer" ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 pt-4 border-t">
            <Input
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        <Card className="p-4 bg-accent/10">
          <p className="text-sm text-muted-foreground text-center">
            <Badge variant="outline" className="bg-accent text-accent-foreground mr-2">
              Static UI
            </Badge>
            Real-time chat feature - Messages are for demonstration only
          </p>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default NegotiationChat;
