import { useState, useEffect, useRef } from 'react';
import { useScrollDirection, useOnClickOutside } from '../../Utils/hooks';
import { navLinks } from '../../Constants';
import resumePDF from '../../assets/Mathias_Lovera_CV_2026.pdf';
import robotLogo from '../../assets/Assets/robot-logo.png';
import './Navbar.css';

const HexLogo = () => (
  <a href="/" aria-label="home" className="nav-logo">
    <img src={robotLogo} alt="logo" />
  </a>
);

const Navbar = ({ isHome }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollDirection, scrolled } = useScrollDirection();
  const wrapperRef = useRef(null);

  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const headerClass = [
    'navbar',
    scrolled ? 'scrolled' : '',
    scrollDirection === 'down' ? 'nav-hidden' : '',
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClass} ref={wrapperRef}>
      <nav>
        <HexLogo />

        <div className="nav-links">
          <ol>
            {navLinks.map(({ name, url }, i) => (
              <li
                key={name}
                className={isHome ? 'anim' : ''}
                style={{ animationDelay: isHome ? `${(i + 1) * 100}ms` : '0ms' }}
              >
                <a href={url}>{name}</a>
              </li>
            ))}
          </ol>
          <a
            className={`resume-btn ${isHome ? 'anim' : ''}`}
            style={{ animationDelay: isHome ? `${(navLinks.length + 1) * 100}ms` : '0ms' }}
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div
        className={`menu-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <aside className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ol>
          {navLinks.map(({ name, url }, i) => (
            <li
              key={name}
              style={{ transitionDelay: menuOpen ? `${i * 50 + 100}ms` : '0ms' }}
              className={menuOpen ? 'slide-in' : ''}
            >
              <a href={url} onClick={() => setMenuOpen(false)}>{name}</a>
            </li>
          ))}
        </ol>
        <a
          className="resume-btn"
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          style={{ transitionDelay: menuOpen ? `${navLinks.length * 50 + 100}ms` : '0ms' }}
        >
          Resume
        </a>
      </aside>
    </header>
  );
};

export default Navbar;
