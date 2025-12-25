import { ChevronDown, Ship, Compass, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-shipyard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Shipyard at dusk with vessel under construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 text-primary-foreground/10 animate-float">
          <Compass className="h-24 w-24" />
        </div>
        <div className="absolute bottom-1/3 right-10 text-primary-foreground/10 animate-float animation-delay-300">
          <Ship className="h-32 w-32" />
        </div>
        <div className="absolute top-1/2 left-1/4 text-primary-foreground/5">
          <Waves className="h-48 w-48" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-5 py-2 mb-8 animate-fade-up opacity-0">
            <Ship className="h-4 w-4 text-primary-foreground" />
            <span className="text-primary-foreground text-sm font-medium tracking-wide">
              DPIIT Recognized Startup
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 animation-delay-100">
            Engineering Excellence{" "}
            <span className="block text-ocean-light">for the Maritime Industry</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0 animation-delay-200">
            Delivering world-class shipbuilding, offshore solutions, and yard
            modernization services to global maritime leaders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0 animation-delay-300">
            <Button variant="hero" size="lg" asChild>
              <a href="#services">Explore Our Services</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Request Consultation</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up opacity-0 animation-delay-400">
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                24,000
              </div>
              <div className="text-primary-foreground/60 text-sm mt-1">
                Sq.m Total Yard
              </div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                2,200
              </div>
              <div className="text-primary-foreground/60 text-sm mt-1">
                Sq.m Covered Shops
              </div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                6+
              </div>
              <div className="text-primary-foreground/60 text-sm mt-1">
                Core Services
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-fade-in opacity-0 animation-delay-500"
      >
        <span className="text-xs tracking-widest uppercase mb-2">Discover</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
