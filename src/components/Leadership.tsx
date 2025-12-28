import leaderPlaceholder from "@/assets/leader-placeholder.png";

const leaders = [
  {
    title: "Chief Executive Officer",
    name: "Pavithran Alokkan",
    description: "A seasoned marine Chief Engineer with over 36 years of experience in the industry - a combination of 17 years of sailing experience and more than 19 years in senior shipyard leadership roles across India and overseas. With extensive expertise in ship operations, construction, repair and modernization, he has successfully led ship-building projects, vessel deliveries and rig refits with exceptional efficiency and precision. He combines deep technical expertise with strategic foresight to be a visionary industry leader, focused on driving innovation, operational excellence and sustainable growth in the maritime sector.",
  },
  {
    title: "Chief Technical Officer",
    name: "Dhanasamy S",
    description: "Highly accomplished Marine Engineer with over four decades of expertise in ship repair, shipbuilding and offshore projects. His career encompasses leadership on FPSOs, gas carriers, tankers and LNG vessels, while spearheading facility development and process optimization initiatives that enhanced operational efficiency, safety and productivity across shipyards.",
  },
  {
    title: "Chief Operating Officer",
    name: "TP Jayakumar",
    description: "A seasoned marine Chief Engineer with over 36 years of experience in the industry - a combination of 17 years of sailing experience and more than 19 years in senior shipyard leadership roles across India and overseas. With extensive expertise in ship operations, construction, repair and modernization, he has successfully led ship-building projects, vessel deliveries and rig refits with exceptional efficiency and precision. He combines deep technical expertise with strategic foresight to be a visionary industry leader, focused on driving innovation, operational excellence and sustainable growth in the maritime sector.",
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
