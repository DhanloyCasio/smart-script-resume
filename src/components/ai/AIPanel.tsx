import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { X, Wand2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AIPanelProps {
  onClose: () => void;
}

const AIPanel = ({ onClose }: AIPanelProps) => {
  const { toast } = useToast();
  const [inputText, setInputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImprove = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Input required",
        description: "Please enter some text to improve",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    // AI improvement logic will be implemented later
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Text improved!",
        description: "Your content has been enhanced with AI",
      });
    }, 2000);
  };

  const suggestions = [
    {
      title: "Improve Bullet Point",
      description: "Make it more impactful and quantifiable",
      action: "improve",
    },
    {
      title: "Expand Description",
      description: "Add more detail and context",
      action: "expand",
    },
    {
      title: "Make it Concise",
      description: "Shorten while keeping key points",
      action: "condense",
    },
  ];

  return (
    <div className="w-96 border-l bg-card/50 backdrop-blur-sm flex flex-col">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="font-semibold text-lg">AI Assistant</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">
            Text to Improve
          </label>
          <Textarea
            placeholder="Paste your bullet point or description here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={4}
            className="resize-none"
          />
          <Button
            className="w-full mt-2"
            onClick={handleImprove}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2"></div>
                Processing...
              </>
            ) : (
              <>
                <Wand2 className="h-4 w-4 mr-2" />
                Improve with AI
              </>
            )}
          </Button>
        </div>

        <div className="pt-4 border-t">
          <h3 className="text-sm font-medium mb-3">Quick Actions</h3>
          <div className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <Card
                key={index}
                className="p-3 cursor-pointer hover:bg-accent transition-colors"
              >
                <h4 className="font-medium text-sm mb-1">{suggestion.title}</h4>
                <p className="text-xs text-muted-foreground">
                  {suggestion.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-sm mb-1">Pro Tip</h4>
                <p className="text-xs text-muted-foreground">
                  Use action verbs and quantify achievements with numbers for stronger impact
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIPanel;
