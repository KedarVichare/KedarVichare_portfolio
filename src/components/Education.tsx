import type { ComponentType } from "react";
import { GraduationCap } from "lucide-react";

type EducationItem = {
  school: string;
  degree: string;
  period: string;
  coursework: string[];
  side: "left" | "right";
  icon?: ComponentType<{ className?: string }>;
  iconSrc?: string;
  iconAlt?: string;
};

const Education = () => {
  const education: EducationItem[] = [
    {
      school: "San Jose State University",
      degree: "Master of Science in Applied Data Science",
      period: "Aug 2024 – May 2026",
      coursework: [
        "Machine Learning",
        "Deep Learning",
        "Big Data",
        "Cloud Computing & DevOps",
        "Distributed Systems",
      ],
      iconSrc: "/SJSU.jpg",
      iconAlt: "San Jose State University logo",
      side: "left",
    },
    {
      school: "University of Mumbai",
      degree: "Bachelor of Engineering in Electronics & Telecomm",
      period: "Aug 2017 – Jun 2020",
      coursework: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Database Management",
      ],
      iconSrc: "/mumbai.jpg",
      iconAlt: "University of Mumbai logo",
      side: "right",
    },
  ];

  const renderIcon = (edu: EducationItem) => {
    if (edu.iconSrc) {
      return (
        <img
          src={`${import.meta.env.BASE_URL}${edu.iconSrc.replace(/^\//, "")}`}
          alt={edu.iconAlt ?? `${edu.school} logo`}
          className="w-full h-full rounded-full object-cover"
          loading="lazy"
        />
      );
    }

    if (edu.icon) {
      const Icon = edu.icon;
      return <Icon className="w-6 h-6 text-primary" />;
    }

    return <GraduationCap className="w-6 h-6 text-primary" />;
  };

  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle">EXPLORING MY ACADEMIC JOURNEY</p>
          <h2 className="section-title">Education.</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 hidden md:block" />

          {education.map((edu, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              <div className={`flex flex-col md:flex-row items-center gap-8 ${edu.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${edu.side === 'right' ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="gradient-border p-6 rounded-xl bg-card">
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">
                      {edu.school}
                    </h3>
                    <p className="text-accent mb-4">{edu.degree}</p>
                    
                    <div className={`${edu.side === 'right' ? 'text-left' : 'md:text-left'}`}>
                      <p className="text-sm text-muted-foreground mb-2">Relevant Coursework:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {edu.coursework.map((course, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-2/12">
                  <div className="timeline-dot">
                  {renderIcon(edu)}
                  </div>
                </div>

                {/* Date */}
                <div className={`w-full md:w-5/12 ${edu.side === 'right' ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-muted-foreground font-medium">{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
