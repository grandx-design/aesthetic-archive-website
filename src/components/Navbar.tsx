
import { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl font-display font-bold tracking-tight">
              PORTFOLIO
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#projects" className="text-sm font-medium hover:text-primary/70 transition-colors">
              Projects
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary/70 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary/70 transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <a href="#contact">
              <GradientButton>Get in Touch</GradientButton>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass animate-fade-in absolute top-full left-0 w-full">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/5 transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/5 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/5 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
            
            <div className="pt-2 px-3">
              <a href="#contact" onClick={toggleMenu}>
                <GradientButton className="w-full justify-center">Get in Touch</GradientButton>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
