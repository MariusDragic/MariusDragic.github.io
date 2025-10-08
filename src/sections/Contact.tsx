import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import SectionTitle from "../components/SectionTitle";


const Contact = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    // Section reveal (more vertical + softer fade, trigger later)
    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 0.95,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 95%", once: true },
      }
    );

    // Heading pop-in
    const heading = el.querySelector<HTMLDivElement>('.contact-stagger');
    if (heading) {
      gsap.fromTo(
        heading,
        { y: 18, opacity: 0, scale: 0.995 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%', once: true } }
      );
    }

    // Card reveal with subtle shadow and scale
    const card = el.querySelector<HTMLDivElement>('.contact-card');
    if (card) {
      gsap.set(card, { opacity: 0, y: 18, scale: 0.995, boxShadow: '0 0 0 rgba(0,0,0,0)' });
      gsap.to(card, {
        y: 0,
        opacity: 1,
        scale: 1,
        boxShadow: '0 14px 40px rgba(2,6,23,0.55)',
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reset', once: false },
        onReverseComplete: () => { card.style.boxShadow = ''; },
      });
    }
    // Heading pop-in
    if (heading) {
      gsap.fromTo(
        heading,
        { y: 30, opacity: 0, scale: 0.995 },
        { y: 0, opacity: 0.95, scale: 1, duration: 0.85, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 95%', once: true } }
      );
    }
    
    // Card reveal with subtle shadow and scale
    if (card) {
      gsap.set(card, { opacity: 0, y: 40, scale: 0.99, boxShadow: '0 0 0 rgba(0,0,0,0)' });
      gsap.to(card, {
        y: 0,
        opacity: 0.95,
        scale: 1,
        boxShadow: '0 18px 48px rgba(2,6,23,0.55)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 95%', toggleActions: 'play none none reset', once: false },
        onReverseComplete: () => { card.style.boxShadow = ''; },
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
