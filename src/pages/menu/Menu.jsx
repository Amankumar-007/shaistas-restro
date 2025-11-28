import React, { useState } from 'react';
import { Calendar, ChefHat, Plus, UtensilsCrossed, Coffee, Sunset, Sun } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter Categories Configuration
  const categories = [
    { id: 'all', label: 'All Menus', icon: UtensilsCrossed },
    { id: 'breakfast', label: 'Breakfast', icon: Coffee },
    { id: 'lunch', label: 'Lunch', icon: Sun },
    { id: 'dinner', label: 'Dinner', icon: Sunset },
  ];

  // Menu Sections Configuration
  // This allows us to dynamically render sections based on the filter
  const allSections = [
    { 
      id: 'breakfast', 
      title: 'Breakfast Special Menu', 
      items: menuItems.breakfast,
      hasCta: true // Original design had the button after breakfast
    },
    { 
      id: 'lunch', 
      title: 'Lunch Special Menu', 
      items: menuItems.lunch 
    },
    { 
      id: 'dinner', 
      title: 'Dinner Special Menu', 
      items: menuItems.dinner 
    },
  ];

  // Filter logic
  const visibleSections = activeCategory === 'all' 
    ? allSections 
    : allSections.filter(section => section.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#fff0dc] text-[#1B3C29] font-serif py-25 px-4 md:px-8 selection:bg-[#1B3C29] selection:text-white transition-colors duration-500">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* --- Top Hero Section --- */}
        <section className="text-center space-y-10">
          <h1 className="text-4xl md:text-6xl font-medium tracking-wide leading-tight">
            Dive Into Delicious <br />
            <span className="italic">Meal Dishes</span>
          </h1>

          {/* Image Wave Gallery */}
          <div className="flex items-center justify-center gap-2 md:gap-6 overflow-hidden py-4">
            {/* Far Left */}
            <div className="w-1/6 md:w-40 h-32 md:h-48 rounded-xl overflow-hidden shadow-lg transform translate-y-4 hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300" 
                alt="Salad" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Left */}
            <div className="w-1/5 md:w-52 h-40 md:h-64 rounded-xl overflow-hidden shadow-lg transform translate-y-2 hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400" 
                alt="Pizza" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Center (Main) */}
            <div className="w-1/4 md:w-64 h-52 md:h-80 rounded-2xl overflow-hidden shadow-2xl z-10 hover:scale-105 transition-transform duration-500 ring-4 ring-white/50">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500" 
                alt="Main Dish" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right */}
            <div className="w-1/5 md:w-52 h-40 md:h-64 rounded-xl overflow-hidden shadow-lg transform translate-y-2 hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0">
              <img 
                src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&q=80&w=400" 
                alt="Pasta" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Far Right */}
            <div className="w-1/6 md:w-40 h-32 md:h-48 rounded-xl overflow-hidden shadow-lg transform translate-y-4 hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0">
              <img 
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=300" 
                alt="Drink" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* --- Aesthetic Filter System --- */}
        <div className="sticky top-4 z-40 flex justify-center py-17">
          <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-[#1B3C29]/10 flex gap-1 md:gap-2 overflow-x-auto max-w-full mx-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 whitespace-nowrap
                    ${isActive 
                      ? 'bg-[#1B3C29] text-white shadow-md transform scale-105 font-medium' 
                      : 'text-[#1B3C29]/70 hover:bg-[#1B3C29]/5 hover:text-[#1B3C29]'}
                  `}
                >
                  <Icon size={16} className={isActive ? 'text-white' : 'text-[#1B3C29]/50'} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-dotted border-[#1B3C29]/20 mx-auto w-full max-w-5xl"></div>

        {/* --- Dynamic Menu Sections --- */}
        <div className="space-y-16 min-h-[500px]">
          {visibleSections.map((section, index) => (
            <React.Fragment key={section.id}>
              {/* Section Content */}
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                <MenuSection 
                  title={section.title} 
                  items={section.items} 
                />
              </div>

              {/* Optional CTA Button (Only shown if configured for this section) */}
              {section.hasCta && (
                <div className="flex justify-center py-4 animate-in fade-in zoom-in duration-700 delay-100">
                  <button className="bg-[#1B3C29] text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#142e22] transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group">
                    <span>Book a Table</span>
                    <Calendar size={18} className="group-hover:animate-pulse" />
                  </button>
                </div>
              )}

              {/* Render Divider if it's NOT the last item in the list */}
              {index < visibleSections.length - 1 && (
                <div className="border-t-2 border-dotted border-[#1B3C29]/20 mx-auto w-full max-w-5xl"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Empty State (Just in case) */}
        {visibleSections.length === 0 && (
          <div className="text-center py-20 text-[#1B3C29]/50">
            <p>No menu items available for this category.</p>
          </div>
        )}

      </div>
    </div>
  );
};

// --- Sub-Components & Data ---

const MenuSection = ({ title, items }) => (
  <section className="space-y-12">
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <ChefHat size={32} strokeWidth={1.5} className="text-[#1B3C29]" />
      </div>
      <h2 className="text-3xl md:text-5xl font-medium text-[#1B3C29]">{title}</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </section>
);

const MenuItem = ({ name, price, ingredients, image }) => (
  <div className="flex gap-4 items-start group cursor-default">
    {/* Dish Image */}
    <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden shadow-md relative group/img">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
      />
      {/* Overlay Add Button */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
    </div>

    {/* Details */}
    <div className="flex-grow pt-1 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-baseline justify-between w-full">
          <h3 className="text-lg md:text-xl font-bold text-[#1B3C29] whitespace-nowrap pr-2">
            {name}
          </h3>
          
          {/* Dotted Leader */}
          <div className="flex-grow border-b-2 border-dotted border-[#1B3C29]/30 relative -top-1.5 mx-1"></div>
          
          <span className="text-lg md:text-xl font-bold text-[#1B3C29] pl-2 font-serif">
            ₹{price}
          </span>
        </div>
        
        {/* Ingredients and Add Button Row */}
        <div className="flex justify-between items-start mt-1.5">
          <p className="text-sm text-[#1B3C29]/70 font-sans tracking-wide max-w-[85%] leading-relaxed">
            {ingredients}
          </p>

          {/* Aesthetic Add Button */}
          <button 
            className="group/btn ml-2 w-8 h-8 rounded-full border border-[#1B3C29]/30 flex items-center justify-center text-[#1B3C29] 
                       hover:bg-[#1B3C29] hover:text-white hover:border-[#1B3C29] transition-all duration-300 
                       transform hover:scale-110 active:scale-95"
            aria-label="Add to cart"
          >
            <Plus size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const menuItems = {
  breakfast: [
    {
      name: "Chole Bhature",
      price: "180",
      ingredients: "Spicy chickpea curry with fried bread",
      image: "src/assets/1.webp"
    },
    {
      name: "Shahi Tukda",
      price: "120",
      ingredients: "Royal bread pudding with nuts and saffron",
      image: "src/assets/3.webp"
    },
    {
      name: "Noodle",
      price: "150",
      ingredients: "Stir-fried noodles with vegetables",
      image: "src/assets/4.webp"
    },
    {
      name: "Fresh Lime Soda",
      price: "80",
      ingredients: "Refreshing lime soda with mint",
      image: "src/assets/5.webp"
    },
    {
      name: "Milk Shake",
      price: "120",
      ingredients: "Creamy milkshake with ice cream",
      image: "src/assets/6.webp"
    },
    {
      name: "Gulab Jamun",
      price: "60",
      ingredients: "Soft milk dumplings in sugar syrup",
      image: "src/assets/8.webp"
    }
  ],
  lunch: [
    {
      name: "Mutton Nihari",
      price: "350",
      ingredients: "Slow-cooked mutton in spicy gravy",
      image: "src/assets/7.webp"
    },
    {
      name: "Dal Makhani",
      price: "220",
      ingredients: "Creamy black lentils with butter",
      image: "src/assets/9.webp"
    },
    {
      name: "Butter Chicken",
      price: "320",
      ingredients: "Tender chicken in creamy tomato gravy",
      image: "src/assets/11.webp"
    },
    {
      name: "Tandoori Chicken",
      price: "280",
      ingredients: "Marinated chicken cooked in tandoor",
      image: "src/assets/10.webp"
    },
    {
      name: "Veg Biryani",
      price: "200",
      ingredients: "Fragrant rice with mixed vegetables",
      image: "src/assets/12.webp"
    },
    {
      name: "Gulab Jamun with Ice Cream",
      price: "100",
      ingredients: "Gulab jamun served with vanilla ice cream",
      image: "src/assets/13.webp"
    }
  ],
  dinner: [
    {
      name: "Mutton Nalli Roghan Josh",
      price: "450",
      ingredients: "Mutton marrow in aromatic Kashmiri spices",
      image: "src/assets/14.webp"
    },
    {
      name: "Biryani",
      price: "250",
      ingredients: "Aromatic basmati rice with meat and spices",
      image: "src/assets/15.webp"
    },
    {
      name: "Mutton Biryani",
      price: "380",
      ingredients: "Dum-cooked mutton biryani with saffron",
      image: "src/assets/16.webp"
    }
  ]
};

export default Menu;