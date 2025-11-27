import React from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';
import HeroImage from '../assets/Hero.webp';

const OpeningHoursSection = () => {
  // Handler for Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full font-serif">
      
      {/* 1. White Title Section */}
      <div className="bg-[#EAF4EE] py-8 flex justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3a3a3a] tracking-tight">
          Opening Hours
        </h2>
      </div>

      {/* 2. Dark Background Image Section */}
      <div 
        className="relative w-full h-[350px] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${HeroImage})`
        }}
      >
        {/* Darker Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 space-y-3">
          
          {/* Main Time */}
          <p className="text-lg md:text-2xl font-medium tracking-wide">
            Opening Hours 12:30 PM to 11:45 PM
          </p>

          {/* Days */}
          <p className="text-base md:text-xl tracking-wide">
            Wednesday - Monday
          </p>

          {/* Phone Numbers */}
          <p className="text-sm md:text-lg mt-2">
            Call: +91-9643803833, +91-9643803813
          </p>

          {/* Email */}
          <p className="text-sm md:text-lg">
            Email: shaistas@shaistas.in
          </p>
        </div>
      </div>

      {/* 3. Floating Action Buttons (Bottom Right) */}
      <div className="fixed bottom-8 right-8 flex gap-3 z-50">
        
        {/* Phone Button */}
        <a 
          href="tel:+919643803833" 
          className="w-12 h-12 rounded-full bg-[#3d1815] hover:bg-[#5a2420] text-white flex items-center justify-center transition-colors duration-300 shadow-lg"
          aria-label="Call Us"
        >
          <Phone size={20} fill="currentColor" className="text-white" />
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919643803833" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#3d1815] hover:bg-[#5a2420] text-white flex items-center justify-center transition-colors duration-300 shadow-lg"
          aria-label="WhatsApp Us"
        >
          <MessageCircle size={20} className="text-white" />
        </a>

        {/* Scroll Top Button */}
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-[#ffc107] hover:bg-[#ffcd38] text-white flex items-center justify-center transition-colors duration-300 shadow-lg"
          aria-label="Scroll to Top"
        >
          <ChevronUp size={24} strokeWidth={3} />
        </button>

      </div>

    </div>
  );
};

export default OpeningHoursSection;