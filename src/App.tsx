import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume'
import Certifications from './components/Certifications';
import ResumeAndContact from './components/ResumeAndContact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <ResumeAndContact />
      <Footer />
    </div>
  );
}

export default App;