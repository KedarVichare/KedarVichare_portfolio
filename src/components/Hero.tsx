import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center wave-bg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float delay-300" />
      </div>

      {/* Animated concentric circles */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
          {/* Outer circle */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" 
               style={{ animation: 'pulse-ring 4s ease-in-out infinite' }} />
          {/* Second circle */}
          <div className="absolute inset-[60px] rounded-full border-2 border-accent/20 animate-pulse delay-200"
               style={{ animation: 'pulse-ring 4s ease-in-out infinite 0.5s' }} />
          {/* Third circle */}
          <div className="absolute inset-[120px] rounded-full border-2 border-primary/30 animate-pulse delay-300"
               style={{ animation: 'pulse-ring 4s ease-in-out infinite 1s' }} />
          {/* Inner circle with glow */}
          <div className="absolute inset-[180px] rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 animate-pulse-glow" />
        </div>
      </div>

      {/* Wave lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M0,400 Q480,300 960,400 T1920,400"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <path
          d="M0,500 Q480,400 960,500 T1920,500"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="1"
          className="animate-pulse delay-100"
        />
        <path
          d="M0,600 Q480,500 960,600 T1920,600"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="1"
          className="animate-pulse delay-200"
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(270, 91%, 65%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(187, 94%, 43%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(270, 91%, 65%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 text-center px-6">
        <div className="mb-6 animate-fade-in-up">
          <span className="inline-block w-3 h-3 rounded-full bg-primary animate-pulse-glow mr-2" />
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up">
          Hi, I'm <span className="gradient-text-purple">Kedar</span>
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up delay-200">
          <p className="text-xl md:text-2xl text-accent font-medium">
            Software Engineer & Data Scientist
          </p>
        </div>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 animate-fade-in-up delay-300">
          Building intelligent, scalable systems with Machine Learning, Cloud Computing, and Full-Stack Development
        </p>

        <div className="flex gap-4 justify-center animate-fade-in-up delay-400">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 glow-purple"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border rounded-lg font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
