type SkillItem = {
  name: string;
  iconSrc: string;
  iconAlt?: string;
  className?: string;
};

const skills: SkillItem[] = [
  { name: "Python", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Docker", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "AWS", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", className: "brightness-0 invert" },
  { name: "PostgreSQL", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Kafka", iconSrc: "https://cdn.simpleicons.org/apachekafka/3b82f6" },
  { name: "Apache Airflow", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg", iconAlt: "Airflow" },
  { name: "Apache Spark", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg", iconAlt: "Spark" },
  { name: "TensorFlow", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
];

const Skills = () => {
  return (
    <section className="py-24 wave-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle">TECHNOLOGIES I WORK WITH</p>
          <h2 className="section-title">Skills.</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="skill-badge bg-secondary/30 hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300">
                <img
                  src={skill.iconSrc}
                  alt={skill.iconAlt ?? `${skill.name} logo`}
                  className={`w-12 h-12 object-contain ${skill.className ?? ""}`}
                  loading="lazy"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
