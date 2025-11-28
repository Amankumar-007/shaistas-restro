import React from 'react';
import { Home } from 'lucide-react';

const DiscountSection = () => {
  return (
    <div className=" flex items-center justify-center py-6 m-8 font-poppins">
      {/* Import Poppins Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&display=swap');
          
          .text-stroke {
            -webkit-text-stroke: 2px #3f2e22;
            color: white; 
            /* Fallback or if we want the fill to be white and stroke brown */
          }
          
          /* Custom text style to match the image's thick, dark look without the white fill */
          .heavy-brown-text {
            color: #3f2e22;
            text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
          }
        `}
      </style>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Item 1: Meal Like Home */}
        <DiscountCard>
          <div className="flex items-center gap-3">
            <Home className="w-16 h-16 text-[#3f2e22] stroke-[2.5]" />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-extrabold text-[#3f2e22] tracking-tight">Meal Like</span>
              <span className="text-2xl font-extrabold text-[#3f2e22] tracking-tight">Home</span>
            </div>
          </div>
        </DiscountCard>

        {/* Item 2: 5% - 1st Order */}
        <DiscountCard>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center leading-none">
              <span className="text-6xl font-black text-[#3f2e22]">5%</span>
              <span className="text-xs font-bold text-[#3f2e22] uppercase tracking-wide">Discount</span>
            </div>
            <div className="flex flex-col leading-none pl-2 border-l-2 border-[#3f2e22]/20 border-dashed h-12 justify-center">
              <span className="text-xl font-extrabold text-[#3f2e22]">1st</span>
              <span className="text-xl font-extrabold text-[#3f2e22]">Order</span>
            </div>
          </div>
        </DiscountCard>

        {/* Item 3: 10% - 2nd Order */}
        <DiscountCard>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center leading-none">
              <span className="text-6xl font-black text-[#3f2e22]">10%</span>
              <span className="text-xs font-bold text-[#3f2e22] uppercase tracking-wide">Discount</span>
            </div>
            <div className="flex flex-col leading-none pl-2 border-l-2 border-[#3f2e22]/20 border-dashed h-12 justify-center">
              <span className="text-xl font-extrabold text-[#3f2e22]">2nd</span>
              <span className="text-xl font-extrabold text-[#3f2e22]">Order</span>
            </div>
          </div>
        </DiscountCard>

        {/* Item 4: 15% - 3rd Order */}
        <DiscountCard>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center leading-none">
              <span className="text-6xl font-black text-[#3f2e22]">15%</span>
              <span className="text-xs font-bold text-[#3f2e22] uppercase tracking-wide">Discount</span>
            </div>
            <div className="flex flex-col leading-none pl-2 border-l-2 border-[#3f2e22]/20 border-dashed h-12 justify-center">
              <span className="text-xl font-extrabold text-[#3f2e22]">3rd</span>
              <span className="text-xl font-extrabold text-[#3f2e22]">Order</span>
            </div>
          </div>
        </DiscountCard>

      </div>
    </div>
  );
};

// Reusable Card Component with the "Fun Border"
const DiscountCard = ({ children }) => {
  return (
    <div className="relative group cursor-pointer transition-transform hover:-translate-y-1 duration-300">
      {/* Background/Border Layer */}
      <div className="absolute inset-0 bg-[#fff5eb] rounded-2xl border-4 border-dashed border-[#3f2e22] shadow-[4px_4px_0px_#3f2e22]"></div>
      
      {/* Content Layer */}
      <div className="relative h-full p-6 flex items-center justify-center z-10">
        {children}
      </div>
    </div>
  );
};

export default DiscountSection;