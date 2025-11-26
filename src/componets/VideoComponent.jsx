import React, { useRef } from 'react';
import videoSource from '../assets/video.mp4';

const VideoComponent = () => {
  const videoRef = useRef(null);

  const handleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="relative w-5/6 h-85% mx-auto my-8 overflow-hidden rounded-3xl shadow-lg">
      <video
        ref={videoRef}
        src={videoSource}
        className="w-full h-full object-cover cursor-pointer"
        autoPlay
        loop
        muted
        playsInline
        onClick={handleClick}
      />
    </div>
  );
};

export default VideoComponent;