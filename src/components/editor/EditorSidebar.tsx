import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  User,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Plus,
} from "lucide-react";

interface EditorSidebarProps {
  resumeData: any;
  onUpdate: (data: any) => void;
}

const EditorSidebar = ({ resumeData, onUpdate }: EditorSidebarProps) => {
  const sections = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "summary", label: "Summary", icon: FileText },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Award },
    { id: "education", label: "Education", icon: GraduationCap },
  ];

  return (
    <div className="w-64 border-r bg-card/50 backdrop-blur-sm flex flex-col">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-lg mb-2">Resume Sections</h2>
        <p className="text-sm text-muted-foreground">
          Click to edit each section
        </p>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Button
                key={section.id}
                variant="ghost"
                className="w-full justify-start"
              >
                <Icon className="h-4 w-4 mr-2" />
                {section.label}
              </Button>
            );
          })}
        </div>

        <div className="mt-6 pt-6 border-t">
          <Button variant="outline" size="sm" className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Section
          </Button>
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="text-xs text-muted-foreground">
          <p className="mb-1">Auto-saved</p>
          <p>Last edited: Just now</p>
        </div>
      </div>
    </div>
  );
};

export default EditorSidebar;
