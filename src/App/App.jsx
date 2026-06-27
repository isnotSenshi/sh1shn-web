import Navbar from '../Components/Navbar/Navbar';
import SocialLinks from '../Components/SocialLinks/SocialLinks';
import Email from '../Components/Email/Email';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Experience from '../Components/Experience/Experience';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import './App.css';

const App = () => (
  <div className="app">
    <Navbar isHome />
    <SocialLinks isHome />
    <Email isHome />
    <div id="content">
      <main>
        <Hero isHome />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  </div>
);

export default App;
