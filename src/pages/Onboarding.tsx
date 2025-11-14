import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleContinue = () => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <Globe className="h-12 w-12 text-primary mx-auto" />
          <h2 className="text-2xl font-bold text-foreground">
            Choose Your Language
          </h2>
          <p className="text-muted-foreground">
            Select your preferred language to continue
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant={selectedLanguage === lang.code ? "default" : "outline"}
              className="h-16 flex flex-col items-center justify-center gap-1"
              onClick={() => setSelectedLanguage(lang.code)}
            >
              <span className="font-semibold">{lang.nativeName}</span>
              <span className="text-xs opacity-70">{lang.name}</span>
            </Button>
          ))}
        </div>

        <Button 
          onClick={handleContinue} 
          className="w-full"
          size="lg"
        >
          Continue
        </Button>
      </Card>
    </div>
  );
};

export default Onboarding;
