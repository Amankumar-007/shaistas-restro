import React, { useState } from 'react';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { branding } from '../constants/branding';

const scrollToSection = (e, sectionId) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full h-12 bg-[#F4B42F] text-[#4A2C2A] sticky top-0 z-50 shadow-md font-serif">
      <div className="container mx-auto px-4  flex items-center justify-between">
        
        {/* Left: Logo Area - Clickable */}
        <div className="flex items-center gap-3">
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          >
            {/* Circular Logo Placeholder */}
            <div className="w-12 h-12 rounded-full bg-[#3E1F18] flex items-center justify-center text-[#F4B42F] border-2 border-[#3E1F18] shrink-0">
              <span className="font-script text-xs text-center leading-tight">M's<br/>Kitchen</span>
            </div>
            <h1 className="hidden md:block font-cursive text-lg lg:text-xl font-bold italic tracking-wide">
              {branding.slogan}
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-6 text-sm font-bold tracking-wide ml-12">
          {branding.navLinks.map((link) => (
            <a 
              key={link} 
              href={link === 'Zaika-E-Khaas' ? '#' : `#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-white transition-colors uppercase text-[13px]"
              onClick={(e) => {
                if (link === 'Zaika-E-Khaas') {
                  e.preventDefault();
                  navigate('/menu');
                } else {
                  scrollToSection(e, link.toLowerCase().replace(/\s+/g, '-'));
                }
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button className="hover:scale-110 transition-transform">
            <ShoppingCart className="w-5 h-5 text-white" />
          </button>
          
          <button className="bg-[#3E1F18] text-white px-5 py-1.5 rounded text-sm font-bold hover:bg-black transition-colors">
            Login
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#EAA622] border-t border-[#d89518]">
          <div className="flex flex-col p-4 gap-3 font-bold text-[#4A2C2A]">
             <h1 
               className="md:hidden font-cursive text-lg mb-2 text-center border-b border-[#4A2C2A]/20 pb-2 cursor-pointer hover:opacity-80 transition-opacity"
               onClick={() => {
                 navigate('/');
                 setIsMobileMenuOpen(false);
               }}
             >
                {branding.slogan}
             </h1>
            {branding.navLinks.map((link) => (
              <a 
                key={link} 
                href={link === 'Zaika-E-Khaas' ? '#' : `#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="py-2 hover:pl-2 transition-all border-b border-[#4A2C2A]/10"
                onClick={(e) => {
                  if (link === 'Zaika-E-Khaas') {
                    e.preventDefault();
                    navigate('/menu');
                    setIsMobileMenuOpen(false);
                  } else {
                    scrollToSection(e, link.toLowerCase().replace(/\s+/g, '-'));
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;