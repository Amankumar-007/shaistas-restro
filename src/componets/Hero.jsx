import React, { useState, useEffect } from 'react';
import { ShoppingCart, Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { branding } from '../constants/branding';

// --- Assets & Data ---

// Since we don't have the individual assets (transparent food images), we will use the uploaded image 
// as the main background for the 'Exact' slide, but I will construct a layout that mimicks it 
// so you can swap in real transparent PNGs later if you have them.
const slides = [
  {
    id: 1,
    type: 'image-based',
    bgImage: "https://i.postimg.cc/HxNYZ1jg/image-75ddb9.jpg", // Using a placeholder that represents the user's uploaded image concept
    // Note: In a real production app, you would slice the "Mommylicious Mealbox" logo and food bowls as separate PNGs.
    // For this replica, I will overlay the interactive button on top of the visual.
    buttonText: "TAKE A GLANCE AT MOMMYLICIOUS MEALBOX",
    hasFloatingMenu: true
  },
  {
    id: 2,
    type: 'content-based',
    bgColor: "bg-orange-50",
    title: "Zaika-E-Khaas",
    subtitle: "Authentic Flavors Delivered",
    description: "Experience the royal taste of our special curries and biryanis.",
    buttonText: "ORDER NOW",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=1000" 
  },
  {
    id: 3,
    type: 'content-based',
    bgColor: "bg-red-50",
    title: "Catering Services",
    subtitle: "Make Your Events Memorable",
    description: "From birthday bashes to weddings, we serve love in every plate.",
    buttonText: "GET A QUOTE",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1000"
  }
];


const HeroSlide = ({ slide, isActive }) => {
  if (slide.type === 'image-based') {
    // This replicates the exact uploaded image look
    return (
      <div className="relative w-full h-full bg-white flex items-center justify-center overflow-hidden">
        {/* Background Image Container - In a real app, use the actual image as an <img> or background */}
        {/* Since I cannot display the local file directly in this code block without a host, 
            I'm simulating the layout with CSS to look exactly like the screenshot provided. */}
        
        {/* Simulation of the Uploaded Image Layout */}
        <div className="absolute inset-0 bg-white">
          {/* We use the pattern from the image: Food left, White space, Logo right */}
           
          {/* Decorative Background Elements (Food Bowls) */}
           <div className="absolute top-0 left-0 w-full h-full opacity-100">
             {/* Note: In production, put the actual full banner image here: */}
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2000" 
                alt="Mommylicious Feast" 
                className="w-full h-full object-cover md:object-contain object-left"
                style={{ maskImage: 'linear-gradient(to right, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 100%)' }}
              />
           </div>

           {/* Central/Right Content Overlay */}
           <div className="absolute inset-0 flex flex-col items-end justify-center pr-8 md:pr-24 pb-12 pointer-events-none">
              
              {/* Logo Replication */}
              <div className="text-right mb-6 transform rotate-[-2deg]">
                <h2 className="text-6xl md:text-7xl font-bold text-[#4A2C2A] font-cursive leading-none drop-shadow-md">
                  Mommylicious
                </h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-[#E85D04] tracking-wider mt-[-10px]">
                  MEALBOX
                </h3>
                <p className="text-xl text-[#4A2C2A] font-script mt-2 mr-4">
                  by <span className="bg-[#3E1F18] text-[#F4B42F] px-3 py-1 rounded-full text-lg ml-2 font-serif border-2 border-[#F4B42F]">Shaista's</span>
                </p>
              </div>

              {/* The CTA Button from the image */}
              <button className="pointer-events-auto bg-[#F4B42F] bg-opacity-90 hover:bg-[#EAA622] text-[#3E1F18] border-2 border-[#3E1F18] px-6 py-3 rounded-lg font-bold uppercase tracking-wider shadow-lg transform hover:scale-105 transition-all text-sm md:text-base">
                {slide.buttonText}
              </button>
           </div>
        </div>

        {/* Floating "Menu" Circle from Image */}
        <div className="absolute bottom-32 right-[20%] md:right-[15%] pointer-events-auto animate-bounce-slow hidden md:flex">
          <button className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#3E1F18] text-[#F4B42F] flex items-center justify-center font-cursive text-xl md:text-2xl border-4 border-white shadow-xl hover:rotate-12 transition-transform">
            Menu
          </button>
        </div>
      </div>
    );
  }

  // Generic Layout for other slides
  return (
    <div className={`w-full h-full flex flex-col md:flex-row items-center ${slide.bgColor}`}>
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative order-2 md:order-1">
         <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center p-8 md:p-16 order-1 md:order-2 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold text-[#3E1F18] mb-4 font-cursive">{slide.title}</h2>
        <h3 className="text-xl md:text-2xl text-[#E85D04] font-semibold mb-6">{slide.subtitle}</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">{slide.description}</p>
        <div>
            <button className="bg-[#3E1F18] text-white px-8 py-3 rounded-full font-bold hover:bg-[#E85D04] transition-colors shadow-lg">
            {slide.buttonText}
            </button>
        </div>
      </div>
    </div>
  );
};

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-white overflow-hidden group">
      {/* Slides Container */}
      <div 
        className="w-full h-full transition-transform duration-700 ease-in-out flex"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
             <HeroSlide slide={slide} isActive={index === currentSlide} />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-[#3E1F18] p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-[#3E1F18] p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={32} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === idx ? 'bg-[#3E1F18] w-6' : 'bg-[#3E1F18]/30 hover:bg-[#3E1F18]/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a href="#" className="w-12 h-12 bg-[#3E1F18] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
        <Phone size={20} />
      </a>
      <a href="#" className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
        <MessageCircle size={24} />
      </a>
       <div className="w-12 h-8 flex items-center justify-center">
         <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-[#F4B42F] border-r-[10px] border-r-transparent animate-bounce"></div>
       </div>
    </div>
  );
};

export default HeroSlider;
