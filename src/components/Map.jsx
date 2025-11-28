import React from 'react';

const Map = () => {

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
     
        {/* Excellence Section */}
        <div className="w-full bg-white rounded-3xl py-12 md:py-16 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Excellence</h2>
          <div className="w-16 md:w-20 h-1 bg-[#f54900] mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8 md:mb-12 px-4">
            We are blessed enough to be honoured with great awards from
            food critics and organizations all over the world.
          </p>
          <p className="text-[#f54900] text-lg md:text-xl font-semibold mb-8 md:mb-12">Order Now</p>
          <div className="flex justify-center items-center space-x-6 md:space-x-8">
            <div className="text-[#CB202D] font-semibold text-lg shadow-lg drop-shadow-lg">zomato</div>
            <div className="text-[#FC8019] font-semibold text-lg shadow-lg drop-shadow-lg">swiggy</div>
            <div className="text-[#FA5754] font-semibold text-lg shadow-lg drop-shadow-lg">dineout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
