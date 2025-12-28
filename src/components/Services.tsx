import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceShipbuilding from "@/assets/service-shipbuilding.jpg";
import serviceProjectManagement from "@/assets/service-project-management.jpg";
import serviceYardModernization from "@/assets/service-yard-modernization.jpg";
import serviceOffshore from "@/assets/service-offshore.jpg";
import serviceProcess from "@/assets/service-process.jpg";
import serviceSpareParts from "@/assets/service-spare-parts.jpg";

const Services = () => {
  const services = [
    {
      title: "Turnkey Shipbuilding",
      description:
        "Complete vessel construction solutions from design to delivery, ensuring highest quality standards and timely completion.",
      image: serviceShipbuilding,
      features: ["Hull fabrication", "Outfitting", "Sea trials"],
    },
    {
      title: "Project Management",
      description:
        "Expert oversight of complex maritime projects with focus on timeline, budget, and quality milestones.",
      image: serviceProjectManagement,
      features: ["Planning & scheduling", "Risk management", "Quality control"],
    },
    {
      title: "Yard Modernization",
      description:
        "Upgrading shipyard infrastructure with modern equipment and optimized layouts for enhanced productivity.",
      image: serviceYardModernization,
      features: ["Equipment upgrades", "Layout optimization", "Technology integration"],
    },
    {
      title: "Offshore Services",
      description:
        "Specialized solutions for offshore platforms, rigs, and marine structures with stringent safety compliance.",
      image: serviceOffshore,
      features: ["Platform construction", "Marine structures", "Safety systems"],
    },
    {
      title: "Process Improvements",
      description:
        "Lean manufacturing and workflow optimization to maximize efficiency and reduce operational costs.",
      image: serviceProcess,
      features: ["Workflow analysis", "Lean implementation", "Performance metrics"],
    },
    {
      title: "Spare Parts Management",
      description:
        "Comprehensive inventory solutions ensuring critical components are always available when needed.",
      image: serviceSpareParts,
      features: ["Inventory optimization", "Vendor management", "Logistics"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Our Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Comprehensive Maritime{" "}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            From shipbuilding to offshore operations, we deliver end-to-end services
            tailored to meet the evolving needs of the global maritime industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-primary rounded-xl overflow-hidden hover:bg-primary/90 transition-all duration-500 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 font-display text-xl font-bold text-primary-foreground">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-primary-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Piping Work Highlight */}
        <div className="mt-16 bg-primary rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <span className="text-ocean-light font-medium tracking-widest uppercase text-sm">
                Specialized Service
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mt-2 mb-4">
                Piping Turnkey Work
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Complete piping solutions for shipbuilding and offshore projects, including
                design, fabrication, installation, and testing. Our experienced team delivers
                high-quality piping systems that meet the most demanding specifications.
              </p>
              <Button variant="heroOutline" asChild>
                <a href="#contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="h-64 lg:h-full relative">
              <img
                src={serviceShipbuilding}
                alt="Piping turnkey work for maritime projects"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-transparent lg:bg-gradient-to-l" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
