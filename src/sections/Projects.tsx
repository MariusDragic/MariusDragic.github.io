import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

const GITHUB_USER = "MariusDragic";

// Liste des dépôts à afficher (noms normalisés en minuscules)
const SELECTED_REPOS = ["railwaygen", "railwayrag", "rl4ctrading", "signaldistanceencoder"];

const Projects = () => {
  type Repo = {
    id: number;
    name: string;
    description?: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language?: string;
    homepage?: string;
    fork?: boolean;
    updated_at?: string;
  };

  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRepos = async () => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`
      );
      if (!res.ok) throw new Error("GitHub API error");
      const data = (await res.json()) as Repo[];

      // Normalisation du nom (ignore tirets/underscores/casse)
      const normalize = (s: string) => s.toLowerCase().replace(/[-_]/g, "");

      // Filtrer uniquement les dépôts sélectionnés
      const filtered = data
        .filter((r) => !r.fork && SELECTED_REPOS.includes(normalize(r.name)))
        .sort((a, b) => b.stargazers_count - a.stargazers_count);

      setRepos(filtered);
    } catch (e) {
      console.error(e);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  // Animation GSAP
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // ScrollTrigger already registered at module scope
    // Section intro (title + container) - more vertical + softer fade, later trigger
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

    // Stagger intro for top-level children (title / grids)
    const introChildren = el.querySelectorAll(".projects-stagger, .projects-grid");
    gsap.fromTo(
      introChildren,
      { y: 110, opacity: 0 },
      {
        y: 0,
        opacity: 0.95,
        duration: 1,
        stagger: 0.14,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          once: true,
        },
      }
    );

    // Per-card animation: stronger vertical offset + faded endpoint + scale
    const cards = el.querySelectorAll<HTMLDivElement>(".projects-grid .projects-card");
    if (cards.length > 0) {
      gsap.set(cards, { opacity: 0, y: 60, scale: 0.985, boxShadow: '0 0 0 rgba(0,0,0,0)' });
      gsap.to(cards, {
        y: 0,
        opacity: 0.95,
        scale: 1,
        boxShadow: '0 12px 36px rgba(2,6,23,0.55)',
        duration: 0.95,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none reset",
          once: false,
        },
        onReverseComplete: () => {
          // remove shadow when reversing
          cards.forEach((c) => (c.style.boxShadow = ""));
        },
      });
    }

    // Animate group headings separately for a subtle pop-in
    const headings = el.querySelectorAll<HTMLHeadingElement>('.group-heading');
    if (headings.length > 0) {
      gsap.fromTo(
        headings,
        { y: 30, opacity: 0, scale: 0.995 },
        {
          y: 0,
          opacity: 0.95,
          scale: 1,
          duration: 0.85,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: 'top 95%', once: true },
        }
      );
    }

    // no cleanup required — ScrollTrigger handles lifecycle; leaving hooks in place
    return undefined;
  }, []);

  return (
    <section id="projects" className="section-pad">
      <div ref={sectionRef} className="container-main">
        <div className="projects-stagger">
          <SectionTitle
            title="My Projects"
            subtitle="A selection of GitHub repositories — focused on AI, RAG, and generative research."
          />
        </div>

        {loading ? (
          <p className="text-center text-white/70 projects-stagger">Loading...</p>
        ) : repos.length === 0 ? (
          <p className="text-center text-white/70 projects-stagger">No repositories found.</p>
        ) : (
          <div className="space-y-10">
            {/* Professional Projects */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 group-heading">
                Professional Projects{" "}
                <span className="text-secondary text-2xl leading-none">/</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 projects-grid">
                {repos
                  .filter((r) => ["railwaygen", "railwayrag"].includes(r.name.toLowerCase()))
                  .map((r) => (
                    <div key={r.id} className="projects-card">
                      <ProjectCard repo={r} />
                    </div>
                  ))}
              </div>
            </div>

            {/* Academic Research Projects */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 group-heading">
                Academic Research Projects{" "}
                <span className="text-secondary text-2xl leading-none">/</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 projects-grid">
                {repos
                  .filter((r) =>
                    ["rl4ctrading", "signaldistanceencoder"].includes(r.name.toLowerCase())
                  )
                  .map((r) => (
                    <div key={r.id} className="projects-card">
                      <ProjectCard repo={r} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
