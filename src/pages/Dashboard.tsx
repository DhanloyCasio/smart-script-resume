import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Plus, FileText, Clock } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  // Mock data - will be replaced with real data later
  const recentResumes = [
    { id: 1, title: "Software Engineer Resume", updatedAt: "2 hours ago" },
    { id: 2, title: "Product Manager Resume", updatedAt: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ResumeAI</span>
          </div>
          <Button variant="ghost" onClick={() => navigate("/")}>
            Home
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Your Resumes</h1>
            <p className="text-muted-foreground text-lg">
              Create, manage, and export your professional resumes
            </p>
          </div>

          {/* Create New Resume Card */}
          <Card 
            className="p-8 mb-8 border-2 border-dashed border-primary/50 hover:border-primary hover:bg-accent/50 transition-all cursor-pointer group"
            onClick={() => navigate("/builder/start")}
          >
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Plus className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-1">Create New Resume</h2>
                <p className="text-muted-foreground">Start building your next professional resume with AI</p>
              </div>
            </div>
          </Card>

          {/* Recent Resumes */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Clock className="h-6 w-6" />
              Recent Resumes
            </h2>
            
            {recentResumes.length === 0 ? (
              <Card className="p-12 text-center">
                <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-lg text-muted-foreground mb-4">No resumes yet</p>
                <Button onClick={() => navigate("/builder/start")}>
                  Create Your First Resume
                </Button>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {recentResumes.map((resume) => (
                  <Card 
                    key={resume.id}
                    className="p-6 hover:shadow-lg transition-all cursor-pointer group"
                    onClick={() => navigate(`/editor/${resume.id}`)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {resume.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Updated {resume.updatedAt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
