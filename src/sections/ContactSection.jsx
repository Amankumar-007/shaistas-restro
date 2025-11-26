import React from 'react';
import { Phone, MessageCircle, ChevronUp, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="relative w-full bg-[#e2c996] py-16 px-4 md:px-12 lg:px-24 font-sans text-gray-800">
      
      {/* Optional Main Title Requested */}
      <h2 className="text-center text-4xl font-serif text-orange-400/90 mb-12 tracking-wide font-bold">
        Contact Us
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* LEFT COLUMN: Info */}
        <div className="flex flex-col gap-10">
          
          {/* Address */}
          <div>
            <h3 className="text-2xl font-serif text-orange-400 mb-4">Address</h3>
            <div className="flex items-start gap-2 text-gray-700 leading-relaxed">
              <MapPin className="w-5 h-5 mt-1 text-gray-800 shrink-0" />
              <p className="text-sm md:text-base">
                45 Ground Floor 7th, Avenue High Street,<br />
                Sector 4 Greater Noida West, Haibatpur, Dadri<br />
                Tehsil -2, Gautam Buddha Nagar, Uttar Pradesh -<br />
                201318
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-orange-400 mb-4">Opening Hours</h3>
            <p className="text-gray-700 text-sm md:text-base">
              12:30 PM to 11:45 PM
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-orange-400 mb-4">Phone</h3>
            <div className="text-gray-700 text-sm md:text-base space-y-2">
              <p>+91-9643803833</p>
              <p>+91-9643803813</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full bg-gray-50/80 p-4 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-300"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-gray-50/80 p-4 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-300"
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full bg-gray-50/80 p-4 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-300"
          />
          <textarea 
            placeholder="Message" 
            rows={5}
            className="w-full bg-gray-50/80 p-4 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-300 resize-none"
          ></textarea>

          <div className="mt-2">
            <button className="bg-white border border-black px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Send Message
            </button>
          </div>
        </div>

      </div>

      

    </section>
  );
};

export default ContactSection;