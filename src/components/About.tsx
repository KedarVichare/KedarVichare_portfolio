import { Layers, Brain, Cloud, Database } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Layers,
      title: "Full Stack Development",
      color: "text-yellow-500",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      color: "text-accent",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-500",
    },
    {
      icon: Database,
      title: "Data Engineering",
      color: "text-blue-400",
    },
  ];

  return (
    <section id="about" className="py-24 wave-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <p className="section-subtitle">INTRODUCTION</p>
          <h2 className="section-title">Overview.</h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-3xl">
            I'm a software engineer and data scientist specializing in Python, JavaScript, SQL, and end-to-end machine learning systems. 
            I build production-ready solutions using TensorFlow, PyTorch, FastAPI, React, and cloud platforms like AWS and GCP. 
            I'm passionate about creating intelligent, scalable systems that solve real-world problems.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="gradient-border p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <skill.icon className={`w-12 h-12 ${skill.color}`} />
                </div>
                <h3 className="font-display font-semibold text-sm text-foreground">
                  {skill.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
