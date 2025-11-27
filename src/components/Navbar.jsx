import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Explore Foods', path: '/explore' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Team', path: '/team' }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroPosition = heroSection.getBoundingClientRect().top;
        setIsScrolled(window.scrollY > heroPosition + 50);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full h-16 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md' 
        : 'md:bg-white/90 md:backdrop-blur-sm bg-transparent shadow-none'
    }`}>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tight transition-colors duration-300 text-gray-900">
          <span className="text-[#548774]">FOOD</span>
          <span className="text-yellow-500">IES</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-[#3d6158]' 
                  : 'text-gray-800 hover:text-[#3d6158]'
              } group`}
            >
              <span className="relative">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#548774] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          ))}
        </div>

        {/* Phone Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="tel:1200345123" 
            className="bg-[#548774] hover:bg-[#3d6158] text-white px-5 py-1.5 rounded-full font-medium flex items-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Phone size={18} />
            <span>1200 345 123</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="py-3 px-4 -mx-4 text-gray-700 hover:text-[#3d6158] hover:bg-gray-50 rounded-lg font-medium transition-all duration-200 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative">
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#548774] transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'group-hover:w-full'
                  }`}></span>
                </span>
              </Link>
            ))}
            <a 
              href="tel:1200345123" 
              className="bg-[#548774] hover:bg-[#3d6158] text-white px-6 py-2 rounded-full font-medium flex items-center justify-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg mt-4"
            >
              <Phone size={18} />
              <span>1200 345 123</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;