import type { ComponentType } from "react";
import { Briefcase } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string[];
  side: "left" | "right";
  icon?: ComponentType<{ className?: string }>;
  iconSrc?: string;
  iconAlt?: string;
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Research Assistant / Student Assistant",
      company: "San Jose State University",
      period: "May 2025 – Present",
      description: [
        "Assisted Professor in Data Structures and Algorithms (DSA) course, supporting lab sessions focused on C++ and Python implementations.",
        "Conducted weekly coding office hours for 30+ undergraduate students, explaining concepts like recursion, time complexity, and OOP design.",
        "Maintained an internal GitHub repository with solved problems and coding guidelines for DSA labs.",
      ],
      iconSrc: "/SJSU.jpg",
      iconAlt: "San Jose State University logo",
      side: "left",
    },
    {
      title: "Software Engineer",
      company: "Reliance Jio",
      period: "Apr 2021 – Jul 2024",
      description: [
        "Designed and developed a personalized product recommendation system using Python, LightGBM, and SQL, driving a 7-8% increase in sales conversions.",
        "Developed a full-stack web application prototype using React, Node.js/Express, and MySQL with AI-driven services via FastAPI + LangChain.",
        "Performed traffic analysis using Python, Pandas, and SciPy, leading to a 20% increase in product page engagement and DAU growth from 2.5M to 3M.",
      ],
      iconSrc: "/JIO.png",
      iconAlt: "Reliance Jio logo",
      side: "right",
    },
    {
      title: "Engineering Intern",
      company: "Larsen and Toubro",
      period: "Jun 2016 – Apr 2017",
      description: [
        "Conducted exploratory data analysis and built real-time sensor data pipelines using Python.",
        "Enabled processing of 500+ sensor readings per second for industrial applications.",
      ],
      iconSrc: "/LT.png",
      iconAlt: "Larsen and Toubro logo",
      side: "left",
    },
  ];

  const renderIcon = (exp: ExperienceItem) => {
    if (exp.iconSrc) {
      return (
        <img
          src={`${import.meta.env.BASE_URL}${exp.iconSrc.replace(/^\//, "")}`}
          alt={exp.iconAlt ?? `${exp.company} logo`}
          className="w-full h-full rounded-full object-cover"
          loading="lazy"
        />
      );
    }

    if (exp.icon) {
      const Icon = exp.icon;
      return <Icon className="w-6 h-6 text-primary" />;
    }

    return <Briefcase className="w-6 h-6 text-primary" />;
  };

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle">WHAT I HAVE DONE SO FAR</p>
          <h2 className="section-title">Work Experience.</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              <div className={`flex flex-col md:flex-row items-center gap-8 ${exp.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${exp.side === 'right' ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="gradient-border p-6 rounded-xl bg-card">
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{exp.company}</p>
                    <ul className={`space-y-2 text-sm text-muted-foreground ${exp.side === 'right' ? 'text-left' : 'md:text-left'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-2/12">
                  <div className="timeline-dot">
                  {renderIcon(exp)}
                  </div>
                </div>

                {/* Date */}
                <div className={`w-full md:w-5/12 ${exp.side === 'right' ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-muted-foreground font-medium">{exp.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
