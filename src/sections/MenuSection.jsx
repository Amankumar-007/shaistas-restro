import React, { useState } from 'react';
import { Store, UtensilsCrossed, ArrowRight } from 'lucide-react';
import menuVeg from '../assets/menuveg.gif';
import menuNonVeg from '../assets/menunonveg.gif';
import menuDessert from '../assets/menudessert.gif';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('takeaway');

  const takeawayItems = [
    {
      id: 1,
      name: "Chole Bhature",
      description: "Experience the irresistible combination of spicy and tangy chickpeas with fluffy deep-fried bread.",
      price: "130",
      image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=1887&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Shahi Paneer",
      description: "Indulge in the richness of creamy tomato-based gravy, perfectly seasoned with aromatic spices.",
      price: "180",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Mutton Korma",
      description: "Get addicted to our flavorful and rich taste of our tender Mutton Korma, slow cooked to perfection.",
      price: "300",
      image: "https://plus.unsplash.com/premium_photo-1719908121468-eb177d387b10?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Tandoori Fish",
      description: "Enjoy the authentic taste of India with our Tandoori Fish, baked in Tandoori Masala.",
      price: "350",
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=1887&auto=format&fit=crop",
    }
  ];

  const zaikaCategories = [
    {
      name: "Veg",
      image: menuVeg,
      description: "Enjoy a variety of vegetarian specialties, carefully crafted with the freshest ingredients."
    },
    {
      name: "Non-Veg",
      image: menuNonVeg,
      description: "Delight in our mouthwatering selection of non-veg specialties, bursting with flavor."
    },
    {
      name: "Desserts",
      image: menuDessert,
      description: "Desserts are a sweet symphony for your taste buds, from creamy to light and fruity."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-[#F7F1E8] font-sans text-[#3F2A1E]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-[#A67C52] font-serif text-lg tracking-wide mb-2">
            Discover
          </h4>
          <h2 className="text-4xl md:text-5xl font-serif text-[#3F2A1E] mb-6 tracking-tight">
            Our Menu
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mb-8 opacity-60">
             <div className="h-[1px] w-12 bg-[#A67C52]"></div>
             <div className="text-[#A67C52] text-xs">✦ ✦ ✦</div>
             <div className="h-[1px] w-12 bg-[#A67C52]"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar Navigation */}
          <div className="flex lg:flex-col gap-6 justify-center lg:justify-start lg:w-1/5 min-w-[200px]">
            {/* Take Away Button */}
            <button
              onClick={() => setActiveTab('takeaway')}
              className={`group flex flex-col items-center justify-center p-8 border transition-all duration-300 h-40 relative overflow-hidden ${
                activeTab === 'takeaway'
                ? 'border-[#E1D0BD] bg-[#FFFDF9]'
                : 'border-[#E1D0BD] bg-[#FFF8EF] hover:bg-[#FFFDF9]'
              }`}
            >
              <Store 
                size={32} 
                strokeWidth={1.5} 
                className={`mb-4 transition-colors duration-300 ${
                  activeTab === 'takeaway' ? 'text-[#B4733C]' : 'text-[#B49674] group-hover:text-[#B4733C]'
                }`} 
              />
              <span className={`font-serif text-lg tracking-wide transition-colors duration-300 ${
                 activeTab === 'takeaway' ? 'text-[#3F2A1E]' : 'text-[#7A6049] group-hover:text-[#3F2A1E]'
              }`}>
                Take Away
              </span>
            </button>

            {/* Zaika-E-Khaas Button */}
            <button
              onClick={() => setActiveTab('zaika')}
              className={`group flex flex-col items-center justify-center p-8 border transition-all duration-300 h-40 relative overflow-hidden ${
                activeTab === 'zaika'
                ? 'border-[#E1D0BD] bg-[#FFFDF9]'
                : 'border-[#E1D0BD] bg-[#FFF8EF] hover:bg-[#FFFDF9]'
              }`}
            >
              <UtensilsCrossed 
                size={32} 
                strokeWidth={1.5} 
                className={`mb-4 transition-colors duration-300 ${
                  activeTab === 'zaika' ? 'text-[#B4733C]' : 'text-[#B49674] group-hover:text-[#B4733C]'
                }`} 
              />
              <span className={`font-serif text-lg tracking-wide transition-colors duration-300 ${
                 activeTab === 'zaika' ? 'text-[#3F2A1E]' : 'text-[#7A6049] group-hover:text-[#3F2A1E]'
              }`}>
                Zaika-E-Khaas
              </span>
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            {activeTab === 'takeaway' ? (
              // GRID FOR TAKE AWAY ITEMS
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {takeawayItems.map((item) => (
                  <div key={item.id} className="group flex flex-col bg-[#FFFDF9] border border-[#E1D0BD] hover:border-[#C58A52]/60 hover:shadow-lg transition-all duration-300">
                    {/* Image Container */}
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                    </div>

                    <div className="p-6 flex flex-col flex-grow text-center">
                      <h3 className="font-serif text-xl text-[#3F2A1E] mb-3 group-hover:text-[#B4733C] transition-colors">
                        {item.name}
                      </h3>

                      <p className="text-sm text-[#7A6049] leading-relaxed mb-4 flex-grow line-clamp-3">
                        {item.description}
                      </p>

                      <div className="mt-auto pt-4 border-t border-[#E1D0BD] w-full">
                        <span className="font-serif text-lg text-[#B4733C] font-medium">
                          ₹ {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // GRID FOR ZAIKA
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {zaikaCategories.map((cat, index) => (
                  <div
                    key={index}
                    className="group border border-[#E1D0BD] bg-[#FFFDF9] hover:border-[#C58A52]/60 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="h-56 flex items-center justify-center bg-[#FFF8EF] p-6 relative overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="max-w-full max-h-full object-contain mix-blend-multiply"
                        />
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col text-center">
                      <h3 className="font-serif text-2xl text-[#3F2A1E] mb-3 group-hover:text-[#B4733C] transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-[#7A6049] text-sm leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* View Full Menu Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#B4733C] text-white px-10 py-4 text-sm font-semibold tracking-wide hover:bg-[#9C6130] transition-colors duration-300 flex items-center gap-2 rounded-full shadow-sm">
            View Full Menu
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default MenuSection;