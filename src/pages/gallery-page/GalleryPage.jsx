import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';

// Import images
import img1 from '../../assets/1.webp';
import img2 from '../../assets/3.webp';
import img3 from '../../assets/4.webp';
import img4 from '../../assets/5.webp';
import img5 from '../../assets/6.webp';
import img6 from '../../assets/7.webp';
import img7 from '../../assets/8.webp';
import img8 from '../../assets/9.webp';
import img9 from '../../assets/10.webp';
import img10 from '../../assets/11.webp';
import img11 from '../../assets/12.webp';
import img12 from '../../assets/13.webp';
import img13 from '../../assets/14.webp';
import img14 from '../../assets/15.webp';
import img15 from '../../assets/16.webp';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, title: 'Shahi Tukda', image: img1 },
    { id: 2, title: 'Mutton Nihari', image: img2 },
    { id: 3, title: 'Chole Bhature', image: img3 },
    { id: 4, title: 'Noodles', image: img4 },
    { id: 5, title: 'Mutton Nalli Roghan Josh', image: img5 },
    { id: 6, title: 'Dal Makhani', image: img6 },
    { id: 7, title: 'Butter Chicken', image: img7 },
    { id: 8, title: 'Tandoori Chicken', image: img8 },
    { id: 9, title: 'Fresh Lime Soda', image: img9 },
    { id: 10, title: 'Milk Shake', image: img10 },
    { id: 11, title: 'Gulab Jamun with Ice Cream', image: img11 },
    { id: 12, title: 'Gulab Jamun', image: img12 },
    { id: 13, title: 'Chicken Biryani', image: img13 },
    { id: 14, title: 'Mutton Biryani', image: img14 },
    { id: 15, title: 'Veg Biryani', image: img15 },
  ];

  const openModal = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] overflow-hidden">
        {/* Using a nice ambience image for the hero, or img5/img6 if generic not available */}
        <img 
          src={img5} // You can change this to a specific 'ambience' image if you have one
          alt="Gallery Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl text-white font-serif tracking-widest uppercase text-center"
          >
            Gallery
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] bg-white mt-4"
          />
        </div>
      </div>

      {/* --- GALLERY GRID (Matches Bottom Image) --- */}
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
        <Fade cascade damping={0.1} triggerOnce>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                className="group cursor-pointer relative"
                onClick={() => openModal(item)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {/* Image Container - Removed white card padding for cleaner look */}
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Touch feedback overlay */}
                  <div className="absolute inset-0 bg-black/10 sm:group-hover:bg-black/20 transition-opacity duration-300" />
                </div>
                
                {/* Title - Optimized for mobile */}
                <div className="mt-2 sm:mt-3 text-center px-1">
                  <h3 className="text-sm sm:text-base md:text-lg text-gray-800 font-serif group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </Fade>

        {/* --- MODAL (Kept Functional) --- */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm overflow-y-auto" onClick={closeModal}>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-5xl w-full max-h-[90vh] outline-none" 
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
                aria-label="Close"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="bg-white p-1 sm:p-2 w-full">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain"
                />
              </div>
              <div className="mt-3 sm:mt-4 px-2 text-center">
                <h3 className="text-lg sm:text-2xl text-white font-serif tracking-wider">{selectedImage.title}</h3>
                <button 
                  onClick={closeModal}
                  className="mt-3 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm sm:text-base transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;