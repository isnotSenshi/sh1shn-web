import { useReveal } from '../../Utils/hooks';
import { email } from '../../Constants';
import './Contact.css';

const Contact = () => {
  const ref = useReveal();

  return (
    <section id="contact" className="contact reveal" ref={ref}>
      <h2 className="numbered-heading">What's Next?</h2>
      <h2 className="contact-title">Get In Touch</h2>
      <p>
        I'm currently open to new opportunities and my inbox is always open. Whether you have
        a question, a project in mind, or just want to say hi — I'll do my best to get back
        to you!
      </p>
      <a className="email-link email-link--yellow" href={`mailto:${email}`}>Say Hello</a>
    </section>
  );
};

export default Contact;
