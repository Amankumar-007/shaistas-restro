import React from 'react';
import { ChevronUp, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="relative w-full bg-[#F7F1E8] py-20 px-4 md:px-12 lg:px-24 font-sans text-[#3F2A1E] flex flex-col items-center">
      
      {/* Subtitle */}
      <h4 className="text-center text-lg font-serif text-[#A67C52] tracking-wide">
        Book Your Table
      </h4>

      {/* Main Title */}
      <h2 className="text-center text-4xl md:text-5xl font-serif text-[#3F2A1E] mb-4 tracking-wide">
        Make A Reservation
      </h2>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center mb-6">
        <div className="w-12 h-px bg-[#A67C52] opacity-50"></div>
        <div className="mx-2 text-[#A67C52] font-serif">
            <span className="text-xs">✦ ✦ ✦ ✦ ✦</span>
        </div>
        <div className="w-12 h-px bg-[#A67C52] opacity-50"></div>
      </div>

      {/* Descriptive Text */}
      <p className="text-center text-[#7A6049] max-w-2xl mx-auto mb-12 leading-relaxed">
        You can book your table online easily in just a couple of minutes.<br />
        We take reservations for lunch, just check the availability of your<br />
        table.
      </p>

      {/* Form Container with Border */}
      <div className="w-full max-w-4xl mx-auto border border-[#E1D0BD] p-8 md:p-12 bg-[#FFFDF9] rounded-2xl shadow-sm">
        
        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full bg-[#FFF8EF] p-4 rounded-lg text-[#3F2A1E] placeholder-[#B49674] border border-[#E1D0BD] focus:outline-none focus:ring-2 focus:ring-[#C58A52]/70 focus:border-transparent text-sm"
          />

          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-[#FFF8EF] p-4 rounded-lg text-[#3F2A1E] placeholder-[#B49674] border border-[#E1D0BD] focus:outline-none focus:ring-2 focus:ring-[#C58A52]/70 focus:border-transparent text-sm"
          />

          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full bg-[#FFF8EF] p-4 rounded-lg text-[#3F2A1E] placeholder-[#B49674] border border-[#E1D0BD] focus:outline-none focus:ring-2 focus:ring-[#C58A52]/70 focus:border-transparent text-sm"
          />
        </div>

        <textarea 
          placeholder="Message" 
          rows={5}
          className="w-full bg-[#FFF8EF] p-4 rounded-lg text-[#3F2A1E] placeholder-[#B49674] border border-[#E1D0BD] focus:outline-none focus:ring-2 focus:ring-[#C58A52]/70 focus:border-transparent resize-none mb-6 text-sm"
        ></textarea>

        {/* Submit Button */}
        <div className="mt-2">
          <button className="w-full bg-[#B4733C] text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#9C6130] transition-colors rounded-full shadow-sm">
            Find A Table
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;