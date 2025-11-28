import React, { useState, useEffect } from 'react';
import Hero1 from '../../assets/Hero (1).webp';
import Hero2 from '../../assets/Mommylicious Egg Curry Rice_Paratha Box(1).webp';
import Hero3 from '../../assets/Mommylicious Gosht (Mutton)Curry Rice_Paratha Box(3).webp';
import DiscountSection from './components/DiscountSection';
import VideoSection from './components/VideoSection';
import MenuSection from './components/MenuSection';
import MommyliciousSection from './components/MommyliciousSection'
import MealBox from './components/MealBox';
import AddOnSection from './components/AddOnSection';
import Order from './components/Order';

const MommyliciousMealbox = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: Hero1,
      title: 'Delicious Home-style Meals',
      subtitle: 'Made with love, delivered to your doorstep'
    },
    {
      image: Hero2,
      title: 'Egg Curry Special',
      subtitle: 'Savor the authentic flavors of our signature dish'
    },
    {
      image: Hero3,
      title: 'Mutton Curry Delight',
      subtitle: 'Premium quality mutton cooked to perfection'
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Add smooth transition effect
  const slideStyle = {
    transition: 'opacity 1s ease-in-out',
  };

  return (
    <div className="font-poppins bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={slideStyle}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{slide.title}</h1>
              <p className="text-xl md:text-2xl max-w-2xl mb-8 drop-shadow-md">{slide.subtitle}</p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Discount Section */}
      <DiscountSection />
      <VideoSection/>
      <MenuSection/>
      <MommyliciousSection/>
      <MealBox/>
      <Order/>
      <AddOnSection/>
    </div>
  );
};

export default MommyliciousMealbox;