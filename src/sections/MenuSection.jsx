import React, { useState } from 'react';
import { Store, UtensilsCrossed } from 'lucide-react';
import menuVeg from '../assets/menuveg.gif';
import menuNonVeg from '../assets/menunonveg.gif';
import menuDessert from '../assets/menudessert.gif';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('takeaway');

  // Data for the "Take Away" view (matching your image)
  const takeawayItems = [
    {
      id: 1,
      name: "Chole Bhature",
      description: "Experience the irresistible combination of spicy and tangy chickpeas with fluffy deep-fried bread, in every bite of our authentic Chole Bhature.",
      price: "130",
      image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=1887&auto=format&fit=crop", // Replace with your image
    },
    {
      id: 2,
      name: "Shahi Paneer",
      description: "Indulge in the richness of creamy tomato-based gravy, perfectly seasoned with aromatic spices and tender chunks of paneer, in every bite of our delicious Shahi Paneer.",
      price: "180",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop", // Replace with your image
    },
    {
      id: 3,
      name: "Mutton Korma",
      description: "Get addicted to our flavorful and rich taste of our tender Mutton Korma, slow cooked to perfection by expert chefs with a blend of aromatic spices.",
      price: "300",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356f36?q=80&w=1760&auto=format&fit=crop", // Replace with your image
    },
    {
      id: 4,
      name: "Tandoori Fish",
      description: "Enjoy the authentic taste of India with our Tandoori Fish, baked in Tandoori Masala and served as an appetizer, side, or main course for a light lunch.",
      price: "350",
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=1887&auto=format&fit=crop", // Replace with your image
    }
  ];

  // Data for the "Zaika-E-Khaas" view with images and descriptions
  const zaikaCategories = [
    { 
      name: "Veg",
      image: menuVeg,
      description: "Enjoy a variety of vegetarian specialties, carefully crafted with the freshest ingredients to create a truly unique dining experience."
    },
    { 
      name: "Non-Veg",
      image: menuNonVeg,
      description: "Delight in our mouthwatering selection of non-veg specialties, crafted with the freshest ingredients and bursting with flavor."
    },
    { 
      name: "Desserts",
      image: menuDessert,
      description: "Desserts are a sweet symphony for your taste buds, from creamy and decadent to light and fruity, a perfect way to end any meal."
    }
  ];

  return (
    <section className="w-full py-12 px-4 bg-white font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#3a2a2a]">
          Our Menu
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <div className="flex lg:flex-col gap-4 justify-center lg:justify-start lg:w-1/5 min-w-[200px]">
            {/* Take Away Button */}
            <button
              onClick={() => setActiveTab('takeaway')}
              className={`flex flex-col items-center justify-center p-8 border rounded-md transition-all duration-300 h-40 ${
                activeTab === 'takeaway' 
                  ? 'border-yellow-400 text-yellow-500' 
                  : 'border-gray-800 text-gray-800 hover:bg-gray-50'
              }`}
            >
              <Store size={40} className="mb-3" strokeWidth={1.5} />
              <span className="font-medium text-lg">Take Away</span>
            </button>

            {/* Zaika-E-Khaas Button */}
            <button
              onClick={() => setActiveTab('zaika')}
              className={`flex flex-col items-center justify-center p-8 border rounded-md transition-all duration-300 h-40 ${
                activeTab === 'zaika' 
                  ? 'border-yellow-400 text-yellow-500' 
                  : 'border-gray-800 text-gray-800 hover:bg-gray-50'
              }`}
            >
              <UtensilsCrossed size={40} className="mb-3" strokeWidth={1.5} />
              <span className="font-medium text-lg">Zaika-E-Khaas</span>
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            {activeTab === 'takeaway' ? (
              // GRID FOR TAKE AWAY ITEMS
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {takeawayItems.map((item) => (
                  <div key={item.id} className="border border-gray-200 p-4 flex flex-col items-center text-center h-full hover:shadow-lg transition-shadow">
                    {/* Circular Image Container */}
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-white shadow-sm">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold text-[#4A2C2A] mb-3">
                      {item.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>
                    
                    <span className="font-bold text-[#4A2C2A] mt-auto">
                      ₹ {item.price}/-
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              // GRID FOR ZAIKA (Category Cards with Centered Icons and Descriptions)
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in zoom-in duration-300">
                {zaikaCategories.map((cat, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 bg-white flex flex-col h-full"
                  >
                    <div className="h-48 flex items-center justify-center bg-gray-50 p-4">
                      <div className="w-32 h-32 flex items-center justify-center">
                        <img 
                          src={cat.image} 
                          alt={cat.name}
                          className="max-w-full max-h-full object-contain"
                          style={{ imageRendering: 'auto' }}
                        />
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-serif text-2xl font-bold text-[#4A2C2A] mb-3 text-center">
                        {cat.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-center">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Read More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-medium tracking-wide hover:bg-gray-800 hover:text-white transition-colors uppercase text-sm">
            Read More
          </button>
        </div>

      </div>
    </section>
  );
};

export default MenuSection;