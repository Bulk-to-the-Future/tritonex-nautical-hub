import { Award, BadgeCheck, Building2, Ship } from "lucide-react";

const TrustBar = () => {
  const trustItems = [
    {
      label: "Recognized By",
      value: "MSME",
      icon: Award,
    },
    {
      label: "Certified",
      value: "Startup India (DPIIT)",
      icon: BadgeCheck,
    },
    {
      label: "Infrastructure Partner",
      value: "Yojaka India Pvt Ltd",
      icon: Building2,
    },
    {
      label: "Key Client",
      value: "Udupi & Cochin Shipyard",
      icon: Ship,
    },
  ];

  return (
    <section className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <item.icon className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-primary-foreground/70 text-xs uppercase tracking-widest font-medium mb-1">
                {item.label}
              </span>
              <span className="text-primary-foreground font-semibold text-sm md:text-base">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
