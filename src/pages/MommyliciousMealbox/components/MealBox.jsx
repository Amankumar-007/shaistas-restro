import React from 'react';
import { ArrowDown } from 'lucide-react';

const MealBox = () => {
  return (
    <div className="min-h-screen bg-white font-poppins selection:bg-orange-100 p-4 md:p-8 overflow-hidden">
      {/* Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
          .font-poppins { font-family: 'Poppins', sans-serif; }
        `}
      </style>

      <div className="max-w-6xl mx-auto relative">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative z-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Grab <span className="text-orange-500">Paneer</span> Meal Box
            </h1>
          </div>
          
          <div className="mt-4 md:mt-0">
            <span className="text-4xl md:text-5xl font-extrabold text-gray-800">
              @ ₹239
            </span>
          </div>

          {/* Main Hero Image */}
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center md:justify-end">
            <div className="relative w-64 h-48 md:w-80 md:h-60 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/src/assets/mom.png" 
                alt="Mommylicious Mealbox"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* --- Item 1: Paneer Butter Masala --- */}
        <div className="flex flex-col md:flex-row items-center mb-20 gap-8 relative">
          {/* Decorative Dashed Line (Abstract) */}
          <div className="hidden md:block absolute top-10 left-32 w-full h-full -z-10 pointer-events-none">
             <svg width="100%" height="100%">
               <path d="M 100 0 Q 50 100 200 150" stroke="#fdba74" strokeWidth="2" strokeDasharray="8 8" fill="none" />
             </svg>
          </div>

          {/* Image */}
          <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
            <div className="w-full h-full rounded-full border-4 border-orange-100 overflow-hidden shadow-xl bg-white">
              <img 
                src="/src/assets/Mommylicious Egg Curry Rice_Paratha Box(1).webp" 
                alt="Paneer Butter Masala"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Mommylicious <span className="text-orange-500">paneer butter Masala</span>
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
              Creamy Paneer in a gravy prepared with butter, tomatoes and cashews with Rice/Paratha+ Mint Yogurt + Salad. Super comforting, super delicious!
            </p>
          </div>
        </div>

        {/* --- Item 2: Kadhai Paneer --- */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-24 gap-8 relative">
           {/* Decorative Dashed Line (Abstract) */}
           <div className="hidden md:block absolute top-0 right-32 w-full h-full -z-10 pointer-events-none">
             <svg width="100%" height="100%">
               <path d="M 800 0 Q 900 100 700 150" stroke="#fdba74" strokeWidth="2" strokeDasharray="8 8" fill="none" />
             </svg>
          </div>

          {/* Image */}
          <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
            <div className="w-full h-full rounded-full border-4 border-orange-100 overflow-hidden shadow-xl bg-white">
              <img 
                src="/src/assets/Mommylicious Gosht (Mutton)Curry Rice_Paratha Box(3).webp" 
                alt="Kadhai Paneer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text - Aligned Right on Desktop */}
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Mommylicious <span className="text-orange-500">Kadhai paneer</span>
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl ml-auto">
              Paneer made with staples like onions, tomatoes, capsicum and Indian spices with Rice/Paratha+ Mint Yogurt + Salad. Super comforting, super delicious!
            </p>
          </div>
        </div>

        {/* --- Footer / Surprise Section --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Scroll for <span className="text-orange-500">surprise!</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Arre ruk jao, kahan bhaag rahe ho? Neeche scroll karo, maza aane wala hai!
            </p>
            <div className="mt-4 flex justify-center md:justify-start">
                <ArrowDown className="text-orange-500 animate-bounce w-8 h-8" />
            </div>
          </div>

          {/* Surprise Card Image */}
          <div className="w-full md:w-1/3">
            <div className="bg-orange-50 rounded-2xl p-6 relative overflow-hidden shadow-inner h-48 md:h-56 w-full flex items-center justify-center transform rotate-1 hover:rotate-0 transition-all duration-300">
              {/* Abstract Pattern Background */}
              <div className="absolute inset-0 opacity-10">
                 <svg width="100%" height="100%">
                    <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="10" fill="#ea580c" />
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
                 </svg>
              </div>
              
              <div className="relative z-10 w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-orange-100 font-bold text-xs text-center leading-tight">
                    Mommylicious<br/>Mealbox
                  </span>
              </div>
              
              {/* Decorative Text overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                 <span className="text-6xl font-extrabold text-orange-400">YUM</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MealBox;