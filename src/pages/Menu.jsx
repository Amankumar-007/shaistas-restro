import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Store, IceCream, Snowflake, Loader2 } from 'lucide-react';
import menuData from '../assets/menuData/MenuData.json';

// Component for rendering specific icons based on string name
const CategoryIcon = ({ name, isActive }) => {
  const props = {
    size: 32,
    className: `mb-2 transition-colors duration-300 ${isActive ? 'text-[#FFB30E]' : 'text-gray-800'}`
  };

  switch (name) {
    case 'utensils': return <UtensilsCrossed {...props} />;
    case 'store': return <Store {...props} />;
    case 'ice-cream': return <IceCream {...props} />;
    case 'snowflake': return <Snowflake {...props} />;
    default: return <UtensilsCrossed {...props} />;
  }
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('veg');
  const [loading, setLoading] = useState(false);

  // Use the imported JSON data directly
  const data = menuData;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-10 h-10 animate-spin text-[#FFB30E]" />
      </div>
    );
  }

  if (!data) return null;

  // Find current category details
  const currentCategoryData = data.categories.find(c => c.id === activeCategory);
  
  // Filter items based on active category
  const filteredItems = data.items.filter(item => item.categoryId === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center pt-12 pb-8">
          <h1 className="text-4xl font-bold text-gray-800 font-serif">Our Menu</h1>
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {data.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  group flex flex-col items-center justify-center 
                  w-32 h-28 sm:w-40 sm:h-32 
                  border transition-all duration-300 rounded-sm
                  ${isActive 
                    ? 'border-[#FFB30E]' 
                    : 'border-gray-800 hover:border-gray-400'
                  }
                `}
              >
                <CategoryIcon name={cat.iconName} isActive={isActive} />
                <span className={`text-sm font-medium ${isActive ? 'text-[#FFB30E]' : 'text-gray-800'}`}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Description */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-gray-600 leading-relaxed px-4">
            {currentCategoryData?.description}
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-100 p-4">
                 {/* Image scaling effect on hover */}
                 <div className="w-full h-full rounded-lg overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                 </div>
              </div>

              {/* Card Content */}
              <div className="p-4 flex-grow flex flex-col text-center">
                <h3 className="text-[#5D4037] font-bold text-lg mb-2 font-serif leading-tight">
                  {item.name}
                </h3>
                
                <p className="text-gray-500 text-xs mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="mt-auto">
                  <p className="text-[#10B981] text-xs font-bold uppercase mb-3">
                    Serves {item.serves}
                  </p>
                  
                  <div className="flex justify-center gap-2">
                    {item.options.map((opt, idx) => (
                      <button
                        key={idx}
                        className={`
                          px-3 py-1.5 text-xs font-bold text-white rounded-sm transition-colors
                          ${opt.color === 'yellow' ? 'bg-[#FFB30E] hover:bg-[#e09e0c]' : 'bg-[#2D2D2D] hover:bg-black'}
                        `}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State if no items */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p>No items found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}