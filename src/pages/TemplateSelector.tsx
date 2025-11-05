import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { FileText, Check } from "lucide-react";

const templates = [
  {
    id: "modern",
    name: "Modern Professional",
    description: "Clean and contemporary design perfect for tech and creative roles",
    preview: "bg-gradient-to-br from-blue-50 to-white",
  },
  {
    id: "classic",
    name: "Classic Executive",
    description: "Traditional layout ideal for corporate and senior positions",
    preview: "bg-gradient-to-br from-gray-50 to-white",
  },
  {
    id: "creative",
    name: "Creative Bold",
    description: "Eye-catching design for creative and design professionals",
    preview: "bg-gradient-to-br from-purple-50 to-white",
  },
  {
    id: "minimal",
    name: "Minimal Clean",
    description: "Simple and elegant, works great for any industry",
    preview: "bg-gradient-to-br from-green-50 to-white",
  },
];

const TemplateSelector = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  const handleContinue = () => {
    sessionStorage.setItem("selectedTemplate", selectedTemplate);
    navigate("/editor/new");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ResumeAI</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Progress indicator */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <div className="flex items-center gap-2 opacity-50">
              <div className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-semibold">
                ✓
              </div>
              <span className="text-muted-foreground">Your Info</span>
            </div>
            <div className="h-px w-12 bg-border"></div>
            <div className="flex items-center gap-2 opacity-50">
              <div className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-semibold">
                ✓
              </div>
              <span className="text-muted-foreground">Generate</span>
            </div>
            <div className="h-px w-12 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                3
              </div>
              <span className="font-medium">Template</span>
            </div>
          </div>

          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Template</h1>
            <p className="text-muted-foreground text-lg">
              Select a professional design that matches your style
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {templates.map((template) => (
              <Card
                key={template.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedTemplate === template.id
                    ? "ring-2 ring-primary shadow-lg"
                    : ""
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className={`h-64 rounded-t-lg ${template.preview} p-8 relative`}>
                  {selectedTemplate === template.id && (
                    <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Check className="h-5 w-5" />
                    </div>
                  )}
                  {/* Template preview placeholder */}
                  <div className="space-y-2">
                    <div className="h-4 bg-foreground/20 rounded w-3/4"></div>
                    <div className="h-3 bg-foreground/10 rounded w-1/2"></div>
                    <div className="mt-6 space-y-1">
                      <div className="h-2 bg-foreground/10 rounded"></div>
                      <div className="h-2 bg-foreground/10 rounded w-5/6"></div>
                      <div className="h-2 bg-foreground/10 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button size="lg" onClick={handleContinue} className="px-12">
              Start Editing Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
