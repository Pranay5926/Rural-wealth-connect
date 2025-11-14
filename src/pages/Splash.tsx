import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sprout, Leaf, TrendingUp, Users } from "lucide-react";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-accent flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="flex justify-center items-center gap-2">
          <Sprout className="h-16 w-16 text-primary-foreground animate-bounce" />
          <h1 className="text-5xl font-bold text-primary-foreground">
            Beyond Grains
          </h1>
        </div>
        
        <p className="text-xl text-primary-foreground/90 max-w-md mx-auto font-medium">
          Transforming agricultural residues into rural wealth
        </p>

        <div className="grid grid-cols-2 gap-6 mt-12 max-w-md mx-auto">
          <div className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <Leaf className="h-8 w-8 text-primary-foreground" />
            <span className="text-sm text-primary-foreground font-medium text-center">Eco-Friendly</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <TrendingUp className="h-8 w-8 text-primary-foreground" />
            <span className="text-sm text-primary-foreground font-medium text-center">Fair Pricing</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <Users className="h-8 w-8 text-primary-foreground" />
            <span className="text-sm text-primary-foreground font-medium text-center">Direct Trade</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <Sprout className="h-8 w-8 text-primary-foreground" />
            <span className="text-sm text-primary-foreground font-medium text-center">Zero Burning</span>
          </div>
        </div>

        <div className="flex gap-2 mt-8">
          <div className="h-2 w-2 bg-primary-foreground/50 rounded-full animate-pulse" />
          <div className="h-2 w-2 bg-primary-foreground/70 rounded-full animate-pulse delay-100" />
          <div className="h-2 w-2 bg-primary-foreground rounded-full animate-pulse delay-200" />
        </div>
      </div>
    </div>
  );
};

export default Splash;
