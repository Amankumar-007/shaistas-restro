import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#548774] text-white hover:bg-[#3d6158] focus:ring-[#548774]',
    secondary: 'bg-[#EAF4EE] text-gray-800 hover:bg-[#d4e7dd] focus:ring-[#EAF4EE]',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
