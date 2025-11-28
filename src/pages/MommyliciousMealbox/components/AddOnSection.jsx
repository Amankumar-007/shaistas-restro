import React from 'react';

// Using standard img tags with object-fit for the food images.
// I've selected high-quality placeholder images that match the specific items.

const AddOnSection = () => {
  const mainItem = {
    id: 1,
    name: "Choco Lava Cake",
    highlight: "Lava Cake",
    description: "Molten chocolate cake with a liquid chocolate core",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop", // Lava cake
    price: "$5.99"
  };

  const sideItems = [
    {
      id: 2,
      name: "Water Bottle",
      highlight: "Bottle",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=800&auto=format&fit=crop", // Water bottle
    },
    {
      id: 3,
      name: "Plain Rice",
      highlight: "Rice",
      image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800&auto=format&fit=crop", // Rice bowl
    },
    {
      id: 4,
      name: "Tawa Paratha",
      highlight: "Paratha",
      image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=800&auto=format&fit=crop", // Paratha/Flatbread
    }
  ];

  // Helper to split text and highlight specific parts in orange
  const RenderTitle = ({ text, highlight, className = "" }) => {
    if (!highlight) return <h3 className={className}>{text}</h3>;
    
    // Simple split assuming the highlight is part of the name
    // Case insensitive replace for flexible matching
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    
    return (
      <h3 className={className}>
        {parts.map((part, i) => (
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="text-orange-500 font-bold">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        ))}
      </h3>
    );
  };

  return (
    <div className=" bg-orange-50/30 flex items-center justify-center p-4 md:p-10 font-poppins text-[#2d211e]">
      {/* Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
          .font-poppins { font-family: 'Poppins', sans-serif; }
        `}
      </style>

      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-16 relative overflow-hidden">
        {/* Decorative Background Blob (Optional subtle detail) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-0"></div>

        {/* Main Header */}
        <div className="mb-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="text-orange-500">Add-ons</span> on the GO!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Left Column: Featured Item (Lava Cake) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 p-4 rounded-2xl transition-all duration-300 hover:bg-orange-50/50">
              {/* Image Container with Ring */}
              <div className="relative shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#3E2723] overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={mainItem.image} 
                    alt={mainItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Text Content */}
              <div className="text-center sm:text-left pt-2">
                <RenderTitle 
                  text={mainItem.name} 
                  highlight={mainItem.highlight} 
                  className="text-2xl font-bold mb-2 text-[#3E2723]" 
                />
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {mainItem.description}
                </p>
              </div>
            </div>
          </div>

          {/* Center/Divider - Only visible on large screens if needed, otherwise spacing handles it */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Right Column: List of Items */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-center">
            {sideItems.map((item) => (
              <div key={item.id} className="group flex items-center gap-6 p-3 rounded-xl hover:bg-orange-50/50 transition-colors duration-200 cursor-pointer">
                {/* Image */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#3E2723] overflow-hidden shadow-md shrink-0">
                   <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                  />
                </div>
                
                {/* Name */}
                <RenderTitle 
                  text={item.name} 
                  highlight={item.highlight} 
                  className="text-xl md:text-2xl font-bold text-[#3E2723]" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: CTA */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
            Want to Explore More <span className="text-orange-500">Options?</span>
          </h2>
          
          <button className="bg-[#3E2723] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 hover:shadow-orange-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap">
            Download Our Full Menu
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddOnSection;