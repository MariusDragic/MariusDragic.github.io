import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Animation de fond subtile (gradient mouvant)
    const gradient = document.body;
    let x = 0;
    const id = setInterval(() => {
      x = (x + 1) % 360;
      gradient.style.backgroundImage = `radial-gradient(1200px 600px at 10% 10%, rgba(30,58,138,0.15), transparent),
      radial-gradient(800px 400px at 90% 20%, rgba(59,130,246,0.12), transparent),
      radial-gradient(1000px 500px at 30% 80%, rgba(96,165,250,0.10), transparent)`;
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
