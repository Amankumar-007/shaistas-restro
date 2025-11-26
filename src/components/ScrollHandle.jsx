import React from 'react';
import { motion } from 'framer-motion';
import VideoSource from '../assets/Zaika-E-Khaas.webm';

const ScrollHandle = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full max-w-4xl rounded-lg overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto"
        >
          <source src={VideoSource} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ScrollHandle;