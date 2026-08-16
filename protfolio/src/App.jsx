import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'experience',
        'education',
        'skills',
        'projects',
        'contact',
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ink text-white">
      {/* Fixed Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-ink via-surface to-ink -z-10"></div>

      {/* Grain texture + custom cursor */}
      <div className="grain-overlay" />
      <CustomCursor />

      {/* Navbar */}
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />

      {/* All Sections */}
      <Hero scrollToSection={scrollToSection} />
      <About scrollToSection={scrollToSection} />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;