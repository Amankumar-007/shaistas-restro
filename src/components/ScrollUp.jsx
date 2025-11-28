import { useEffect, useState } from "react";
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

const ScrollUp = () => {
    const [showFloatingButtons, setShowFloatingButtons] = useState(false);
      const [scrollY, setScrollY] = useState(0);
    
      // Handler for Scroll to Top
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    
      // Handle scroll to show/hide floating buttons
      useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);
          
          // Hide buttons when at the top (hero section), show when scrolled
          const heroSectionHeight = window.innerHeight;
          setShowFloatingButtons(currentScrollY > heroSectionHeight * 0.5);
        };
    
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial check
        handleScroll();
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
   <div className={`fixed bottom-8 right-8 flex gap-3 z-50 transition-all duration-300 ${showFloatingButtons ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'}`}>
        
      

        {/* Scroll Top Button */}
        <button 
  onClick={scrollToTop}
  className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 group"
  aria-label="Scroll to Top"
>
  <div className="relative">
    <ChevronUp 
      size={24} 
      strokeWidth={2.5}
      className="transform transition-transform duration-300 group-hover:-translate-y-0.5" 
    />
    <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
  <span className="sr-only">Back to top</span>
</button>

      </div>
  );
};

export default ScrollUp;