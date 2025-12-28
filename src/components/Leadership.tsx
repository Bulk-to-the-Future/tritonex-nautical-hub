import leaderPlaceholder from "@/assets/leader-placeholder.png";

const leaders = [
  {
    title: "Chief Executive Officer",
    name: "John Smith",
    description: "With over 25 years of experience in maritime industries, leading strategic vision and growth initiatives across global operations.",
  },
  {
    title: "Chief Technological Officer",
    name: "Sarah Johnson",
    description: "A visionary technologist driving innovation in shipbuilding processes, digital transformation, and sustainable engineering solutions.",
  },
  {
    title: "Chief Operating Officer",
    name: "Michael Chen",
    description: "Expert in operational excellence, overseeing day-to-day operations and ensuring seamless project delivery across all facilities.",
  },
];

const Leadership = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2">
            Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-elegant border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={leaderPlaceholder} 
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <span className="text-accent text-sm font-medium tracking-wide uppercase">
                  {leader.title}
                </span>
                <h3 className="text-xl font-display font-bold text-foreground mt-2">
                  {leader.name}
                </h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
