import React, { useState, useEffect } from 'react';
import menuPdf from '../assets/menu.pdf';
import { Utensils, ChevronRight, X } from 'lucide-react';

// Add the font to the document head
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
  .dancing-script {
    font-family: 'Dancing Script', cursive;
  }
`;
document.head.appendChild(style);

const MenuButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  
  // Disable pulsing effect for a cleaner look
  useEffect(() => {
    setIsPulsing(false);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const openPdf = (e) => {
    e.preventDefault();
    window.open(menuPdf, '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-18 bottom-30 z-50">
      <div className="relative">
        {/* Subtle hover effect */}
        <div className={`absolute inset-0 rounded-full bg-[#FFD700] opacity-0 transition-opacity duration-300 ${
          isHovered ? 'opacity-10' : ''
        }`}></div>
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
          aria-label="Close menu button"
        >
          <X size={14} className="text-gray-700" />
        </button>
        
        <button
          onClick={openPdf}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative w-24 h-24 cursor-pointer rounded-full bg-gradient-to-br from-[#8B0000] to-[#A52A2A] 
          transition-all duration-300 flex flex-col items-center justify-center shadow-xl 
          transform ${isHovered ? 'scale-105' : 'scale-100'}
          hover:shadow-[0_0_15px_2px_rgba(255,215,0,0.3)]`}
          aria-label="Open Menu"
        >
          <div className="transition-transform duration-300">
            <Utensils 
              className="text-[#FFD700] mx-auto mb-1" 
              size={24}
            />
            <span className="text-[#FFD700] dancing-script text-2xl font-bold">
              {isHovered ? 'View Menu' : 'Menu'}
            </span>
          </div>
          
          {/* Animated chevron that appears on hover */}
          <ChevronRight 
            className="text-[#FFD700] absolute -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            size={20}
          />
        </button>
        
        {/* Subtle floating animation */}
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
          .floating {
            animation: float 4s ease-in-out infinite;
          }
          .hover\:shadow-golden-glow:hover {
            box-shadow: 0 0 20px 5px rgba(255, 215, 0, 0.4);
          }
        `}</style>
      </div>
    </div>
  );
};

export default MenuButton;
