import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sprout, Leaf, TrendingUp, Users, ArrowRight } from "lucide-react";

const FinalBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-accent to-earth-green flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
        <div className="space-y-6">
          <div className="flex justify-center items-center gap-3">
            <Sprout className="h-20 w-20 text-primary-foreground animate-bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Beyond Grains
          </h1>
          
          <div className="h-1 w-32 bg-primary-foreground/50 mx-auto rounded-full"></div>
          
          <p className="text-3xl md:text-4xl text-primary-foreground/95 font-medium max-w-2xl mx-auto">
            Turning Rural Waste Into Rural Wealth
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
            <Leaf className="h-10 w-10 text-primary-foreground mx-auto mb-3" />
            <p className="text-primary-foreground font-semibold">Eco-Friendly</p>
            <p className="text-primary-foreground/70 text-sm mt-1">Zero Burning</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
            <TrendingUp className="h-10 w-10 text-primary-foreground mx-auto mb-3" />
            <p className="text-primary-foreground font-semibold">Fair Pricing</p>
            <p className="text-primary-foreground/70 text-sm mt-1">Real Value</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
            <Users className="h-10 w-10 text-primary-foreground mx-auto mb-3" />
            <p className="text-primary-foreground font-semibold">Direct Trade</p>
            <p className="text-primary-foreground/70 text-sm mt-1">No Middlemen</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
            <Sprout className="h-10 w-10 text-primary-foreground mx-auto mb-3" />
            <p className="text-primary-foreground font-semibold">Sustainable</p>
            <p className="text-primary-foreground/70 text-sm mt-1">Future Ready</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">
            Join the Revolution
          </h2>
          <p className="text-primary-foreground/90 mb-6 leading-relaxed">
            Empowering farmers, connecting industries, and creating a sustainable future. 
            Together, we're transforming agricultural waste into valuable resources and rural prosperity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/")}
              size="lg"
              variant="secondary"
              className="gap-2 text-lg px-8 h-14"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              onClick={() => navigate("/login")}
              size="lg"
              variant="outline"
              className="gap-2 text-lg px-8 h-14 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Sign In
            </Button>
          </div>
        </div>

        <div className="text-primary-foreground/70 text-sm">
          <p>© 2026 Beyond Grains. Transforming Agriculture, Enriching Lives.</p>
        </div>
      </div>
    </div>
  );
};

export default FinalBanner;
