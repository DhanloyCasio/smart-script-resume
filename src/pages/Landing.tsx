import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, FileText, Wand2, Download } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/30 to-background">
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

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground mb-6 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Powered by Advanced AI
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Build Your Perfect Resume in Minutes
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            AI-powered resume builder with smart templates, instant optimization, and professional designs that get you hired.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={() => navigate("/builder/start")}
            >
              Start Building Free
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => navigate("/templates")}
            >
              View Templates
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 bg-card/30 backdrop-blur-sm rounded-3xl mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Everything You Need to Stand Out
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Wand2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Generation</h3>
              <p className="text-muted-foreground">
                Let AI write your resume based on your experience, skills, and career goals. Get professional content in seconds.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Templates</h3>
              <p className="text-muted-foreground">
                Choose from professionally designed, ATS-friendly templates. Customize colors, fonts, and layouts instantly.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Export</h3>
              <p className="text-muted-foreground">
                Download your resume as a high-quality PDF instantly. Perfect formatting guaranteed, ready to send.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Land Your Dream Job?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of professionals who have created standout resumes with ResumeAI
          </p>
          <Button 
            size="lg"
            className="text-lg px-8 py-6"
            onClick={() => navigate("/builder/start")}
          >
            Get Started Now
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-20">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2024 ResumeAI. Build better resumes with AI.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
