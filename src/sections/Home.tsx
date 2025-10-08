import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Remplace par ton image: place /src/assets/profile.jpg
import profile from "../assets/pdp.jpg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Section reveal
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      }
    );
    // Stagger children
    const children = el.querySelectorAll(".hero-line, .pfp, .socials");
    gsap.fromTo(
      children,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section id="home" className="section-pad min-h-[90vh] flex items-center justify-center">
      <div ref={containerRef} className="container-main flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-2">
        <div className="pfp relative mb-8">
          <img
            src={profile}
            alt="Portrait of Marius Dragic"
            className="w-28 h-28 xs:w-36 xs:h-36 md:w-44 md:h-44 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-primary/70 shadow-glow mx-auto"
          />
          <div className="absolute -inset-1 rounded-full pointer-events-none animate-pulse blur-md bg-secondary/10"></div>
        </div>
        <div className="flex flex-col items-center text-center w-full">
          <h1 className="hero-line text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 flex items-center justify-center gap-3">
            Hi, I'm Marius <span className="text-secondary text-4xl md:text-5xl lg:text-6xl leading-none">/</span>
          </h1>
          <div className="space-y-1 md:space-y-2">
            <p className="hero-line text-white/80 text-lg md:text-xl max-w-2xl">
              Data Scientist & ML Engineer from CentraleSupélec.<br />
              Specialized in Research & Mathematical Modeling.<br />
              Passionate about GenAI, Computer Vision, and RAG/LLMs.
            </p>
          </div>
        </div>
        <div className="socials mt-6 flex items-center gap-4 flex-wrap justify-center w-full">
          <a
            href="https://www.linkedin.com/in/marius-dragic-a8192324a/"
            target="_blank"
            rel="noreferrer"
            className="p-3 md:p-4 rounded-lg border border-white/10 hover:border-white/20 hover:text-accent transition"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:marius.dragic@gmail.com"
            className="p-3 md:p-4 rounded-lg border border-white/10 hover:border-white/20 hover:text-accent transition"
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope size={28} />
          </a>
          <a
            href="https://github.com/MariusDragic"
            target="_blank"
            rel="noreferrer"
            className="p-3 md:p-4 rounded-lg border border-white/10 hover:border-white/20 hover:text-accent transition"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
