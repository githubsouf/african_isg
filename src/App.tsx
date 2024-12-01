import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Partnership from './components/Partnership';
import Formation from './components/Formation';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { useScrollTo } from './hooks/useScrollTo';

function App() {
  const [showModal, setShowModal] = useState(false);
  const scrollToSection = useScrollTo();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    setShowModal(false);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-light">
      <Navbar onContactClick={handleContactClick} />
      <Hero onContactClick={handleContactClick} />
      <Services />
      <Projects />
      <Partnership />
      <Formation onContactClick={handleContactClick} />
      <About />
      <Contact />
      <Footer />
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onContact={handleContactClick}
      />
    </div>
  );
}

export default App;