import { Factory, Ruler, Warehouse, Hourglass } from "lucide-react";
import mangaloreMap from "@/assets/mangalore-map.jpg";

const Facilities = () => {
  const facilities = [
    {
      icon: Factory,
      stat: "24,000",
      unit: "sq.m",
      label: "Total Yard Area",
      description: "Expansive yard space for large-scale vessel construction and repairs",
    },
    {
      icon: Warehouse,
      stat: "2,200",
      unit: "sq.m",
      label: "Covered Fabrication Shops",
      description: "Climate-controlled workshops for precision fabrication work",
    },
    {
      icon: Ruler,
      stat: "50 × 25",
      unit: "m",
      label: "Dry Dock Capacity",
      description: "Full-service dry dock for vessel maintenance and repairs",
    },
    {
      icon: Hourglass,
      stat: "100+",
      unit: "",
      label: "Years of Experience",
      description: "Combined experience of the leaders of the organization",
    },
  ];

  return (
    <section id="facilities" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Infrastructure</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            World-Class <span className="text-gradient">Facilities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Our state-of-the-art facilities are equipped to handle projects from small vessel repairs to complete
            newbuild construction.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Location Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-elegant bg-card">
            <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-elegant z-10">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Located In</div>
              <div className="font-display font-semibold text-foreground">Mangaluru, India</div>
            </div>
            <img
              src={mangaloreMap}
              alt="Map showing Mangalore location in India"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Facilities Stats */}
          <div className="grid grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={facility.label}
                className="bg-primary p-6 rounded-xl hover:bg-primary/90 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <facility.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display text-3xl font-bold text-primary-foreground">{facility.stat}</span>
                  {facility.unit && <span className="text-primary-foreground/70 text-sm">{facility.unit}</span>}
                </div>
                <h3 className="font-medium text-primary-foreground mb-2">{facility.label}</h3>
                <p className="text-sm text-primary-foreground/80">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h4 className="font-display text-lg font-semibold text-foreground mb-2">Modern Equipment</h4>
            <p className="text-sm text-muted-foreground">
              Cutting-edge machinery and tools for precision engineering and fabrication work
            </p>
          </div>
          <div className="p-6">
            <h4 className="font-display text-lg font-semibold text-foreground mb-2">Safety Certified</h4>
            <p className="text-sm text-muted-foreground">
              All facilities meet international safety standards and undergo regular audits
            </p>
          </div>
          <div className="p-6">
            <h4 className="font-display text-lg font-semibold text-foreground mb-2">24/7 Operations</h4>
            <p className="text-sm text-muted-foreground">
              Round-the-clock capability to meet urgent project timelines and deadlines
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
