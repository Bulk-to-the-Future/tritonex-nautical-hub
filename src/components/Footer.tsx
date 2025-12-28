import { Anchor, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Turnkey Shipbuilding", href: "#services" },
      { label: "Project Management", href: "#services" },
      { label: "Yard Modernization", href: "#services" },
      { label: "Offshore Services", href: "#services" },
      { label: "Process Improvements", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Facilities", href: "#facilities" },
      { label: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <Anchor className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display text-xl font-bold">Tritonex</span>
                <span className="block text-xs text-primary-foreground/70 tracking-widest uppercase">
                  Marine Solutions
                </span>
              </div>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Your trusted partner for comprehensive maritime engineering solutions.
              DPIIT recognized startup delivering excellence in shipbuilding and
              offshore services.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:projects@tritonexmarinesolutions.co.in"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-primary-foreground/70">
              <p>
                Room No.11, 1st Floor,
                <br />
                Vamanashram Complex,
                <br />
                G.H.S Cross Road,
                <br />
                Mangaluru - 575003
              </p>
              <p>
                <a
                  href="tel:+917411484344"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +91 74114 84344
                </a>
              </p>
              <p>
                <a
                  href="mailto:projects@tritonexmarinesolutions.co.in"
                  className="hover:text-primary-foreground transition-colors"
                >
                  projects@tritonexmarinesolutions.co.in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Tritonex Marine Solutions LLP. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            CIN: AAX-0000
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
