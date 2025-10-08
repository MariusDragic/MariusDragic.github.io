import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className="text-center mb-8 sm:mb-12 px-2">
      <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold tracking-tight leading-tight break-words">
        {title} <span className="text-secondary">/</span>
      </h2>
      {subtitle && (
        <p className="mt-2 sm:mt-3 text-white/70 max-w-xl mx-auto text-base sm:text-lg px-1 break-words">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
