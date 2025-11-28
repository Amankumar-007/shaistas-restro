import React, { useState, useRef } from 'react';
import { Play, Pause, ArrowUpRight, Heart } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    // Background: Soft Cream
    <section className="bg-[#FDFBF7] py-15 w-full overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* --- 60% VIDEO SECTION --- */}
          <div className="w-full lg:w-[60%] relative group">
            
            {/* Decorative Offset Border (Warm Brown Tone) */}
            <div className="absolute inset-0 border-2 border-[#3f2e22]/10 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />

            {/* Video Container */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#3f2e22]/10 transform transition-all duration-700 ease-out group-hover:scale-[1.01]">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover aspect-video"
                autoPlay
                loop
                muted
                playsInline
                onClick={togglePlay}
              >
                <source src="../../../../src/assets/Mommylicious.webm" type="video/webm" />
               
                Your browser does not support the video tag.
              </video>

              {/* Floating "Fun" Card (Bottom Right) */}
              <div className="absolute bottom-6 right-6 bg-[#FDFBF7]/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#3f2e22]/10 max-w-xs transform transition-transform duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hidden md:flex items-center gap-3">
                <div className="bg-[#3f2e22]/10 p-2 rounded-full">
                   <Heart size={20} className="text-[#3f2e22] fill-[#3f2e22]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#3f2e22]">Loved by users</p>
                  <p className="text-[10px] text-[#3f2e22]/60">"The aesthetic is just... chef's kiss."</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- 40% TEXT SECTION --- */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center space-y-8">
            
            {/* Minimal Label */}
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-[#3f2e22]/30"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#3f2e22]/60">Our Philosophy</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#3f2e22] tracking-tight leading-[1.15]">
              Designed to be <br />
              <span className="italic opacity-80">felt, not just seen.</span>
            </h2>

            <p className="text-lg text-[#3f2e22]/70 leading-relaxed font-light">
              We believe technology should feel natural. By stripping away the unnecessary, we uncover the essence of what makes an experience truly memorable.
            </p>

            {/* Aesthetic Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#3f2e22]/10">
              <div>
                <h3 className="text-3xl font-medium text-[#3f2e22]">400+</h3>
                <p className="text-sm text-[#3f2e22]/60 mt-1 uppercase tracking-wider">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-medium text-[#3f2e22]">Zero</h3>
                <p className="text-sm text-[#3f2e22]/60 mt-1 uppercase tracking-wider">Compromises</p>
              </div>
            </div>

            {/* Primary Action Button - Requested Color */}
            <button className="group w-fit flex items-center gap-3 px-8 py-4 bg-[#3f2e22] text-[#FDFBF7] rounded-full hover:bg-[#3f2e22]/90 hover:shadow-lg transition-all duration-300">
              <span className="font-medium tracking-wide">View Collection</span>
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;