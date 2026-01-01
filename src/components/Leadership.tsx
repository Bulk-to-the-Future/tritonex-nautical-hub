import leaderPlaceholder from "@/assets/leader-placeholder.png";
import leaderCeo from "@/assets/leader-ceo.jpg";
import leaderCoo from "@/assets/leader-coo.jpg";

const leaders = [
  {
    title: "Chief Executive Officer",
    name: "Pavithran Alokkan",
    image: leaderCeo,
  },
  {
    title: "Chief Technical Officer",
    name: "Dhanasamy S",
    image: leaderPlaceholder,
  },
  {
    title: "Chief Operating Officer",
    name: "TP Jayakumar",
    image: leaderCoo,
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
              <div className="flex justify-center pt-6">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent/20">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <span className="text-accent text-sm font-medium tracking-wide uppercase">
                  {leader.title}
                </span>
                <h3 className="text-xl font-display font-bold text-foreground mt-2">
                  {leader.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
