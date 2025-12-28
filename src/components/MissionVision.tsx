import { Compass, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section id="mission" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Our Purpose
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3">
            Mission & <span className="text-accent">Vision</span>
          </h2>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
                <Compass className="h-8 w-8 text-accent" />
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                Our Mission & Vision
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed text-lg">
                To provide world-class shipbuilding and marine solutions through effective project 
                management, process optimization and continuous modernization. By integrating 
                operational efficiency, upholding integrity and ensuring timely execution with 
                the highest quality standards, we deliver lasting value to clients, maintain 
                reliable operations and strengthen India's standing as a premier global maritime hub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;