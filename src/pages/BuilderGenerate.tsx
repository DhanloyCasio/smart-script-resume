import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, FileText, Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BuilderGenerate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if we have form data
    const storedData = sessionStorage.getItem("resumeData");
    if (!storedData) {
      navigate("/builder/start");
      return;
    }

    // Simulate AI generation progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [navigate]);

  const handleContinue = () => {
    // For now, generate a sample resume
    const resumeData = JSON.parse(sessionStorage.getItem("resumeData") || "{}");
    
    const generatedResume = {
      personalInfo: {
        name: resumeData.fullName,
        title: resumeData.jobTitle,
        email: "john.doe@email.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
      },
      summary: `${resumeData.careerGoals || `Experienced ${resumeData.jobTitle} with ${resumeData.yearsExperience || "5+"} years of expertise. Passionate about building scalable solutions and mentoring teams.`}`,
      experience: [
        {
          title: resumeData.jobTitle || "Software Engineer",
          company: "Tech Company Inc.",
          period: "2020 - Present",
          achievements: [
            "Led development of key features serving 1M+ users",
            "Improved system performance by 40% through optimization",
            "Mentored 5 junior developers and conducted code reviews",
          ],
        },
        {
          title: "Software Developer",
          company: "Startup Solutions",
          period: "2018 - 2020",
          achievements: [
            "Built responsive web applications using modern frameworks",
            "Collaborated with cross-functional teams on product launches",
            "Implemented CI/CD pipelines reducing deployment time by 60%",
          ],
        },
      ],
      skills: resumeData.skills ? resumeData.skills.split(",").map((s: string) => s.trim()) : [
        "React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "CI/CD"
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          school: "University Name",
          period: "2014 - 2018",
        },
      ],
    };

    sessionStorage.setItem("generatedResume", JSON.stringify(generatedResume));
    navigate("/builder/template");
  };

  const stages = [
    "Analyzing your experience...",
    "Crafting professional summary...",
    "Generating achievement bullets...",
    "Optimizing for ATS systems...",
    "Finalizing your resume...",
  ];

  const currentStage = Math.min(Math.floor(progress / 20), stages.length - 1);

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
        <div className="max-w-3xl mx-auto">
          {/* Progress indicator */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <div className="flex items-center gap-2 opacity-50">
              <div className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-semibold">
                ✓
              </div>
              <span className="text-muted-foreground">Your Info</span>
            </div>
            <div className="h-px w-12 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                2
              </div>
              <span className="font-medium">Generate</span>
            </div>
            <div className="h-px w-12 bg-border"></div>
            <div className="flex items-center gap-2 opacity-50">
              <div className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-semibold">
                3
              </div>
              <span className="text-muted-foreground">Template</span>
            </div>
          </div>

          <Card className="p-8 md:p-12 text-center animate-fade-in">
            {isGenerating ? (
              <>
                <div className="mb-6">
                  <Sparkles className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse" />
                  <h1 className="text-3xl font-bold mb-2">AI is Building Your Resume</h1>
                  <p className="text-muted-foreground">
                    This usually takes just a few seconds...
                  </p>
                </div>

                <div className="mb-6">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{progress}% Complete</p>
                </div>

                <div className="space-y-2">
                  {stages.map((stage, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                        index === currentStage
                          ? "bg-accent text-accent-foreground"
                          : index < currentStage
                          ? "text-muted-foreground"
                          : "text-muted-foreground opacity-50"
                      }`}
                    >
                      {index < currentStage ? (
                        <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs">
                          ✓
                        </div>
                      ) : index === currentStage ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-current"></div>
                      )}
                      <span>{stage}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h1 className="text-3xl font-bold mb-2">Your Resume is Ready!</h1>
                  <p className="text-muted-foreground">
                    AI has crafted a professional resume tailored to your experience
                  </p>
                </div>

                <Button size="lg" onClick={handleContinue} className="w-full">
                  Choose a Template
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuilderGenerate;
