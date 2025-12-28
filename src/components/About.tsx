import { Target, Award, Users, Globe, Ship } from "lucide-react";
import partnersLogo from "@/assets/partners-logos.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Uncompromising attention to detail in every project we undertake.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering world-class maritime solutions.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building lasting relationships with global industry leaders.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Pioneering modern approaches to traditional maritime challenges.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Anchor Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M40 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-1 8v6h-8v2h8v18.5l-12 8v3l12-8v6.5h-6v2h14v-2h-6v-6.5l12 8v-3l-12-8V30h8v-2h-8v-6h2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-5 py-2 mb-6">
            <Ship className="h-4 w-4 text-accent" />
            <span className="text-accent text-sm font-medium tracking-wide">DPIIT Recognized Startup</span>
          </div>
          <span className="block text-accent font-medium tracking-widest uppercase text-sm">About Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Building the Future of <span className="text-gradient">Maritime Excellence</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Tritonex Marine Solutions LLP</strong> is a DPIIT-recognized startup
              headquartered in Mangaluru, India. We specialize in delivering comprehensive maritime engineering
              solutions to shipyards, offshore companies, and vessel operators worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With extensive experience in turnkey shipbuilding & shiprepair, yard modernization, and process
              optimization, our team of seasoned maritime professionals brings decades of industry expertise to every
              engagement. We are committed to helping our clients achieve operational excellence through innovative
              solutions and meticulous project execution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our partnerships with leading industry bodies and certification agencies ensure that every project meets
              the highest international standards for quality, safety, and environmental compliance.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Our Mission</h3>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto text-lg leading-relaxed">
            To be the preferred maritime solutions partner for global shipyards and offshore operators, delivering
            innovative, reliable, and cost-effective engineering services that drive operational excellence and
            sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
