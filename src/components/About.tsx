import { Target, Award, Users, Globe } from "lucide-react";
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
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="block text-accent font-medium tracking-widest uppercase text-sm">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Building the Future of{" "}
            <span className="text-gradient">Maritime Excellence</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Tritonex Marine Solutions LLP</strong> is a
              DPIIT-recognized startup headquartered in Mangaluru, India. We specialize in
              delivering comprehensive maritime engineering solutions to shipyards, offshore
              companies, and vessel operators worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With extensive experience in turnkey shipbuilding, yard modernization, and process
              optimization, our team of seasoned maritime professionals brings decades of
              industry expertise to every engagement. We are committed to helping our clients
              achieve operational excellence through innovative solutions and meticulous
              project execution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our partnerships with leading industry bodies and certification agencies ensure
              that every project meets the highest international standards for quality, safety,
              and environmental compliance.
            </p>

            {/* Partners */}
            <div className="pt-6">
              <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-4">
                Certifications & Partners
              </span>
              <div className="bg-card rounded-lg p-4 shadow-card">
                <img
                  src={partnersLogo}
                  alt="Industry certifications and partnership logos"
                  className="w-full h-auto max-h-20 object-contain"
                />
              </div>
            </div>
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
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Our Mission
          </h3>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto text-lg leading-relaxed">
            To be the preferred maritime solutions partner for global shipyards and offshore
            operators, delivering innovative, reliable, and cost-effective engineering services
            that drive operational excellence and sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
