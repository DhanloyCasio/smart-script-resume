import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BuilderStart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    yearsExperience: "",
    skills: "",
    careerGoals: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.jobTitle) {
      toast({
        title: "Missing information",
        description: "Please fill in at least your name and desired job title",
        variant: "destructive",
      });
      return;
    }

    // Store data in sessionStorage for now
    sessionStorage.setItem("resumeData", JSON.stringify(formData));
    navigate("/builder/generate");
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
          <Button variant="ghost" onClick={() => navigate("/dashboard")}>
            Dashboard
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress indicator */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                1
              </div>
              <span className="font-medium">Your Info</span>
            </div>
            <div className="h-px w-12 bg-border"></div>
            <div className="flex items-center gap-2 opacity-50">
              <div className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-semibold">
                2
              </div>
              <span className="text-muted-foreground">Generate</span>
            </div>
            <div className="h-px w-12 bg-border"></div>
            <div className="flex items-center gap-2 opacity-50">
              <div className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-semibold">
                3
              </div>
              <span className="text-muted-foreground">Template</span>
            </div>
          </div>

          <Card className="p-8 md:p-12 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Tell Us About Yourself</h1>
            <p className="text-muted-foreground mb-8">
              We'll use this information to craft your perfect resume with AI
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobTitle">Target Job Title *</Label>
                <Input
                  id="jobTitle"
                  placeholder="Senior Software Engineer"
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="yearsExperience">Years of Experience</Label>
                <Input
                  id="yearsExperience"
                  type="number"
                  placeholder="5"
                  value={formData.yearsExperience}
                  onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Key Skills</Label>
                <Textarea
                  id="skills"
                  placeholder="React, TypeScript, Node.js, Python, AWS..."
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  rows={3}
                />
                <p className="text-sm text-muted-foreground">
                  List your top skills separated by commas
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="careerGoals">Career Goals & Experience Highlights</Label>
                <Textarea
                  id="careerGoals"
                  placeholder="I'm looking to transition into a leadership role where I can mentor junior developers and drive architectural decisions..."
                  value={formData.careerGoals}
                  onChange={(e) => setFormData({ ...formData, careerGoals: e.target.value })}
                  rows={4}
                />
                <p className="text-sm text-muted-foreground">
                  Share what you want to achieve and key accomplishments
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Continue to AI Generation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuilderStart;
