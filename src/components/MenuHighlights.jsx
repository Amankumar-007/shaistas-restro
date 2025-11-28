import React from 'react';

const MenuHighlights = () => {
  // Data matching the categories in the reference image
  const specialities = [

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



  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h4 className="text-[#C59D5F] font-serif text-lg tracking-wide mb-2">
            India Restaurant
          </h4>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 tracking-tight">
            Our Speciality
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2 mb-8 opacity-70">
             <div className="h-[1px] w-12 bg-[#C59D5F]"></div>
             <div className="text-[#C59D5F] text-xl">♦</div>
             <div className="h-[1px] w-12 bg-[#C59D5F]"></div>
          </div>

          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We provide a wide range of cuisines and dishes to choose from so that every foodie in 
            town has their best experience with us.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {specialities.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-[450px] w-full overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background Image with Zoom Effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${item.img})` }}
              />

              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Text Label and Description */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-center">
                <h3 className="text-white text-3xl font-serif tracking-wide border-b border-transparent group-hover:border-[#C59D5F] inline-block pb-1 transition-all duration-300">
                  {item.name}
                </h3>
                
                {/* Description on Hover */}
                <div className="absolute bottom-full left-0 w-full p-6 bg-black/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-white text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MenuHighlights;