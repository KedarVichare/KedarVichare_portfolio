import { useState } from "react";

const Projects = () => {
  const sectionCategories = ["All", "Software Engineer", "GenAI", "ML/DL", "Data Engineering"];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const projects = [
    {
      title: "Multi-Agent Image Generation Pipeline",
      description: "Orchestrated four specialized agents — Claude vision for reference image analysis, prompt engineering, DALL-E image generation, and a CLIP-based critique evaluator — into a multimodal pipeline that produces and scores new images against references.",
      tags: ["Claude", "DALL-E", "CLIP", "Multi-Agent", "PyTorch", "Python"],
      period: "May 2026",
      gradient: "from-fuchsia-500/20 to-violet-500/20",
      categories: ["GenAI"],
      image: "/multi-agents.jpeg",
      imageAlt: "Multi-agent image generation pipeline",
    },
    {
      title: "Multimodal RAG for Macroeconomics",
      description: "Built a retrieval-augmented system over policy PDFs: PyMuPDF extracts text, tables, and figures; hybrid BM25 + FAISS dense indexing retrieves chunks; Claude vision answers questions with cross-encoder reranking and accuracy tracking against ground-truth Q&A.",
      tags: ["Claude", "RAG", "FAISS", "BM25", "PyMuPDF", "Vision"],
      period: "May 2026",
      gradient: "from-emerald-500/20 to-sky-500/20",
      categories: ["GenAI"],
      image: "/multi-modal-rag-featured.jpg",
      imageAlt: "Multimodal RAG over macroeconomics documents",
    },
    {
      title: "Hierarchical Graph Database with NL Queries",
      description: "Interactive in-memory graph database over Enron email data with a FastAPI backend exposing 40 structured graph queries, side-by-side algorithm-pair comparisons (HNSW/NSG, ScaNN/IVF, LSH/SimHash, Annoy/VP-Tree), a React + Vite visualization frontend, and Groq-powered natural-language to DSL translation.",
      tags: ["FastAPI", "React", "Vite", "Graph DB", "ANN", "Groq", "Docker"],
      period: "May 2026",
      gradient: "from-indigo-500/20 to-purple-500/20",
      categories: ["Software Engineer"],
      image: "/graph-db.png",
      imageAlt: "Hierarchical graph database",
    },
    {
      title: "TwinMind Live — Real-Time AI Meeting Assistant",
      description: "Browser app that listens to live audio, transcribes it in real time with Whisper Large V3, and surfaces contextual suggestions plus streamed chat — built on Next.js 16 Edge API routes with AES-GCM encrypted httpOnly session cookies and Groq GPT-OSS 120B for reasoning.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Groq", "Whisper", "Edge Runtime"],
      period: "Apr 2026",
      gradient: "from-blue-500/20 to-teal-500/20",
      categories: ["Software Engineer", "GenAI"],
      image: "/twinmind.png",
      imageAlt: "TwinMind real-time meeting assistant",
    },
    {
      title: "Adaptive Pipeline Intelligence Debugger",
      description: "A “doctor” system watching an Airflow + dbt + DuckDB NYC taxi pipeline — learned (non-hardcoded) detectors for statistical, volume, freshness, and duplicate anomalies, blast-radius dependency analysis, and Claude-driven root-cause explanations served through a FastAPI + Streamlit interface.",
      tags: ["Airflow", "dbt", "DuckDB", "FastAPI", "Streamlit", "Claude", "Anomaly Detection"],
      period: "Apr 2026",
      gradient: "from-rose-500/20 to-amber-500/20",
      categories: ["Data Engineering", "GenAI"],
      image: "/data-pipeline-debugger.jpeg",
      imageAlt: "Adaptive pipeline debugger",
    },
    {
      title: "BiLSTM Sentiment Classifier on IMDB",
      description: "Binary sentiment classification on IMDB reviews comparing a masked mean-pool baseline (~87%) against a 2-layer bidirectional LSTM with dual max/mean pooling (~89%), implemented in PyTorch with standard NLP preprocessing and evaluation.",
      tags: ["PyTorch", "BiLSTM", "NLP", "IMDB"],
      period: "Mar 2026",
      gradient: "from-cyan-500/20 to-blue-500/20",
      categories: ["ML/DL"],
      image: "/bilstm-imdb-sentiment-analysis.png",
      imageAlt: "BiLSTM IMDB sentiment classifier",
    },
    {
      title: "CycleGAN Style Transfer (Monet ↔ Photo)",
      description: "Unpaired image-to-image translation with CycleGAN in PyTorch on 300 Monet paintings and 7K real photos — cycle consistency and identity losses, dual-discriminator training over 100 epochs, with learning-rate decay.",
      tags: ["PyTorch", "CycleGAN", "GAN", "Computer Vision"],
      period: "Mar 2026",
      gradient: "from-purple-500/20 to-pink-500/20",
      categories: ["ML/DL"],
    },
    {
      title: "Moby Dick Language Modeling Suite",
      description: "Character-level RNN, word-level RNN, and sequence-to-sequence language models trained on the Moby Dick corpus, with text generation samples, embedding similarity analysis, and a structured failure diagnosis of each architecture.",
      tags: ["TensorFlow", "Keras", "RNN", "Seq2Seq", "NLP"],
      period: "Mar 2026",
      gradient: "from-amber-500/20 to-orange-500/20",
      categories: ["ML/DL"],
      image: "/rnn.webp",
      imageAlt: "RNN language model",
    },
    {
      title: "Twitter Sentiment RNN Pipeline",
      description: "Sentiment classification on the Sentiment140 corpus (1.6M tweets) comparing TF-IDF, Word2Vec, and GloVe embeddings across LSTM, GRU, and BiLSTM architectures, with detailed error analysis covering sarcasm and negation cases.",
      tags: ["TensorFlow", "LSTM", "GRU", "GloVe", "Word2Vec", "NLP"],
      period: "Mar 2026",
      gradient: "from-sky-500/20 to-cyan-500/20",
      categories: ["ML/DL"],
      image: "/twitter-sentiment-analysis.jpg",
      imageAlt: "Twitter sentiment analysis",
    },
    {
      title: "DCGAN for Medical Image Synthesis",
      description: "Deep convolutional GAN generating synthetic medical images on PathMNIST/BloodMNIST — transposed-convolution generator, convolutional discriminator, evaluated with FID and Inception Score plus MSE-based anomaly detection on a sparse test set.",
      tags: ["PyTorch", "DCGAN", "MedMNIST", "FID", "Computer Vision"],
      period: "Mar 2026",
      gradient: "from-red-500/20 to-pink-500/20",
      categories: ["ML/DL"],
      image: "/dc-gan.png",
      imageAlt: "DCGAN medical image synthesis",
    },
    {
      title: "Variational Autoencoder on CIFAR-10",
      description: "4-layer convolutional VAE trained for 200+ epochs on CIFAR-10 with a combined reconstruction + KL-divergence loss, cosine-annealing scheduler, and t-SNE visualization of latent-space clusters by class.",
      tags: ["PyTorch", "VAE", "CIFAR-10", "Latent Space"],
      period: "Mar 2026",
      gradient: "from-teal-500/20 to-emerald-500/20",
      categories: ["ML/DL"],
      image: "/vae-cifar10.jpg",
      imageAlt: "VAE CIFAR-10",
    },
    {
      title: "3D & 2D Medical Imaging CNN Suite",
      description: "MedMNIST classification covering 3D volumes (NoduleMNIST3D / AdrenalMNIST3D) and 2D images, augmentation studies, VGG-16 transfer learning with partial freezing, Grad-CAM visualizations, and post-training dynamic / full-integer / QAT quantization comparisons.",
      tags: ["PyTorch", "CNN", "Transfer Learning", "Grad-CAM", "Quantization"],
      period: "Mar 2026",
      gradient: "from-lime-500/20 to-green-500/20",
      categories: ["ML/DL"],
    },
    {
      title: "Neural Net MNIST Binary Classifier",
      description: "Feed-forward neural network with two hidden layers, ReLU activation, and sigmoid output for binary MNIST classification (digits 7 vs 9), trained with Adam and early stopping, evaluated via confusion matrix and learning curves.",
      tags: ["TensorFlow", "Keras", "MNIST", "ANN"],
      period: "Mar 2026",
      gradient: "from-yellow-500/20 to-amber-500/20",
      categories: ["ML/DL"],
      image: "/neural-net-mnist.jpeg",
      imageAlt: "Neural net MNIST",
    },
    {
      title: "20 Newsgroups NLP Pipeline",
      description: "End-to-end NLP pipeline on the 20 Newsgroups dataset (comp.graphics, sci.space, rec.sport.baseball) covering preprocessing, TF-IDF keyword extraction, spaCy named entity recognition, and per-class sentiment analysis.",
      tags: ["scikit-learn", "spaCy", "TF-IDF", "NER", "NLP"],
      period: "Mar 2026",
      gradient: "from-violet-500/20 to-indigo-500/20",
      categories: ["ML/DL"],
      image: "/20-nlp-pipeline.jpg",
      imageAlt: "20 Newsgroups NLP pipeline",
    },
    {
      title: "Diffusion Probabilistic Model from Scratch",
      description: "DDPM and DDIM implementations on MNIST — linear forward noise schedule (T=100), a CNN denoiser with sinusoidal time embeddings, and side-by-side comparison of deterministic DDIM (20 and 50 steps) vs stochastic DDPM (100 steps) sampling.",
      tags: ["PyTorch", "Diffusion", "DDPM", "DDIM", "MNIST"],
      period: "Mar 2026",
      gradient: "from-pink-500/20 to-rose-500/20",
      categories: ["GenAI", "ML/DL"],
    },
    {
      title: "GPT from Scratch",
      description: "Character-level transformer language model built from scratch on Tiny Shakespeare — multi-head attention, transformer decoder blocks, positional encoding, with greedy, top-k, and temperature-based sampling for text generation.",
      tags: ["PyTorch", "Transformer", "Attention", "LLM"],
      period: "Mar 2026",
      gradient: "from-slate-500/20 to-blue-500/20",
      categories: ["GenAI", "ML/DL"],
      image: "/gpt-from-scratch.jpeg",
      imageAlt: "GPT from scratch transformer",
    },
    {
      title: "CUDA Matrix Multiplication (Naive + Tiled)",
      description: "Parallel matrix multiplication with two CUDA kernels — a naive global-memory implementation and a tiled shared-memory optimization with 16×16 thread blocks — benchmarked against a CPU baseline and profiled with Nsight Systems.",
      tags: ["CUDA", "GPU", "Parallel Computing", "Shared Memory", "Nsight"],
      period: "Mar 2026",
      gradient: "from-green-500/20 to-emerald-500/20",
      categories: ["Software Engineer"],
      image: "/cuda-matrix-mul.png",
      imageAlt: "CUDA matrix multiplication",
    },
    {
      title: "CUDA Matrix Addition (2D Thread Blocks)",
      description: "1024×1024 matrix addition kernel using 2D CUDA thread blocks (16×16) with natural row/column mapping for improved memory coalescing, profiled with Nsight Systems and verified against a CPU reference.",
      tags: ["CUDA", "GPU", "Parallel Computing"],
      period: "Mar 2026",
      gradient: "from-emerald-500/20 to-lime-500/20",
      categories: ["Software Engineer"],
      image: "/cuda-matrix-add.jpg",
      imageAlt: "CUDA matrix addition",
    },
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
                    src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, "")}`}
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
