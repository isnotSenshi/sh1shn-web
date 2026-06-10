import { socialMedia } from '../../Constants';
import { IconGitHub, IconLinkedIn, IconEmail } from '../Icons';
import './SocialLinks.css';

const ICONS = { GitHub: IconGitHub, LinkedIn: IconLinkedIn, Email: IconEmail };

const SocialLinks = ({ isHome }) => (
  <div className={`social-links ${isHome ? 'anim' : ''}`}>
    <ul>
      {socialMedia.map(({ name, url }) => {
        const Icon = ICONS[name];
        return (
          <li key={name}>
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
              {Icon && <Icon />}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

export default SocialLinks;
