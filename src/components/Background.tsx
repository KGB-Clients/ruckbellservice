
import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-coral-50 opacity-80"></div>
      
      {/* Animated blobs */}
      <div className="blob w-[500px] h-[500px] bg-coral-100/40 top-0 -left-48 animation-delay-2000"></div>
      <div className="blob w-[600px] h-[600px] bg-amber-100/40 top-1/4 -right-48 animation-delay-4000"></div>
      <div className="blob w-[500px] h-[500px] bg-amber-200/30 -bottom-48 left-1/4 animation-delay-6000"></div>
      
      {/* Colorful circles */}
      <div className="absolute top-[5%] left-[10%] w-24 h-24 rounded-full bg-gradient-to-r from-coral-200/20 to-amber-200/20 blur-xl"></div>
      <div className="absolute top-[50%] right-[15%] w-32 h-32 rounded-full bg-gradient-to-r from-coral-300/20 to-amber-300/20 blur-xl"></div>
      <div className="absolute bottom-[15%] left-[20%] w-28 h-28 rounded-full bg-gradient-to-r from-amber-200/20 to-coral-200/20 blur-xl"></div>
      
      {/* Subtle grid pattern for depth */}
      <div className="absolute inset-0" 
          style={{ 
            backgroundImage: 
              'linear-gradient(to right, rgba(250, 220, 200, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(250, 220, 200, 0.05) 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}>
      </div>
      
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient opacity-20"></div>
    </div>
  );
};

export default Background;
