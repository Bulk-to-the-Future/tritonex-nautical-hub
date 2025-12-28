import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

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
            Let's Discuss Your{" "}
            <span className="text-gradient">Project</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Ready to take your maritime operations to the next level? Contact us today
            for a consultation with our expert team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="h-full flex flex-col">
              <div className="space-y-5 flex-1">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="text-sm font-medium text-foreground block mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground block mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 99999 99999"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="text-sm font-medium text-foreground block mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="shipbuilding">Turnkey Shipbuilding</option>
                    <option value="project-management">Project Management</option>
                    <option value="yard-modernization">Yard Modernization</option>
                    <option value="offshore">Offshore Services</option>
                    <option value="process">Process Improvements</option>
                    <option value="spare-parts">Spare Parts Management</option>
                    <option value="piping">Piping Turnkey Work</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    required
                    className="bg-background resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-6"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4">
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

            {/* Why Choose Us */}
            <div className="bg-primary rounded-xl p-6">
              <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
                Why Partner With Us
              </h4>
              <ul className="space-y-3">
                {[
                  "24/7 dedicated project support",
                  "Transparent pricing & reporting",
                  "Industry-leading turnaround times",
                  "Global quality certifications",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/80">
                    <CheckCircle className="h-4 w-4 text-ocean-light flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
