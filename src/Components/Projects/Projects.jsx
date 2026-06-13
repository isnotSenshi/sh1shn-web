import { useReveal } from '../../Utils/hooks';
import { featuredProjects, otherProjects } from '../../Constants';
import { IconGitHub, IconExternal, IconFolder, IconDownload } from '../Icons';
import './Projects.css';

const FeaturedProject = ({ project, index }) => {
  const ref = useReveal();
  const isRight = index % 2 !== 0;

  return (
    <li ref={ref} className={`featured-project reveal ${isRight ? 'right' : ''}`}>
      <div className="fp-content">
        <p className="fp-overline">Featured Project</p>
        <h3 className="fp-title">
          {project.external
            ? <a href={project.external} target="google.com" rel="noopener noreferrer">{project.title}</a>
            : project.title
          }
        </h3>
        <div className="fp-description">
          <p>{project.description}</p>
        </div>
        <ul className="fp-tech">
          {project.tech.map(t => <li key={t}>{t}</li>)}
        </ul>
        <div className="fp-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repo">
              <IconGitHub />
            </a>
          )}
          {project.external && (
            <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
              <IconExternal />
            </a>
          )}
          {project.download && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Download">
              <IconDownload />
            </a>
          )}
        </div>
      </div>

      <div className="fp-image">
        <a href={project.external || project.github || null} target="_blank" rel="noopener noreferrer">
          <div className={`fp-mockup mockup-${index + 1}`} />
        </a>
      </div>
    </li>
  );
};

const OtherProject = ({ project }) => {
  const ref = useReveal();
  return (
    <li ref={ref} className="other-project reveal">
      <div className="op-inner">
        <header>
          <div className="op-top">
            <div className="op-folder"><IconFolder /></div>
            <div className="op-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <IconGitHub />
                </a>
              )}
              {project.external && (
                <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="External">
                  <IconExternal />
                </a>
              )}
            </div>
          </div>
          <h3 className="op-title">
            <a href={project.external || project.github || '#'} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h3>
          <p className="op-desc">{project.description}</p>
        </header>
        <footer>
          <ul className="op-tech">
            {project.tech.map(t => <li key={t}>{t}</li>)}
          </ul>
        </footer>
      </div>
    </li>
  );
};

const Projects = () => {
  const otherRef = useReveal();

  return (
    <section id="projects">
      <h2 className="numbered-heading">Some Things I've Built</h2>

      {/* 03. fatures */}
      <ul className="featured-list">
        {featuredProjects.map((p, i) => (
          <FeaturedProject key={i} project={p} index={i} />
        ))}
      </ul>

      <div className="other-section">
        <h3 className="other-title reveal" ref={otherRef}>Other Noteworthy Projects</h3>
        <ul className="other-grid">
          {otherProjects.map((p, i) => (
            <OtherProject key={i} project={p} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
