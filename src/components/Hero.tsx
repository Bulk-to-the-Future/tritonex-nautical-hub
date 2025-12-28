import { ChevronDown, Ship, Compass, Waves, Award, BadgeCheck, Building2 } from "lucide-react";
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
          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 animation-delay-100">
            Engineering Excellence <span className="block text-ocean-light">for the Maritime Industry</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0 animation-delay-200">
            Your strategic partner for end-to-end shipbuilding and offshore engineering, driven by technical mastery and
            operational integrity.
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
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">24,000</div>
              <div className="text-primary-foreground/60 text-sm mt-1">Sq.m Total Yard</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">2,200</div>
              <div className="text-primary-foreground/60 text-sm mt-1">Sq.m Covered Shops</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">6+</div>
              <div className="text-primary-foreground/60 text-sm mt-1">Core Services</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-20 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="bg-card/20 backdrop-blur-md rounded-xl border border-primary-foreground/10 py-4 px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-accent flex-shrink-0" />
                <div>
                  <span className="text-primary-foreground/60 text-[10px] uppercase tracking-widest block">Recognized By</span>
                  <span className="text-primary-foreground font-semibold text-sm">MSME</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-6 w-6 text-accent flex-shrink-0" />
                <div>
                  <span className="text-primary-foreground/60 text-[10px] uppercase tracking-widest block">Certified</span>
                  <span className="text-primary-foreground font-semibold text-sm">Startup India (DPIIT)</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-accent flex-shrink-0" />
                <div>
                  <span className="text-primary-foreground/60 text-[10px] uppercase tracking-widest block">Infrastructure Partner</span>
                  <span className="text-primary-foreground font-semibold text-sm">Yojaka India Pvt Ltd</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Ship className="h-6 w-6 text-accent flex-shrink-0" />
                <div>
                  <span className="text-primary-foreground/60 text-[10px] uppercase tracking-widest block">Key Client</span>
                  <span className="text-primary-foreground font-semibold text-sm">Udupi & Cochin Shipyard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-fade-in opacity-0 animation-delay-500"
      >
        <span className="text-xs tracking-widest uppercase mb-2">Discover</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
