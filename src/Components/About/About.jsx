import { useReveal } from '../../Utils/hooks';
import AsciiCube from '../AsciiCube/AsciiCube';
import './About.css';

const skills = [
  'TypeScript',
  'Java',
  'React',
  'Nest',
  'GraphQL',
  'NodeJS',
  'Electron',
  'Flutter'
];

const About = () => {
  const ref = useReveal();

  return (
    <section id="about" className="about reveal" ref={ref}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="about-inner">
        <div className="about-text">
          <p>
            I'm a Full Stack Software Developer based in Buenos Aires,
            Argentina, with 6+ years of experience building and maintaining web
            applications at enterprise scale.
          </p>
          <p>
            I work across the entire stack — from crafting responsive frontends with React
            and TypeScript, to building powerful backend services with a versatile toolkit
            tailored to each project's needs, to taking ownership of production deployments and
            DevOps practices. Currently at {' '}
            <a href="https://weplan-latam.com" target="_blank" rel="noopener noreferrer">
              WePlan
            </a>
            ,  where I develop internal tools and systems for managing users at
            enterprise scale in the telecommunications industry.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skills-list">
            {skills.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <AsciiCube />
      </div>
    </section>
  );
};

export default About;
