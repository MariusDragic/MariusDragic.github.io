
import { FaGithub, FaStar, FaCodeBranch, FaGlobe } from "react-icons/fa";

interface ProjectCardProps {
  repo: {
    name: string;
    description?: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language?: string;
    homepage?: string;
  };
}

const ProjectCard = ({ repo }: ProjectCardProps) => {
  const {
    name,
    description,
    html_url,
    stargazers_count,
    forks_count,
    language,
    homepage
  } = repo;

  return (
    <article className="card p-4 sm:p-5 hover:shadow-glow group flex flex-col h-full">
      <div className="flex items-start justify-between gap-2 sm:gap-3 flex-wrap">
        <h3 className="text-base sm:text-lg font-semibold group-hover:text-accent transition-colors break-words">
          {name}
        </h3>
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          className="text-white/80 hover:text-secondary"
          title="View on GitHub"
          aria-label={`Open ${name} on GitHub`}
        >
          <FaGithub />
        </a>
      </div>

      {description && (
        <p className="mt-2 text-xs sm:text-sm text-white/70 break-words">{description}</p>
      )}

  <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-white/60">
        {language && (
          <span className="px-2 py-1 rounded bg-white/5 border border-white/10">
            {language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <FaStar /> {stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <FaCodeBranch /> {forks_count}
        </span>
        {homepage && (
          <a
            className="flex items-center gap-1 hover:text-secondary"
            href={homepage}
            target="_blank"
            rel="noreferrer"
          >
            <FaGlobe /> Demo
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
