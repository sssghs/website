import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Curriculum', path: '/curriculum' },
    { title: 'Campus', path: '/campus' },
    { title: 'Events', path: '/events' },
    { title: 'Mandatory Disclosures', path: '/mandatory-disclosures' },
    { title: 'Contact', path: '/contact' },    
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        'sticky top-0 w-full z-50 transition-all duration-300 bg-white/90',
        isScrolled ? 'bg-white shadow-md py-3' : 'py-5'
      )}
      style={{ position: 'sticky', top: 0 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <img src="/Logo.png" // or "src/assets/logo.png" if you're using Vite or similar
            alt="School Logo" 
            className="w-full h-full object-contain" 
          />
          </div>
          <div className="font-serif font-bold text-xl text-school-navy">Sri Sathya Sai Grammar High School</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn('nav-item', isActive(link.path) && 'nav-item-active')}
            >
              {link.title}
            </Link>
          ))}
          <Link to="/admissions">
            <Button className="btn-primary transition-all duration-300 hover:bg-school-gold hover:text-white hover:scale-105">
              Apply Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-school-navy"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-x-0 top-[60px] bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out overflow-hidden',
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'nav-item py-3 px-4 rounded-md',
                isActive(link.path) && 'nav-item-active bg-muted'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <Button className="btn-primary w-full">Apply Now</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;