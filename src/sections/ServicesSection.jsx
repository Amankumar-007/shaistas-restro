import React from 'react';
import { Truck, Utensils, ShoppingBag, PartyPopper, Home } from 'lucide-react';
import mealboxImg from '../assets/mealbox.jpg';

const ServicesSection = () => {
  const servicesData = [
    {
      id: 1,
      title: "Delivery",
      icon: <Truck className="w-8 h-8" />,
      description: "Now your favorite meal is just one call away. Enjoy our mommylicious meals at your doorstep.",
      bgColor: "bg-amber-50"
    },
    {
      id: 2,
      title: "Catering",
      icon: <Utensils className="w-8 h-8" />,
      description: "Expert chefs create dishes that are delicious and visually stunning. Experience the best.",
      bgColor: "bg-red-50"
    },
    {
      id: 3,
      title: "Take Away",
      icon: <ShoppingBag className="w-8 h-8" />,
      description: "Dining in not your thing? Order online or take away and enjoy our specials at your place.",
      bgColor: "bg-emerald-50"
    },
    {
      id: 4,
      title: "Event Planning",
      icon: <PartyPopper className="w-8 h-8" />,
      description: "Catering by Shaista's is a Noida-based event management & wedding planning company.",
      bgColor: "bg-blue-50"
    },
    {
      id: 5,
      title: "Mommylicious MealBox",
      media: mealboxImg,
      icon: <Home className="w-8 h-8" />,
      description: "Food with the taste and love of home. Simple, healthy, and made from the heart.",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="w-full bg-[#F7F1E8] py-12 md:py-20 px-4 font-sans text-[#3F2A1E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#3F2A1E] mb-4 tracking-tight">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8 opacity-60">
            <div className="h-[1px] w-12 bg-[#A67C52]"></div>
            <div className="text-[#A67C52] text-xs">✦ ✦ ✦</div>
            <div className="h-[1px] w-12 bg-[#A67C52]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className={`group relative bg-[#FFFDF9] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E1D0BD] hover:border-[#C58A52]/60`}
            >
              <div className="p-6">
                <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {service.id === 5 ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C59D5F] p-0.5">
                      <img
                        src={service.media}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  ) : (
                    <div className="text-[#B4733C]">
                      {service.icon}
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-serif text-[#3F2A1E] mb-3 tracking-wide">
                  {service.title.includes('Mommylicious') ? (
                    <span className="block">
                      <span className="block">Mommylicious</span>
                      <span>MealBox</span>
                    </span>
                  ) : (
                    service.title
                  )}
                </h3>

                <p className="text-[#7A6049] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-[#B4733C] to-amber-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;