import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-36">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="hero-glow animate-pulse-slow" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Your Digital Partner
              </span>
            </div>
            
            <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Innovating Your{" "}
              <span className="gradient-text">Digital Presence</span>
            </h1>
            
            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Your all-in-one partner for WordPress Development, Digital Marketing, 
              and Creative Design. We build brands that stand out and scale.
            </p>
            
            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="#pricing">
                  View Our Packages
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#services">Learn More</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-up-delay-3 mt-12 flex items-center gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">150+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Image */}
          <div className="hidden lg:block animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
              <img
                src={heroDashboard}
                alt="Digital Dashboard"
                className="relative z-10 rounded-2xl shadow-2xl border border-border/30"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
