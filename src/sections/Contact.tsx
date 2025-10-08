import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../components/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // 🟩 Animation principale de la section
    gsap.fromTo(
      el,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 0.95,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          once: true,
        },
      }
    );

    // 🟦 Animation du titre
    const title = el.querySelectorAll(".contact-stagger");
    gsap.fromTo(
      title,
      { y: 110, opacity: 0 },
      {
        y: 0,
        opacity: 0.95,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          once: true,
        },
      }
    );

    // 🟪 Animation du bloc contact (identique aux project cards)
    const card = el.querySelectorAll<HTMLDivElement>(".contact-card");
    if (card.length > 0) {
      gsap.set(card, { opacity: 0, y: 60, scale: 0.985, boxShadow: "0 0 0 rgba(0,0,0,0)" });
      gsap.to(card, {
        y: 0,
        opacity: 0.95,
        scale: 1,
        boxShadow: "0 12px 36px rgba(2,6,23,0.55)",
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none reset",
          once: false,
        },
        onReverseComplete: () => {
          card.forEach((c) => (c.style.boxShadow = ""));
        },
      });
    }
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

        {/* 🟦 Carte contact avec EXACTEMENT le même effet visuel que Skills/Projects */}
        <div className="card contact-card p-6 sm:p-8 md:p-10 max-w-xl mx-auto text-center hover:scale-[1.04] hover:shadow-glow transition-transform duration-200 cursor-pointer">
  <p className="text-white/80 text-sm sm:text-base">
    You can email me directly. I reply quickly.
  </p>

  <a
    href="mailto:marius.dragic@gmail.com"
    className="inline-block mt-6 px-5 py-3 rounded-lg bg-secondary text-black font-semibold hover:bg-accent transition text-sm sm:text-base shadow-glow"
  >
    Send an email
  </a>

  <div className="mt-6 text-xs sm:text-sm text-white/50">
    <p>Based in Paris, France • Available for remote/hybrid</p>
    <p className="mt-1">Last site update: {new Date().toLocaleDateString()}</p>
  </div>
</div>

      </div>
    </section>
  );
};

export default Contact;
