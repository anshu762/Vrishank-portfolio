import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';
import Projects from './components/sections/Projects';
import Activities from './components/sections/Activities';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CursorFollower from './components/CursorFollower';

function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      <CursorFollower />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Achievements />
      <Projects />
      <Activities />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;