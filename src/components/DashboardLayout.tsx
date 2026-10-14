import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, WifiOff, Globe, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  showBack?: boolean;
  showOfflineIndicator?: boolean;
}

const DashboardLayout = ({ 
  children, 
  title, 
  showBack = true,
  showOfflineIndicator = false 
}: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const language = localStorage.getItem("selectedLanguage") || "en";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBack && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}
            <h1 className="text-xl md:text-2xl font-bold text-foreground">
              {title}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="outline" className="hidden sm:inline-flex text-xs">
              Demo data · 14 Oct 2026
            </Badge>
            {showOfflineIndicator && (
              <Badge variant="outline" className="gap-1">
                <WifiOff className="h-3 w-3" />
                Offline Mode
              </Badge>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/onboarding")}
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
