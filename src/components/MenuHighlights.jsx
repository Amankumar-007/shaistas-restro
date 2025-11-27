import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const MenuHighlights = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Paneer Masala',
      description: 'Rich creamy gravy with cottage cheese.',
      type: 'Veg',
      typeDescription: 'Enjoy our vegetarian specialties, crafted with the freshest ingredients.',
      img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop',
      bgGradient: 'from-red-50 to-amber-50',
    },
    {
      id: 2,
      name: 'Mutton Rogan Josh',
      description: 'Expertly cooked hearty mutton chops.',
      type: 'Non Veg',
      typeDescription: 'Delight in our mouthwatering non-veg specialties, bursting with flavor.',
      img: 'https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=1000&auto=format&fit=crop',
      bgGradient: 'from-amber-50 to-rose-50',
    },
    {
      id: 3,
      name: 'Gajar Ka Halwa',
      description: 'A mouth watering sweet finish.',
      type: 'dessert',
      typeDescription: 'Savor our delightful vegetarian desserts, made with love and care.',
      img: 'https://st4.depositphotos.com/19960896/23061/i/450/depositphotos_230612370-stock-photo-gajar-halwa-carrot-based-sweet.jpg',
      bgGradient: 'from-amber-50 to-yellow-50',
    },
  ];

  const fontStyle = { fontFamily: '"Caveat", cursive' };

  return (
    <section className="w-full bg-[#EAF4EE] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={fontStyle}>
            Our Special Delicacies
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Experience the rich flavors and culinary excellence of our signature dishes, each prepared with the finest ingredients and authentic recipes.
          </p>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-96"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Image with Hover Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${item.img})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500"></div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 text-white bg-gradient-to-t from-black/70 via-transparent to-transparent">
                {/* Type Badge */}
                <div className="self-start">
                  <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                    item.type === 'Veg' ? 'bg-green-600' : 'bg-red-600'
                  }`}>
                    {item.type}
                  </span>
                </div>

                {/* Dish Info */}
                <div className="mt-auto transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.name}</h3>
                  <p className="text-white/90 mb-4">{item.description}</p>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-sm text-white/80 mb-4">{item.typeDescription}</p>
                    <Button 
                      variant="primary"
                      onClick={() => {}}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-2xl">{item.id.toString().padStart(2, '0')}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button 
            variant="primary"
            className="shadow-lg hover:shadow-gray-400/30"
            onClick={() => {}}
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;