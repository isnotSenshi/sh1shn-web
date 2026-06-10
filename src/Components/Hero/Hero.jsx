import './Hero.css';

const DELAYS = [100, 200, 300, 400, 500];

const items = [
  <p className="hero-overline">Hi, my name is</p>,
  <h1 className="big-heading hero-name">Mathias Lovera.</h1>,
  <h2 className="big-heading hero-tagline">Building at enterprise scale.</h2>,
  <p className="hero-desc">
    I'm a full-stack software engineer based in Latin America, specializing in building
    exceptional digital experiences. Currently at{' '}
    <a href="https://weplan-latam.com" target="_blank" rel="noopener noreferrer">
      WePlan
    </a>
    , where I build software tools that help people organize better and manage their day-to-day more efficiently — always with quality and performance in mind.
  </p>,
  <a className="email-link email-link--yellow" href="#projects">Check out my work!</a>,
];

const Hero = ({ isHome }) => (
  <section id="hero" className={`hero ${isHome ? 'loaded' : ''}`}>
    {items.map((el, i) => (
      <div
        key={i}
        className="hero-item"
        style={{ animationDelay: `${DELAYS[i]}ms` }}
      >
        {el}
      </div>
    ))}
  </section>
);

export default Hero;
