import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

interface ResumePreviewProps {
  data: {
    personalInfo: {
      name: string;
      title: string;
      email: string;
      phone: string;
      location: string;
    };
    summary: string;
    experience: Array<{
      title: string;
      company: string;
      period: string;
      achievements: string[];
    }>;
    skills: string[];
    education: Array<{
      degree: string;
      school: string;
      period: string;
    }>;
  };
}

const ResumePreview = ({ data }: ResumePreviewProps) => {
  return (
    <Card className="bg-white p-12 shadow-lg" style={{ minHeight: "297mm" }}>
      {/* Header */}
      <div className="mb-8 pb-6 border-b-2 border-primary/20">
        <h1 className="text-4xl font-bold text-foreground mb-2">
          {data.personalInfo.name}
        </h1>
        <p className="text-xl text-primary font-medium mb-4">
          {data.personalInfo.title}
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            {data.personalInfo.email}
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            {data.personalInfo.phone}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {data.personalInfo.location}
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">
          Professional Summary
        </h2>
        <p className="text-foreground/80 leading-relaxed">
          {data.summary}
        </p>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">
          Professional Experience
        </h2>
        <div className="space-y-6">
          {data.experience.map((job, index) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{job.title}</h3>
                  <p className="text-primary font-medium">{job.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {job.period}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">
          Education
        </h2>
        <div className="space-y-3">
          {data.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.school}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ResumePreview;
