import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import SectionTitle from "../components/SectionTitle";


const Contact = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
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
    // Stagger children (title, card, etc.)
    const children = el.querySelectorAll(".contact-stagger, .contact-card");
    gsap.fromTo(
      children,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.13,
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
    <section id="contact" className="section-pad">
      <div ref={sectionRef} className="container-main">
        <div className="contact-stagger">
          <SectionTitle
            title="Contact"
            subtitle="Want to collaborate, chat, or start a project?"
          />
        </div>

        <div className="card p-4 sm:p-6 md:p-8 max-w-xl mx-auto text-center contact-card">
          <p className="text-white/80 text-sm sm:text-base">
            You can email me directly. I reply quickly.
          </p>
          <a
            href="mailto:marius.dragic@gmail.com"
            className="inline-block mt-5 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-secondary text-black font-semibold hover:bg-accent transition shadow-glow text-sm sm:text-base"
          >
            Send an email
          </a>

          <div className="mt-5 sm:mt-6 text-xs sm:text-sm text-white/50">
            <p>Based in Paris, France • Available for remote/hybrid</p>
            <p className="mt-1">Last site update: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
