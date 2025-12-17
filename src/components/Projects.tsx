import { useState } from "react";

const Projects = () => {
  const sectionCategories = ["All", "Software Engineer", "GenAI", "ML/DL", "Data Engineering"];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const projects = [
    {
      title: "AI-Driven Travel & Booking Platform",
      description: "Built a fully containerized microservices ecosystem using Docker multi-stage builds, Alpine images. Deployed six microservices on AWS EKS with Kubernetes, implemented event-driven architecture using Apache Kafka.",
      tags: ["Microservices", "AWS EKS", "Docker", "Kafka", "FastAPI"],
      period: "Jan 2025 – Apr 2025",
      gradient: "from-purple-500/20 to-blue-500/20",
      categories: ["Software Engineer"],
      image: "/airbnb.jpg",
      imageAlt: "Travel booking platform",
    },
    {
      title: "Kayak-Inspired Distributed Travel Booking",
      description: "Distributed travel platform with Kubernetes-orchestrated microservices (User, Search, Booking, Payment, Review), Nginx API gateway, and React + Redux + Tailwind frontend. Dockerized Node/Express services with MongoDB for booking and payments, Vite dev proxy, and production-style K8s manifests (Deployments, Services, Ingress).",
      tags: ["Kubernetes", "Docker", "Node.js", "MongoDB", "Nginx", "React", "Redux", "Tailwind"],
      period: "2025",
      gradient: "from-sky-500/20 to-indigo-500/20",
      categories: ["Software Engineer"],
      image: "/kayak.png",
      imageAlt: "Distributed travel booking architecture",
    },
    {
      title: "U.S. Energy Forecasting and Emissions Analysis",
      description: "Analyzed and merged multiple U.S. EIA datasets on CO emissions, EV sales, and fuel-based emissions. Built an end-to-end ETL/ELT pipeline with ML and ensemble models, visualized insights in Power BI, and designed a DAG for reproducibility.",
      tags: ["ETL", "Ensemble Models", "Power BI", "Energy Data", "DAG"],
      period: "2024",
      gradient: "from-indigo-500/20 to-cyan-500/20",
      categories: ["Data Engineering"],
      image: "/us eia.png",
      imageAlt: "Energy forecasting analytics",
    },
    {
      title: "Automated Stock Price Forecasting Pipeline using Airflow and Snowflake",
      description: "Automated stock price forecasting with Apache Airflow orchestrating ingestion, processing, and ML predictions. Trained and deployed a Snowflake ML model forecasting the next 7 days using yFinance data and feature engineering. Optimized ETL by integrating Airflow with Snowflake for seamless data flows.",
      tags: ["Airflow", "Snowflake", "ML", "Time Series", "yFinance"],
      period: "2024",
      gradient: "from-amber-500/20 to-emerald-500/20",
      categories: ["Data Engineering"],
      image: "/stock.jpg",
      imageAlt: "Stock price forecasting dashboards",
    },
    {
      title: "Student Mental Stress Analysis & Recommendation System",
      description: "Built an ML pipeline in Python to predict student stress levels from lifestyle and academic data, tuning a Random Forest model. Added a recommendation engine to surface personalized coping strategies for stress management.",
      tags: ["Python", "Random Forest", "ML Pipeline", "Recommendations"],
      period: "2023",
      gradient: "from-pink-500/20 to-purple-500/20",
      categories: ["ML/DL"],
      image: "/student.jpg",
      imageAlt: "Student stress analysis visual",
    },
    {
      title: "Healthcare Workflow Optimization Analysis",
      description: "Used SQL and Python to analyze clinical and non-clinical workflows in a healthcare provider setting, focusing on order entry, result review, and patient registration. Built Power BI dashboards highlighting scheduling and order-management inefficiencies, driving a 15% operational lift.",
      tags: ["SQL", "Python", "Power BI", "Healthcare", "Analytics"],
      period: "2023",
      gradient: "from-slate-500/20 to-teal-500/20",
      categories: ["Data Engineering"],
      image: "/healthcare ai.jpg",
      imageAlt: "Healthcare workflow dashboards",
    },
    {
      title: "Bitcoin Price Intelligence Platform",
      description: "Built an automated ELT pipeline using Apache Airflow, ingesting live cryptocurrency market data. Engineered modular dbt transformation models and developed interactive dashboards in Apache Superset.",
      tags: ["Airflow", "Snowflake", "dbt", "Superset", "Python"],
      period: "Jan 2025 – Feb 2025",
      gradient: "from-orange-500/20 to-yellow-500/20",
      categories: ["Data Engineering"],
      image: "/btc.jpg",
      imageAlt: "Bitcoin intelligence dashboards",
    },
    {
      title: "AutoNexus: AI Supply-Chain Platform",
      description: "Crafted an interactive platform to optimize global supply-chain management using multi-agent planning and real-time visualization. Built at UC Berkeley Hackathon with Claude LLM integration.",
      tags: ["MCP", "Claude LLM", "Neo4j", "FastAPI", "Next.js"],
      period: "Jun 2025 – Jul 2025",
      gradient: "from-cyan-500/20 to-green-500/20",
      categories: ["GenAI"],
      image: "/ai_supplychain.jpg",
      imageAlt: "Supply chain visualization",
    },
    {
      title: "Proactive Violence & Weapon Detection in CCTV Surveillance",
      description: "Engineered a proactive CCTV surveillance system using SlowFast Networks for temporal violence classification and YOLOv5m for spatial weapon detection. Processed large-scale video datasets (UCF Crime, SCVD) with class balancing and augmentation. Trained standalone deep learning models with transfer learning, achieving high accuracy in detecting violent actions and weapon presence in noisy CCTV environments.",
      tags: ["SlowFast Networks", "YOLOv5", "Deep Learning", "Computer Vision", "Transfer Learning"],
      period: "2024",
      gradient: "from-red-500/20 to-orange-500/20",
      categories: ["ML/DL"],
      image: "/previolenece.jpg",
      imageAlt: "CCTV surveillance detection system",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(selectedCategory));

  return (
    <section id="projects" className="py-24 wave-bg">
      <div className="container mx-auto px-6">
        <div className="w-full mb-16 space-y-6">
          <div className="max-w-4xl">
            <p className="section-subtitle">MY WORK</p>
            <h2 className="section-title">Projects.</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Following projects showcase my skills and experience through real-world examples of my work. 
              Each project reflects my ability to solve complex problems, work with different technologies, 
              and manage projects effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full">
            {sectionCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                className={`w-full text-sm sm:text-base font-semibold px-4 py-3 rounded-full border shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-background border-primary"
                    : "bg-white/90 text-black border-border/70 hover:bg-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Gradient background */}
              <div className="h-48 relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt ?? `${project.title} preview`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : null}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70`} />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="text-xs text-muted-foreground">{project.period}</p>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className="text-[11px] px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
