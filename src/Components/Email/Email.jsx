import { email } from '../../Constants';
import './Email.css';

const Email = ({ isHome }) => (
  <div className={`email-side ${isHome ? 'anim' : ''}`}>
    <a href={`mailto:${email}`}>{email}</a>
  </div>
);

export default Email;
