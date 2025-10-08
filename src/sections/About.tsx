
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SectionTitle from "../components/SectionTitle";
import cvPreview from "../assets/cv_preview.png"; // aperçu image
import { FaCloud, FaComments, FaGraduationCap, FaLayerGroup, FaServer, FaChartBar, FaDownload } from "react-icons/fa";

const items = [
  { icon: <FaCloud size={28} />, title: "Cloud Computing", desc: "Storage, training, and deployment of models." },
  { icon: <FaComments size={28} />, title: "NLP", desc: "Natural language understanding and generation." },
  { icon: <FaGraduationCap size={28} />, title: "Machine Learning", desc: "Theory, math, and modern implementations." },
  { icon: <FaServer size={28} />, title: "Model Deployment", desc: "REST APIs & CI/CD for production." },
  {
    icon: <FaLayerGroup size={28} />,
    title: "RAG / LLM",
    desc: "Built Retrieval-Augmented Generation pipelines with LLM integration for intelligent document search and reasoning in real-world applications."
  },
  {
    icon: <FaChartBar size={28} />,
    title: "GenAI",
    desc: "Developed generative AI frameworks using Latent Diffusion Models and ControlNet to synthesize rare visual scenarios and enhance training datasets."
  },
];

const About = () => {
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
    // Stagger children (cards, SectionTitle, resume)
    const children = el.querySelectorAll(
      ".skills-stagger, .skills-card, .resume-stagger"
    );
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
    <section id="about" className="section-pad">
      <div ref={sectionRef} className="container-main">
        <SectionTitle
          title="Skills"
          subtitle="I design reliable, high-performance AI solutions — from generative modeling to large-scale deployment."
          className="skills-stagger"
        />

        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Machine Learning */}
            <div className="card p-5 flex flex-col items-start hover:scale-[1.04] hover:shadow-glow transition-transform duration-200 cursor-pointer skills-card">
              <h3 className="text-xl font-semibold text-white mb-1">Machine Learning</h3>
              <p className="text-white/70 text-sm">Core algorithms, optimization, and model evaluation.</p>
            </div>
            {/* 2. Generative AI */}
            <div className="card p-5 flex flex-col items-start hover:scale-[1.04] hover:shadow-glow transition-transform duration-200 cursor-pointer skills-card">
              <h3 className="text-xl font-semibold text-white mb-1">Generative AI</h3>
              <p className="text-white/70 text-sm">Diffusion, GANs, and data-driven image synthesis.</p>
            </div>
            {/* 3. Computer Vision */}
            <div className="card p-5 flex flex-col items-start hover:scale-[1.04] hover:shadow-glow transition-transform duration-200 cursor-pointer skills-card">
              <h3 className="text-xl font-semibold text-white mb-1">Computer Vision</h3>
              <p className="text-white/70 text-sm">Detection, segmentation, and multi-modal perception.</p>
            </div>
            {/* 4. RAG / LLM Systems */}
            <div className="card p-5 flex flex-col items-start hover:scale-[1.04] hover:shadow-glow transition-transform duration-200 cursor-pointer skills-card">
              <h3 className="text-xl font-semibold text-white mb-1">RAG / LLM Systems</h3>
              <p className="text-white/70 text-sm">Intelligent retrieval and language understanding pipelines.</p>
            </div>
            {/* 5. MLOps & Deployment */}
            <div className="card p-5 flex flex-col items-start hover:scale-[1.04] hover:shadow-glow transition-transform duration-200 cursor-pointer skills-card">
              <h3 className="text-xl font-semibold text-white mb-1">MLOps & Deployment</h3>
              <p className="text-white/70 text-sm">APIs, Docker, CI/CD, and scalable model delivery.</p>
            </div>
            {/* 6. Cloud & Engineering */}
            <div className="card p-5 flex flex-col items-start hover:scale-[1.04] hover:shadow-glow transition-transform duration-200 cursor-pointer skills-card">
              <h3 className="text-xl font-semibold text-white mb-1">Cloud & Engineering</h3>
              <p className="text-white/70 text-sm">Compute, data pipelines, and distributed training.</p>
            </div>
          </div>
        </div>

        {/* Resume viewer below */}
        <div className="max-w-5xl mx-auto w-full mt-12 px-2 resume-stagger">
          <SectionTitle title="Resume" />
          <div className="w-full flex flex-col items-center justify-center gap-6">
            <img
              src={cvPreview}
              alt="Preview of Marius Dragic's CV"
              className="w-full max-w-2xl rounded-xl shadow-xl object-contain bg-white p-2 sm:p-4"
              style={{ background: 'white' }}
            />
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-black font-semibold rounded hover:bg-accent transition text-base shadow-glow"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
