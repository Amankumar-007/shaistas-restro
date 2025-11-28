import React from 'react';
import SwiggyLogo from '../../../../src/assets/swi.svg';
import ZomatoLogo from '../../../../src/assets/zom.svg';

const Order = () => {
  return (
    <div className="mt-10 bg-white flex flex-col items-center justify-center p-4 font-poppins text-gray-800">
      {/* Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Chewy&display=swap'); /* Adding Chewy for that specific header look if needed, but will primarily use Poppins as requested */
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        /* Custom Shadow for the "3D" card effect seen in image */
        .card-shadow {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 20px rgba(109, 40, 40, 0.2);
        }
      `}</style>

      <div className="max-w-6xl w-full">
        
        {/* Top Section: Text & Map */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-[#F15700]">Thinking</span> <span className="text-[#1C1C1C]">Where to Order?</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Aap mealbox Swiggy ya Zomato se order kar sakte hain, seedha humse bhi le sakte hain, ya phir apna mealbox uthaane ke liye hamari kitchen mein swagat hai!
            </p>
          </div>

          {/* Right Side: Google Map Embed */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white w-full max-w-md h-48 md:h-56 relative z-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.666753736736!2d77.4452!3d28.6119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee3d4e348557%3A0x7f232463e800630!2sMommylicious%20Mealbox!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mommylicious Mealbox Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Section: Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 px-4 md:px-0">
          
          {/* Swiggy Card */}
          <div className="bg-white rounded-2xl border border-gray-100 card-shadow h-30 md:h-40 flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <img 
              src={SwiggyLogo} 
              alt="Order on Swiggy" 
              className="h-24 md:h-32 w-auto"
            />
          </div>

          {/* Zomato Card */}
          <div className="bg-white rounded-2xl border border-gray-100 card-shadow h-30 md:h-40 flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <img 
              src={ZomatoLogo} 
              alt="Order on Zomato" 
              className="h-24 md:h-32 w-auto"
            />
          </div>

          {/* Direct Order / WhatsApp Card */}
          <div className="bg-white rounded-2xl border border-gray-100 card-shadow h-30 md:h-40 flex items-center justify-between px-8 py-6 hover:scale-105 transition-transform duration-300 cursor-pointer group relative overflow-hidden">
            <div className="flex flex-col justify-center z-10">
              <span className="text-xl md:text-2xl font-bold text-gray-800">Direct</span>
              <span className="text-xl md:text-2xl font-bold text-gray-800">Order</span>
            </div>
            <div className="relative z-10">
               <WhatsAppLogo className="h-14 w-14 md:h-16 md:w-16 drop-shadow-md" />
            </div>
            {/* Background decoration for the WhatsApp card specifically */}
            <div className="absolute right-0 top-0 w-24 h-full bg-green-50 opacity-20 -skew-x-12 transform translate-x-8"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

/* --- LOGO COMPONENTS --- */

const WhatsAppLogo = ({ className }) => (
  <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 0C13.4 0 0 13.4 0 30C0 36.6 2.1 42.7 5.7 47.7L2 58L12.7 54.5C17.5 57.4 23 59 28.9 59H29.1C45.9 59 59.5 45.9 59.5 29.5C59.5 21.6 56.4 14.2 50.8 8.6C45.2 3.1 37.8 0 30 0ZM30.5 50.1C25.4 50.1 20.8 48.6 16.9 46.1L16 45.6L8 47.8L10.2 40.4L9.6 39.4C6.9 35.1 5.5 30.1 5.5 25C5.5 11.2 16.7 0 30.5 0C37.2 0 43.5 2.6 48.2 7.3C52.9 12 55.5 18.3 55.5 25C55.5 38.8 44.3 50.1 30.5 50.1Z" fill="white"/>
    <path d="M30 0C13.4315 0 0 13.4315 0 30C0 36.5685 2.13242 42.6685 5.74805 47.748L2 58L12.7129 54.4883C17.5449 57.3828 23.0449 59 28.9414 59H29.1172C45.9111 59 59.5 45.857 59.5 29.5C59.5 21.6221 56.4326 14.2129 50.8643 8.64453C45.2959 3.07617 37.8779 0 30 0Z" fill="#25D366"/>
    <path d="M45.6 36.1C44.8 35.7 40.6 33.6 39.8 33.3C39 33 38.4 32.9 37.9 33.7C37.3 34.5 35.7 36.4 35.2 37C34.7 37.6 34.2 37.7 33.4 37.3C32.6 36.9 30 36 27 33.3C24.6 31.2 23 28.6 22.6 27.8C22.2 27 22.6 26.6 23 26.2C23.3 25.9 23.7 25.4 24.1 25C24.5 24.6 24.6 24.3 24.9 23.8C25.1 23.3 25 22.9 24.8 22.5C24.7 22.1 23.1 18.2 22.4 16.6C21.8 15 21.1 15.2 20.7 15.2C20.3 15.2 19.8 15.2 19.3 15.2C18.8 15.2 18 15.4 17.3 16.1C16.6 16.8 14.7 18.6 14.7 22.2C14.7 25.8 17.3 29.3 17.7 29.8C18.1 30.3 23 37.9 30.5 41.1C32.3 41.9 33.7 42.3 34.8 42.7C36.6 43.3 38.3 43.2 39.6 43C41.1 42.8 44.1 41.2 44.7 39.5C45.4 37.8 45.4 36.4 45.2 36.1C45 35.9 44.4 35.7 43.6 35.3L45.6 36.1Z" fill="white"/>
  </svg>
);

export default Order;