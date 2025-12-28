const MissionVision = () => {
  return (
    <section id="mission" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Our Purpose
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3">
            Mission & <span className="text-accent">Vision</span>
          </h2>
        </div>

        {/* Mission and Vision Cards */}
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {/* Mission */}
          <div className="bg-background p-8 rounded-xl shadow-lg">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide world-class shipbuilding and marine solutions through effective project 
              management, process optimization and continuous modernization. By integrating 
              operational efficiency, upholding integrity and ensuring timely execution with 
              the highest quality standards, we deliver lasting value to clients, maintain 
              reliable operations and strengthen India's standing as a premier global maritime hub.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-background p-8 rounded-xl shadow-lg">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To position India as a global powerhouse in shipbuilding and marine solutions, 
              in line with our Prime Minister's vision, by harnessing our expertise across 
              domestic and international shipyards and maritime operations. We aim to lead 
              the industry through innovation in shipbuilding and offshore services, setting 
              new global standards in quality, sustainability and unwavering customer trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;