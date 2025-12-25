import { Factory, Ruler, Warehouse, Wrench } from "lucide-react";
import facilitiesImage from "@/assets/facilities.jpg";

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
      icon: Wrench,
      stat: "Modern",
      unit: "",
      label: "Supply Stores",
      description: "Well-stocked inventory of parts, materials, and equipment",
    },
  ];

  return (
    <section id="facilities" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Infrastructure
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            World-Class{" "}
            <span className="text-gradient">Facilities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Our state-of-the-art facilities are equipped to handle projects of any scale,
            from small vessel repairs to complete newbuild construction.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img
              src={facilitiesImage}
              alt="Tritonex Marine Solutions facility"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
            
            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Located In
              </div>
              <div className="font-display font-semibold text-foreground">
                Mangaluru, India
              </div>
            </div>
          </div>

          {/* Facilities Stats */}
          <div className="grid grid-cols-2 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={facility.label}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <facility.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display text-3xl font-bold text-foreground">
                    {facility.stat}
                  </span>
                  {facility.unit && (
                    <span className="text-muted-foreground text-sm">
                      {facility.unit}
                    </span>
                  )}
                </div>
                <h3 className="font-medium text-foreground mb-2">
                  {facility.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h4 className="font-display text-lg font-semibold text-foreground mb-2">
              Modern Equipment
            </h4>
            <p className="text-sm text-muted-foreground">
              Cutting-edge machinery and tools for precision engineering and fabrication work
            </p>
          </div>
          <div className="p-6">
            <h4 className="font-display text-lg font-semibold text-foreground mb-2">
              Safety Certified
            </h4>
            <p className="text-sm text-muted-foreground">
              All facilities meet international safety standards and undergo regular audits
            </p>
          </div>
          <div className="p-6">
            <h4 className="font-display text-lg font-semibold text-foreground mb-2">
              24/7 Operations
            </h4>
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
