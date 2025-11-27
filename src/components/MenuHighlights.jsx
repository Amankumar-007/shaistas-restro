import React from 'react';
import { motion } from 'framer-motion';

const MenuHighlights = () => {
  // Data for the three circular items
  const menuItems = [
    {
      id: 1,
      name: 'Paneer Masala',
      description: 'Rich creamy gravy with cottage cheese.',
      type: 'Veg',
      typeDescription: 'Enjoy a variety of vegetarian specialties, carefully crafted with the freshest ingredients to create a truly unique dining experience.',
      borderColor: 'border-red-800', // Matches the left image
      // Replace with your local image path
      img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop', 
    },
    {
      id: 2,
      name: 'Mutton Rogan Josh',
      description: 'Expertly cooked hearty mutton chops.',
      type: 'Non Veg',
      typeDescription: 'Delight in our mouthwatering selection of non-veg specialties, crafted with the freshest ingredients and bursting with flavor.',
      borderColor: 'border-yellow-500', // Matches the middle image
      img: 'https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Gajar Ka Halwa',
      description: 'A mouth watering sweet finish.',
      type: 'Veg',
      typeDescription: 'Savor our delightful vegetarian desserts, made with love and the finest ingredients for a perfect sweet ending to your meal.',
      borderColor: 'border-yellow-500', // Matches the right image
      img: 'https://st4.depositphotos.com/19960896/23061/i/450/depositphotos_230612370-stock-photo-gajar-halwa-carrot-based-sweet.jpg',
    },
  ];

  // Inline style for the font to ensure it works immediately
  const fontStyle = { fontFamily: '"Caveat", cursive' };

  return (
    <section className="w-full bg-white py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Text Section --- */}
        <div 
          className="text-center mb-16 space-y-2 text-xl md:text-2xl text-gray-800"
          style={fontStyle}
        >
          <p>
            Feast your senses on our delectable <span className="font-bold italic">Zaika-e-Khaas!</span>
          </p>
          <p>
            Expertly cooked <span className="font-bold italic">Chicken</span> and hearty <span className="font-bold italic">Mutton</span> that's hard to <span className="font-bold italic">Pass.</span>
          </p>
          <p>
            Pepper <span className="font-bold italic">Masala Jhinga</span> is a tantalizing <span className="font-bold italic">Delight,</span>
          </p>
          <p>
            Each dish is a celebration of flavors that's just <span className="font-bold italic">Right.</span>
          </p>
          <p className="pt-2">
            Experience excellence in <span className="font-bold italic">Culinary Art,</span>
          </p>
          <p>
            Indulge in our <span className="font-bold italic">Specialities</span> and leave with a satisfied <span className="font-bold italic">Heart.</span>
          </p>
          <div className="pt-6">
            <p>
              Premium category <span className="font-bold italic">Mughlai</span> and <span className="font-bold italic">Special Delicacies</span> with
            </p>
            <p>
              unbeatable <span className="font-bold italic">taste</span> and <span className="font-bold italic">Mouth Watering</span> experience exclusively from
            </p>
            <p className="font-bold text-2xl mt-2 uppercase tracking-wide">
              CHEF's Gold Standard Recipes
            </p>
          </div>
        </div>

        {/* --- Images / Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-32 lg:gap-40 justify-items-center px-12 md:px-16">
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.id * 0.2 }}
            >
              {/* Circle Container with Border - Now perfect circle on all screens */}
              <div className={`relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 rounded-full overflow-hidden border-[6px] ${item.borderColor} shadow-2xl bg-gray-100`}>
                
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay (The "Detail" Effect) */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="title text-white text-4xl font-bold mb-4" style={fontStyle}>
                    {item.name}
                  </h3>
                  <h3 className="title mb-3 text-white" style={{fontSize: '14px', fontFamily: 'Georgia'}}>
                    {item.type || 'Non Veg'}
                  </h3>
                  <p className="text-gray-200 mb-4" style={{fontSize: '14px'}}>
                    {item.description}
                  </p>
                  <p className="text-gray-200 text-sm mb-4" style={{fontSize: '14px'}}>
                    {item.typeDescription || 'Delight in our mouthwatering selection of non-veg specialties, crafted with the freshest ingredients and bursting with flavor.'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MenuHighlights;