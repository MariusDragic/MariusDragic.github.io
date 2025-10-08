import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Exemple d'helper: fadeIn sur scroll
export const fadeInOnScroll = (el, opts = {}) => {
  const { y = 20, duration = 0.6 } = opts;
  gsap.fromTo(
    el,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 80%" },
    }
  );
};
