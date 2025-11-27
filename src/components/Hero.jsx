import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- Assets & Data ---
const slides = [
  {
    id: 1,
    type: 'special',
    bgImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2000",
    title: "Mommylicious",
    highlight: "MEALBOX",
    subtext: "by Shaista's",
    buttonText: "VIEW MEALBOX",
    path: "/mealbox"
  },
  {
    id: 2,
    type: 'standard',
    title: "Zaika-E-Khaas",
    subtitle: "Authentic Flavors",
    description: "Experience the royal taste of our special curries and biryanis.",
    buttonText: "ORDER NOW",
    path: "/order",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    type: 'standard',
    title: "Catering Services",
    subtitle: "Make Events Memorable",
    description: "From birthday bashes to weddings, we serve love in every plate.",
    buttonText: "GET A QUOTE",
    path: "/catering",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1000"
  }
];

const HeroSlide = ({ slide, isActive }) => {
  const navigate = useNavigate();

  // Animation classes
  const animTitle = isActive ? "animate-fade-in-up delay-100" : "opacity-0";
  const animSub = isActive ? "animate-fade-in-up delay-200" : "opacity-0";
  const animBtn = isActive ? "animate-fade-in-up delay-300" : "opacity-0";

  // --- SLIDE TYPE 1: The "Special" Branding Slide ---
  if (slide.type === 'special') {
    return (
      <div className="relative w-full h-full bg-[#FFFBF2] overflow-hidden flex flex-col md:flex-row">
        
        {/* Mobile: Full Background | Desktop: Split Right */}
        <div className="absolute inset-0 md:relative md:w-3/5 h-full order-1 md:order-2">
          {/* Mobile Overlay Gradient (Crucial for text readability) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:hidden z-10" />
          {/* Desktop Overlay Gradient */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#FFFBF2] via-transparent to-transparent z-10" />
          
          <img
            src={slide.bgImage}
            alt="Mommylicious Feast"
            className="w-full h-full object-cover object-center md:object-left animate-ken-burns"
          />
        </div>

        {/* Content Section */}
        <div className="absolute inset-0 md:relative md:inset-auto md:w-2/5 h-full z-20 flex flex-col justify-end md:justify-center items-start pb-24 px-6 md:pl-20 md:pb-0 text-left order-2 md:order-1">
          
          <div className={`transform transition-all duration-700 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl md:text-7xl font-bold text-white md:text-[#4A2C2A] font-cursive leading-tight drop-shadow-md md:drop-shadow-none">
              {slide.title}
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-[#F4B42F] md:text-[#E85D04] tracking-wide mt-[-5px] md:mt-[-10px] drop-shadow-sm">
              {slide.highlight}
            </h3>
            <p className="text-xl text-gray-200 md:text-[#4A2C2A] font-serif mt-2 italic flex items-center gap-2">
              {slide.subtext}
              <span className="hidden md:inline-block w-8 h-[2px] bg-[#F4B42F]"></span>
            </p>

            <button 
              onClick={() => navigate(slide.path)}
              className="mt-6 bg-[#F4B42F] text-[#3E1F18] border-2 border-[#3E1F18] md:border-[#3E1F18] px-8 py-3 rounded-xl font-bold uppercase tracking-wider shadow-lg md:shadow-[4px_4px_0px_0px_rgba(62,31,24,1)] hover:scale-105 transition-all"
            >
              {slide.buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- SLIDE TYPE 2: Standard Content Slide ---
  return (
    <div className="w-full h-full relative flex md:flex-row bg-[#3E1F18]">
      
      {/* Background Image Wrapper (Full on Mobile, Half on Desktop) */}
      <div className="absolute inset-0 md:relative md:w-1/2 h-full overflow-hidden">
        {/* Dark overlay for Mobile Text Readability */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/20 z-10" />
        <img 
          src={slide.image} 
          alt={slide.title} 
          className="w-full h-full object-cover animate-ken-burns" 
        />
      </div>

      {/* Text Content */}
      <div className="relative z-20 w-full h-full md:w-1/2 flex flex-col justify-end md:justify-center items-start p-8 pb-24 md:p-16 md:pb-0 text-left text-white">
        <h2 className={`text-4xl md:text-5xl font-bold font-cursive text-[#F4B42F] mb-2 drop-shadow-md ${animTitle}`}>
          {slide.title}
        </h2>
        <h3 className={`text-2xl md:text-3xl font-semibold mb-3 text-gray-100 drop-shadow-sm ${animSub}`}>
          {slide.subtitle}
        </h3>
        <p className={`text-gray-200 md:text-gray-300 text-base md:text-lg mb-8 max-w-sm leading-relaxed drop-shadow-sm ${animSub}`}>
          {slide.description}
        </p>
        <button 
          onClick={() => navigate(slide.path)}
          className={`bg-[#F4B42F] text-[#3E1F18] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors shadow-lg ${animBtn}`}
        >
          {slide.buttonText}
        </button>
      </div>
    </div>
  );
};

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Touch Handling State
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Swipe Logic
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  return (
    <section 
      id="hero" 
      className="relative w-full h-[100dvh] md:h-[650px] lg:h-[700px] bg-white overflow-hidden group select-none" // Changed height to 100dvh for mobile immersion
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-ken-burns { animation: ken-burns 10s ease-out infinite alternate; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      {/* Slides */}
      <div className="w-full h-full relative">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <HeroSlide slide={slide} isActive={index === currentSlide} />
          </div>
        ))}
      </div>

      {/* Desktop Arrows */}
      <div className="hidden md:block">
        <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-[#3E1F18] backdrop-blur-sm text-[#3E1F18] hover:text-[#F4B42F] p-3 rounded-full transition-all z-40">
          <ChevronLeft size={32} />
        </button>
        <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-[#3E1F18] backdrop-blur-sm text-[#3E1F18] hover:text-[#F4B42F] p-3 rounded-full transition-all z-40">
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Pagination Dots - Positioned higher on mobile to clear safe area */}
      <div className="absolute bottom-8 md:bottom-6 left-6 md:left-1/2 md:-translate-x-1/2 flex gap-2 z-40">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full shadow-sm ${
              currentSlide === idx 
                ? 'bg-[#F4B42F] w-8 h-2 md:w-8 md:h-3' 
                : 'bg-white/50 hover:bg-white/80 w-2 h-2 md:w-3 md:h-3'
            }`}
          />
        ))}
      </div>
    </section>
  );
};



export default HeroSlider;