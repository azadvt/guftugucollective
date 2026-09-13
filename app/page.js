import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import FeaturedPrograms from './components/FeaturedPrograms';
import Press from './components/Press';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <div className="grain"></div>
      <Navbar />
      <main>
        <Hero />
        <div className="sectionDivider"></div>
        <About />
        <div className="sectionDivider"></div>
        <Team />
        <div className="sectionDivider"></div>
        <FeaturedPrograms />
        <div className="sectionDivider"></div>
        <Press />
        <div className="sectionDivider"></div>
        <Instagram />
        <div className="sectionDivider"></div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
