import React, { useState } from 'react';
import { X, ChefHat, UtensilsCrossed, Coffee, IceCream, Star, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local images
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
  { id: 1, title: "Shahi Tukda", category: "Dessert", image: img2, description: "Rich bread pudding with saffron and nuts", rating: 4.8, prepTime: 20 },
  { id: 2, title: "Mutton Nihari", category: "Main Course", image: img1, description: "Slow-cooked mutton stew with rich spices and tender meat, served with naan.", rating: 4.9, prepTime: 120 },
  { id: 3, title: "Chole Bhature", category: "Main Course", image: img3, description: "Spicy chickpea curry with fried bread, garnished with onions and lemon.", rating: 4.7, prepTime: 45 },
  { id: 4, title: "Hakka Noodles", category: "Starters", image: img4, description: "Wok-tossed hakka noodles with fresh vegetables and savory sauces.", rating: 4.5, prepTime: 25 },
  { id: 5, title: "Mutton Rogan Josh", category: "Main Course", image: img5, description: "Aromatic Kashmiri lamb curry with traditional spices and herbs.", rating: 4.8, prepTime: 90 },
  { id: 6, title: "Dal Makhani", category: "Main Course", image: img6, description: "Creamy black lentils slow-cooked overnight with butter and cream.", rating: 4.6, prepTime: 180 },
  { id: 7, title: "Butter Chicken", category: "Main Course", image: img7, description: "Tender chicken in a rich, mildly spiced tomato and butter sauce.", rating: 4.9, prepTime: 50 },
  { id: 8, title: "Tandoori Chicken", category: "Starters", image: img8, description: "Chicken marinated in yogurt and spices, cooked in a clay oven.", rating: 4.7, prepTime: 60 },
  { id: 9, title: "Fresh Lime Soda", category: "Beverages", image: img9, description: "Refreshing sparkling lime drink with a hint of mint and spices.", rating: 4.4, prepTime: 5 },
  { id: 10, title: "Chocolate Milkshake", category: "Beverages", image: img10, description: "Creamy chocolate milkshake topped with whipped cream and chocolate shavings.", rating: 4.6, prepTime: 10 },
  { id: 11, title: "Gulab Jamun with Ice Cream", category: "Dessert", image: img11, description: "Warm milk dumplings served with vanilla ice cream and rose syrup.", rating: 4.8, prepTime: 30 },
  { id: 12, title: "Gulab Jamun", category: "Dessert", image: img12, description: "Soft milk dumplings soaked in cardamom and rose flavored sugar syrup.", rating: 4.7, prepTime: 25 },
  { id: 13, title: "Chicken Biryani", category: "Main Course", image: img13, description: "Fragrant basmati rice layered with spiced chicken and caramelized onions.", rating: 4.9, prepTime: 60 },
  { id: 14, title: "Mutton Biryani", category: "Main Course", image: img14, description: "Aromatic rice cooked with tender mutton pieces and exotic spices.", rating: 4.9, prepTime: 90 },
  { id: 15, title: "Veg Biryani", category: "Main Course", image: img15, description: "Flavorful rice dish loaded with seasonal vegetables and aromatic spices.", rating: 4.5, prepTime: 45 },
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
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: 'spring',
      damping: 25,
      stiffness: 300
    }
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
      case 'Starters': return 'bg-blue-100 text-blue-800';
      case 'Main Course': return 'bg-red-100 text-red-800';
      case 'Beverages': return 'bg-cyan-100 text-cyan-800';
      case 'Dessert': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4">
            <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase">Food Gallery</span>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-2"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">Our Culinary Creations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our exquisite selection of dishes, each prepared with the finest ingredients and authentic recipes.
          </p>

          {/* Category Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-10"
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
                  flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  shadow-sm
                  ${activeCategory === cat.id 
                    ? 'bg-amber-500 text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-white/90 hover:shadow-md'
                  }
                `}
              >
                <span className="text-amber-600">{cat.icon}</span>
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.header>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {!loadedImages[item.id] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                        <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    <img 
                      src={item.image} 
                      alt={item.title}
                      onLoad={() => handleImageLoad(item.id)}
                      className={`
                        w-full h-full object-cover transition-transform duration-700 group-hover:scale-110
                        ${loadedImages[item.id] ? 'opacity-100' : 'opacity-0'}
                      `}
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-3">
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
          <div className="text-center py-12 text-gray-500">
            <p>No items found in this category.</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="relative md:w-1/2 h-64 md:h-auto">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <motion.button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={24} className="text-gray-800" />
                </motion.button>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col items-center text-center">
                <div className="mb-4">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${getCategoryColor(selectedItem.category)}`}>
                    {selectedItem.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedItem.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}