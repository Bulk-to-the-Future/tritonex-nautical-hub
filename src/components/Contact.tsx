import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Room No.11, 1st Floor, Vamanashram Complex, G.H.S Cross Road, Mangaluru - 575003",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 74114 84344",
      href: "tel:+917411484344",
      additional: ["+91 97509 74001", "+91 94830 60805"],
    },
    {
      icon: Mail,
      label: "Email",
      value: "projects@tritonexmarinesolutions.co.in",
      href: "mailto:projects@tritonexmarinesolutions.co.in",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Contact{" "}
            <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Ready to take your maritime operations to the next level? Contact us today
            for a consultation with our expert team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Contact Cards */}
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      {info.label}
                    </h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-accent transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">
                        {info.value}
                      </p>
                    )}
                    {info.additional && (
                      <div className="mt-1 space-y-1">
                        {info.additional.map((item) => (
                          <a
                            key={item}
                            href={`tel:${item.replace(/\s/g, "")}`}
                            className="block text-muted-foreground hover:text-accent transition-colors text-sm"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-primary rounded-xl p-6">
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4 text-center">
              Why Partner With Us
            </h4>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                "24/7 dedicated project support",
                "Transparent pricing & reporting",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-primary-foreground/80">
                  <CheckCircle className="h-4 w-4 text-ocean-light flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
              {[
                "Industry-leading turnaround times",
                "Global quality certifications",
              ].map((item) => (
                <li key={item} className="flex items-center justify-end gap-3 text-primary-foreground/80 text-right">
                  <span className="text-sm">{item}</span>
                  <CheckCircle className="h-4 w-4 text-ocean-light flex-shrink-0" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
