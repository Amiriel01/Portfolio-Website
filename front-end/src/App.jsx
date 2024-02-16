import './App.css';
import HeaderLinks from './HeaderLinks';
import HeaderHero from './HeaderHero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import { HelmetProvider } from 'react-helmet-async';
import Icon from './images/icon.png';

function App() {

  return (
    <>
      {/* <HelmetProvider>
        <Helmet>
          <title>Sarah's Software Engineer Portfolio</title>
          <meta name="description" content="Thank you for visiting my portfolio site today. I am a full stack software engineer. I am using this site to showcase some of my projects. Please fill out the contact form if you would like to collaborate on a project or have an employement opportunity that I would be a fit for." />
          <meta name="keywords" content="React Engineer, MongoDB Engineer, Software Engineer, Software Engineer Portfolio, United States Software Engineer, Express, TypeScript, JavaScript Engineer, Full Stack Developer, Full Stack Engineer, Node.js Engineer" />
          <meta property="og:title" content="Sarah's Software Engineer Portfolio" />
          <meta property="og:description" content="Thank you for visiting my portfolio site today. I am a full stack software engineer. I am using this site to showcase some of my projects. Please fill out the contact form if you would like to collaborate on a project or have an employement opportunity that I would be a fit for." />
          <meta property="og:image" content={Icon} />
          <meta property="og:url" content="https://example.com/my-page" /> */}
        {/* </Helmet> */}
        <HeaderLinks />
        <HeaderHero />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Footer />
      {/* // </HelmetProvider> */}
    </>
  )
}

export default App
