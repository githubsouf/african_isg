import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LogoBall from './LogoBall';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Partnership', href: '#partnership' },
    { name: 'Formation', href: '#formation' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact', onClick: onContactClick },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <LogoBall />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-[#f9d322] to-[#e32b24] bg-clip-text text-transparent">
              African ISG
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                  }}
                  className="relative text-[#eae9df] hover:text-[#f9d322] px-3 py-2 text-sm font-medium transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f9d322] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#eae9df] hover:text-[#f9d322] focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                  setIsOpen(false);
                }}
                className="text-[#eae9df] hover:text-[#f9d322] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;