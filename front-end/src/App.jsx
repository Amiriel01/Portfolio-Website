import './App.css';
import { Route, Routes } from 'react-router-dom';
import HeaderLinks from './HeaderLinks';
import HeaderHero from './HeaderHero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

function App() {

  return (
    <>
      <HeaderLinks />
      <HeaderHero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </>
  )
}

export default App
