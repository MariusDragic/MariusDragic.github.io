import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Exemple d'helper: fadeIn sur scroll
export const fadeInOnScroll = (el, opts = {}) => {
  const { y = 80, duration = 0.9 } = opts;
  gsap.fromTo(
    el,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 0.95,
      duration,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 95%" },
    }
  );
};
