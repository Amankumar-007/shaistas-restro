import React from 'react';
import { Home, IndianRupee, Sprout, UtensilsCrossed } from 'lucide-react';

const MommyliciousSection = () => {
  return (
    <div className="py-5 bg-white flex items-center justify-center font-sans">
      {/* Importing a playful font from Google Fonts. 
        'Fredoka' works great for this "mommy/kitchen" vibe.
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        
        .font-playful {
          font-family: 'Poppins', sans-serif;
        }

        /* The "Fun" Border Magic 
          Using irregular border-radius values creates a hand-drawn, organic look.
        */
        .fun-border {
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          transition: all 0.3s ease-in-out;
        }

        .fun-border:hover {
          /* Changes the shape slightly on hover for a wobbly effect */
          border-radius: 15px 225px 15px 255px / 255px 15px 225px 15px;
          transform: scale(1.02) rotate(-1deg);
          box-shadow: 8px 8px 0px rgba(74, 59, 48, 0.1);
        }
      `}</style>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
       
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-playful font-bold text-[#2D241E] leading-tight">
            Why Choose <br />
            <span className="text-[#E87C38]">Mommylicious</span> Mealbox <br />
            By Shaista's?
          </h2>
          
          <p className="text-[#4A3B30] text-lg lg:text-xl font-playful leading-relaxed opacity-90 max-w-lg mx-auto lg:mx-0">
            Hum Mommylicious par aapko ghar jaisa swaad aur pyaar se bana khana 
            serve karte hain, jaise maa ke haath ka khana ho – simple, healthy, 
            aur dil se banaya hua.
          </p>
        </div>

        {/* Right Section: Fun Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          
          <FunCard 
            title="Home" 
            subtitle="Like Meal" 
            icon={<Home size={48} strokeWidth={2.5} />} 
          />
          
          <FunCard 
            title="Budget" 
            subtitle="Friendly" 
            icon={<IndianRupee size={48} strokeWidth={2.5} />} 
          />
          
          <FunCard 
            title="Flavourful" 
            subtitle="Meals" 
            // Using a custom SVG for the spice jars to match the image better
            customIcon={
              <div className="flex gap-1">
                <SpiceJar />
                <SpiceJar color="#5D4037" />
              </div>
            }
          />
          
          <FunCard 
            title="Fresh" 
            subtitle="Ingredients" 
            icon={<Sprout size={48} strokeWidth={2.5} />} 
          />

        </div>
      </div>
    </div>
  );
};

// Reusable Card Component with the "Fun" styling
const FunCard = ({ title, subtitle, icon, customIcon }) => {
  return (
    <div className="fun-border border-4 border-[#432918] bg-white p-6 flex items-center justify-between min-h-[140px] cursor-pointer group">
      <div className="flex flex-col">
        <h3 className="text-2xl font-playful font-bold text-[#2D241E] group-hover:text-[#E87C38] transition-colors">
          {title}
        </h3>
        <span className="text-sm font-playful font-semibold text-[#4A3B30] mt-1">
          {subtitle}
        </span>
      </div>
      <div className="text-[#432918] transform group-hover:scale-110 transition-transform duration-300">
        {customIcon ? customIcon : icon}
      </div>
    </div>
  );
};

// Simple SVG component for the Spice Jar look
const SpiceJar = ({ color = "#432918" }) => (
  <svg width="40" height="50" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 9h10" />
    <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
    <rect x="6" y="9" width="12" height="12" rx="2" />
    <circle cx="12" cy="15" r="3" />
  </svg>
);

export default MommyliciousSection;