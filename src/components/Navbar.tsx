
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#hero" className="flex items-center">
            <img 
              src="https://ibb.co/pjBMwP5y" 
              alt="LOADR Logo" 
              className="h-10 md:h-12"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-medium text-white hover:text-loadr transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="font-medium text-white hover:text-loadr transition"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="font-medium text-white hover:text-loadr transition"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('track')}
            className="font-medium text-white hover:text-loadr transition"
          >
            Track
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="font-medium text-white hover:text-loadr transition"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="font-medium text-white hover:text-loadr transition"
          >
            Contact
          </button>
        </div>

        <div className="hidden md:block">
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-loadr hover:bg-loadr-dark text-white rounded-full px-6"
          >
            Book a Load
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="py-2 px-4 text-left font-medium text-gray-700 hover:text-loadr"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="py-2 px-4 text-left font-medium text-gray-700 hover:text-loadr"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="py-2 px-4 text-left font-medium text-gray-700 hover:text-loadr"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('track')}
              className="py-2 px-4 text-left font-medium text-gray-700 hover:text-loadr"
            >
              Track
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="py-2 px-4 text-left font-medium text-gray-700 hover:text-loadr"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="py-2 px-4 text-left font-medium text-gray-700 hover:text-loadr"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-loadr hover:bg-loadr-dark text-white w-full rounded-full"
            >
              Book a Load
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
