import React from 'react';
import { ChevronRight } from 'lucide-react'; // Optional: for icons, or remove if not using lucide-react

const MenuSection = () => {
  const menuItems = [
    {
      id: 1,
      title: "Mommylicious Egg Curry",
      description: "Creamy curry with perfectly boiled eggs. Bet you'll love it a little egg-stra!",
      includes: "Paratha/Rice + Mint Yoghurt + Salad",
      image: "/src/assets/Mommylicious Egg Curry Rice_Paratha Box(1).webp",
      price: "₹199"
    },
    {
      id: 2,
      title: "Mommylicious Gosht Curry",
      description: "Tender Mutton cooked in some common spices which lifts the flavour of mutton to perfection.",
      includes: "Paratha/Rice + Salad + Mint Yoghurt",
      image: "/src/assets/Mommylicious Gosht (Mutton)Curry Rice_Paratha Box(3).webp",
      price: "₹299"
    },
    {
      id: 3,
      title: "Special Egg Curry Combo",
      description: "Our signature egg curry with extra gravy and special spices. A customer favorite!",
      includes: "Paratha/Rice + Salad + Mint Yoghurt + Pickle",
      image: "/src/assets/Mommylicious Egg Curry Rice_Paratha Box(1).webp",
      price: "₹249"
    },
    {
      id: 4,
      title: "Premium Gosht Special",
      description: "Extra tender mutton pieces in rich, aromatic gravy. A treat for meat lovers!",
      includes: "Paratha/Rice + Salad + Mint Yoghurt + Raita",
      image: "/src/assets/Mommylicious Gosht (Mutton)Curry Rice_Paratha Box(3).webp",
      price: "₹349"
    }
  ];

  return (
    <section className=" min-h-screen py-16 px-4 md:px-8 font-['Poppins'] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-0 tracking-tight">
            Aaj kya <span className="text-orange-600">Khana hai?</span>
          </h2>
          
          <div className="flex gap-4">
            <button className="px-8 py-2 bg-[#3E2723] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300">Veg</button>
            <button className="px-8 py-2 bg-orange-500 text-white rounded-full font-semibold shadow-lg shadow-orange-200 transform scale-110">Non-veg</button>
            <button className="px-8 py-2 bg-[#3E2723] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300">Paneer</button>
          </div>
        </div>

        {/* --- Hero Text --- */}
        <div className="text-center space-y-4 mb-20 relative">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Try <span className="text-orange-500">Mommylicious Mealbox</span> <br className="hidden md:block" /> by Shaista's
          </h1>
          <div className="inline-block bg-white px-8 py-4 rounded-2xl shadow-xl border border-orange-100 mt-6 transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-xl md:text-2xl font-bold text-gray-700">
              Grab <span className="text-orange-600">NON-VEG Meal Box</span> Starting @ <span className="text-5xl font-extrabold text-[#3E2723]">₹199</span>
            </p>
          </div>
          
          {/* Decorative background blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        {/* --- Menu Grid (Side by Side / Zig Zag) --- */}
        <div className="space-y-24 relative z-10">
          {menuItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Side - Alternating sizes */}
              <div className={`w-full group relative ${index % 2 === 0 ? 'md:w-5/12' : 'md:w-7/12'}`}>
                <div className="absolute inset-0 bg-orange-500 rounded-[2rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-300"></div>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="relative w-full h-80 object-cover rounded-[2rem] shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500" 
                />
                {/* Floating Price Tag */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-xl border-4 border-orange-50 flex flex-col items-center justify-center w-24 h-24 z-20">
                    <span className="text-xs font-bold text-gray-400">only</span>
                    <span className="text-xl font-bold text-orange-600">{item.price}</span>
                </div>
              </div>

              {/* Text Side - Alternating sizes */}
              <div className={`w-full text-center md:text-left space-y-4 ${index % 2 === 0 ? 'md:w-7/12' : 'md:w-5/12'}`}>
                <div className="flex items-center justify-center md:justify-start gap-3">
                   {/* Small Icon Placeholder */}
                   <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center border-2 border-orange-500">
                      <div className="w-6 h-6 rounded-full bg-orange-500"></div> 
                   </div>
                   <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.description}
                </p>
                
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border-l-4 border-orange-500 shadow-sm inline-block">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Includes</p>
                  <p className="text-gray-800 font-medium italic">
                    {item.includes}
                  </p>
                </div>
                
                <div className="pt-4">
                  <button className="text-orange-600 font-bold hover:text-[#3E2723] transition-colors flex items-center gap-2 mx-auto md:mx-0 group">
                    Order Now <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

     
            
      </div>
    </section>
  );
};

export default MenuSection;