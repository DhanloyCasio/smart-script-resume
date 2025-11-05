import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { FileText, Download, Wand2, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ResumePreview from "@/components/resume/ResumePreview";
import EditorSidebar from "@/components/editor/EditorSidebar";
import AIPanel from "@/components/ai/AIPanel";

const Editor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const [resumeData, setResumeData] = useState<any>(null);
  const [showAIPanel, setShowAIPanel] = useState(false);

  useEffect(() => {
    // Load resume data
    const storedResume = sessionStorage.getItem("generatedResume");
    if (!storedResume) {
      navigate("/builder/start");
      return;
    }
    setResumeData(JSON.parse(storedResume));
  }, [id, navigate]);

  const handleSave = () => {
    toast({
      title: "Resume saved",
      description: "Your changes have been saved successfully",
    });
  };

  const handleExportPDF = () => {
    toast({
      title: "Exporting PDF",
      description: "Your resume is being prepared for download",
    });
    // PDF export logic will be implemented later
  };

  if (!resumeData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <span className="font-bold">ResumeAI</span>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <span className="text-sm text-muted-foreground">
              {resumeData.personalInfo.name}'s Resume
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard")}>
              Dashboard
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowAIPanel(!showAIPanel)}>
              <Wand2 className="h-4 w-4 mr-2" />
              AI Tools
            </Button>
            <Button variant="outline" size="sm" onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button size="sm" onClick={handleExportPDF}>
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Main Editor */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Sections */}
        <EditorSidebar resumeData={resumeData} onUpdate={setResumeData} />

        {/* Center - Resume Preview */}
        <div className="flex-1 overflow-auto bg-muted/30 p-8">
          <div className="max-w-4xl mx-auto">
            <ResumePreview data={resumeData} />
          </div>
        </div>

        {/* Right Panel - AI Tools */}
        {showAIPanel && (
          <AIPanel onClose={() => setShowAIPanel(false)} />
        )}
      </div>
    </div>
  );
};

export default Editor;
