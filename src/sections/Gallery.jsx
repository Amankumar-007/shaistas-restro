import React, { useState } from 'react';
import { X, ChefHat, UtensilsCrossed, Coffee, IceCream } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local images - Keeping your existing imports
import img1 from '../assets/1.webp';
import img2 from '../assets/3.webp';
import img3 from '../assets/4.webp';
import img4 from '../assets/5.webp';
import img5 from '../assets/6.webp';
import img6 from '../assets/7.webp';
import img7 from '../assets/8.webp';
import img8 from '../assets/9.webp';
import img9 from '../assets/10.webp';
import img10 from '../assets/11.webp';
import img11 from '../assets/12.webp';
import img12 from '../assets/13.webp';
import img13 from '../assets/14.webp';
import img14 from '../assets/15.webp';
import img15 from '../assets/16.webp';

const MENU_ITEMS = [
  { id: 1, title: "Shahi Tukda", category: "Dessert", image: img2, description: "Rich bread pudding with saffron and nuts" },
  { id: 2, title: "Mutton Nihari", category: "Main Course", image: img1, description: "Slow-cooked mutton stew with rich spices and tender meat, served with naan." },
  { id: 3, title: "Chole Bhature", category: "Main Course", image: img3, description: "Spicy chickpea curry with fried bread, garnished with onions and lemon." },
  { id: 4, title: "Hakka Noodles", category: "Starters", image: img4, description: "Wok-tossed hakka noodles with fresh vegetables and savory sauces." },
  { id: 5, title: "Mutton Rogan Josh", category: "Main Course", image: img5, description: "Aromatic Kashmiri lamb curry with traditional spices and herbs." },
  { id: 6, title: "Dal Makhani", category: "Main Course", image: img6, description: "Creamy black lentils slow-cooked overnight with butter and cream." },
  { id: 7, title: "Butter Chicken", category: "Main Course", image: img7, description: "Tender chicken in a rich, mildly spiced tomato and butter sauce." },
  { id: 8, title: "Tandoori Chicken", category: "Starters", image: img8, description: "Chicken marinated in yogurt and spices, cooked in a clay oven." },
  { id: 9, title: "Fresh Lime Soda", category: "Beverages", image: img9, description: "Refreshing sparkling lime drink with a hint of mint and spices." },
  { id: 10, title: "Chocolate Milkshake", category: "Beverages", image: img10, description: "Creamy chocolate milkshake topped with whipped cream and chocolate shavings." },
  { id: 11, title: "Gulab Jamun with Ice Cream", category: "Dessert", image: img11, description: "Warm milk dumplings served with vanilla ice cream and rose syrup." },
  { id: 12, title: "Gulab Jamun", category: "Dessert", image: img12, description: "Soft milk dumplings soaked in cardamom and rose flavored sugar syrup." },
  { id: 13, title: "Chicken Biryani", category: "Main Course", image: img13, description: "Fragrant basmati rice layered with spiced chicken and caramelized onions." },
  { id: 14, title: "Mutton Biryani", category: "Main Course", image: img14, description: "Aromatic rice cooked with tender mutton pieces and exotic spices." },
  { id: 15, title: "Veg Biryani", category: "Main Course", image: img15, description: "Flavorful rice dish loaded with seasonal vegetables and aromatic spices." },
];

const CATEGORIES = [
  { id: 'All', label: 'All', icon: <ChefHat size={18} /> },
  { id: 'Starters', label: 'Starters', icon: <UtensilsCrossed size={18} /> },
  { id: 'Main Course', label: 'Main Course', icon: <UtensilsCrossed size={18} /> },
  { id: 'Beverages', label: 'Beverages', icon: <Coffee size={18} /> },
  { id: 'Dessert', label: 'Desserts', icon: <IceCream size={18} /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -5,
    transition: { duration: 0.2 }
  }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', damping: 25, stiffness: 300 }
  },
  exit: { opacity: 0, scale: 0.9 }
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Starters': return 'text-blue-600 bg-blue-50';
      case 'Main Course': return 'text-red-600 bg-red-50';
      case 'Beverages': return 'text-cyan-600 bg-cyan-50';
      case 'Dessert': return 'text-purple-600 bg-purple-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen font-sans bg-[#EAF4EE] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.header 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4">
            <span className="text-amber-600 text-sm font-bold tracking-wider uppercase">Our Menu</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Explore Our Dishes</h1>
          
          {/* Category Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300
                  ${activeCategory === cat.id 
                    ? 'bg-[#548774] text-white shadow-lg shadow-amber-500/30' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }
                `}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.header>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16 pt-8"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredItems.map((item, index) => (
              <motion.div 
                key={item.id}
                custom={index % 6}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="group cursor-pointer relative"
                onClick={() => setSelectedItem(item)}
              >
                {/* Card Container */}
                <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 flex flex-col pt-12">
                  
                  {/* Floating Circular Image */}
                  <div className="absolute -top-12 right-6 w-32 h-32 rounded-full p-1 bg-white shadow-lg group-hover:scale-110 transition-transform duration-500 ease-in-out">
                    <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-100">
                      {!loadedImages[item.id] && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      <img 
                        src={item.image} 
                        alt={item.title}
                        onLoad={() => handleImageLoad(item.id)}
                        className={`w-full h-full object-cover transition-opacity duration-300 ${loadedImages[item.id] ? 'opacity-100' : 'opacity-0'}`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col h-full">
                    <div className="mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-amber-600 transition-colors pr-8">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg">No items found in this category.</p>
          </div>
        )}
      </div>

      {/* Detail Modal (Kept for functionality) */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="h-64 overflow-hidden">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getCategoryColor(selectedItem.category)}`}>
                    {selectedItem.category}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedItem.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}