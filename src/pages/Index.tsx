import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Leadership from "@/components/Leadership";
import Services from "@/components/Services";
import Facilities from "@/components/Facilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <MissionVision />
      <Leadership />
      <Services />
      <Facilities />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
