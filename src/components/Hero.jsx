import React, { useState, useEffect, useCallback } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const slidesData = [
  {
    id: 1,
    badge: "Welcome to Hotspot",
    heading_line1: "Order Food",
    heading_line2: "Online",
    heading_highlight: "From Hotspot",
    subtext: "Fresh, delicious meals crafted with love and delivered fast. Your cravings, satisfied.",
    buttonText: "Order Now",
    bgImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg", // Diverse table spread
    images: [
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg", // Curry
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop", // Milkshake
      "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&w=800&auto=format&fit=crop", // Creamy Pasta
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=800&auto=format&fit=crop", // Spicy Pasta
    ],
    accentColor: "#ff5400"
  },
  {
    id: 2,
    badge: "New Arrivals",
    heading_line1: "Discover Our",
    heading_line2: "Latest",
    heading_highlight: "Creations",
    subtext: "Explore our newest dishes, from gourmet burgers to refreshing salads. A taste adventure awaits!",
    buttonText: "See What's New",
    bgImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop", // Moody restaurant ambience
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop", // Burger
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop", // Salad
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", // Pizza
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=800&auto=format&fit=crop", // Sandwich
    ],
    accentColor: "#eab308" // Yellow
  },
  {
    id: 3,
    badge: "Best Sellers",
    heading_line1: "Your All-Time",
    heading_line2: "Favorite",
    heading_highlight: "Dishes",
    subtext: "The classics you love, made with the finest ingredients. You can't go wrong with these crowd-pleasers.",
    buttonText: "Order Favorites",
    bgImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop", // Rich Italian background
    images: [
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop", // Chicken
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop", // Noodles
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=800&auto=format&fit=crop", // Thai Curry
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop", // Fried Rice
    ],
    accentColor: "#22c55e" // Green
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Pause auto-play on manual interaction
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="min-h-[70vh] md:min-h-screen w-full relative overflow-hidden font-sans selection:bg-orange-200">
      
      {/* Dynamic Background Image with Crossfade */}
      {slidesData.map((slide, index) => (
        <div
          key={`bg-${slide.id}`}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${slide.bgImage}')` }}
        />
      ))}

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
        className="hidden md:block absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/30 text-white transition-all duration-300 focus:outline-none group"
      >
        <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button 
        onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
        className="hidden md:block absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/30 text-white transition-all duration-300 focus:outline-none group"
      >
        <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Slider Container */}
      <div className="relative z-10 h-[70vh] md:h-screen w-full">
        {slidesData.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full flex flex-col md:flex-row items-center justify-center md:justify-center gap-12 py-12">
              
              {/* Left Content - Centered on mobile */}
              <div 
                className={`flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 max-w-2xl text-white transition-all duration-1000 transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                
                {/* Badge */}
                <div className="bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide shadow-sm cursor-default">
                  {slide.badge}
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                  {slide.heading_line1} <br />
                  <span>{slide.heading_line2}</span> <br />
                  <span style={{ color: slide.accentColor }}>{slide.heading_highlight}</span>
                </h1>

                {/* Subtext */}
                <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-lg font-medium">
                  {slide.subtext}
                </p>

                {/* CTA Button */}
                <button 
                  className="group text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                  style={{ backgroundColor: slide.accentColor, boxShadow: `0 8px 20px -6px ${slide.accentColor}80` }}
                >
                  <ShoppingCart className="w-6 h-6 group-hover:animate-bounce" />
                  <span>{slide.buttonText}</span>
                </button>
              </div>

              {/* Right Content - Image Grid collage - Hidden on mobile */}
              <div 
                className={`hidden md:block flex-1 w-full max-w-xl lg:max-w-2xl relative transition-all duration-1000 delay-300 transform ${
                  index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
              >
                <div className="grid grid-cols-2 gap-4 md:gap-6 p-4">
                  
                  {/* Top Left */}
                  <div className="col-span-1 row-span-1 pt-8">
                    <div className="relative group overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                      <img src={slide.images[0]} alt="Food 1" className="w-full h-48 md:h-56 object-cover" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  </div>

                  {/* Top Right */}
                  <div className="col-span-1 row-span-1">
                    <div className="relative group overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                      <img src={slide.images[1]} alt="Food 2" className="w-full h-40 md:h-48 object-cover" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  </div>

                  {/* Bottom Left */}
                  <div className="col-span-1 row-span-1">
                    <div className="relative group overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                      <img src={slide.images[2]} alt="Food 3" className="w-full h-48 md:h-56 object-cover" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  </div>

                  {/* Bottom Right */}
                  <div className="col-span-1 row-span-1 -mt-8">
                    <div className="relative group overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                      <img src={slide.images[3]} alt="Food 4" className="w-full h-56 md:h-64 object-cover" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        ))}

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}