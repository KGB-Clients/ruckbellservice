
import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 opacity-80"></div>
      
      {/* 3D Floating elements - updated to grey tones */}
      <div className="floating-shape w-64 h-64 bg-gray-200 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="spin-shape w-96 h-96 bg-gray-300 rounded-full blur-3xl top-1/3 -right-48"></div>
      <div className="pulse-shape w-80 h-80 bg-gray-200 rounded-full blur-3xl -bottom-40 left-1/4"></div>
      
      {/* Abstract shapes - updated to grey tones */}
      <div className="floating-shape w-20 h-20 bg-gray-400 opacity-20 rounded-full top-1/4 left-1/6"></div>
      <div className="spin-shape w-16 h-16 bg-gray-500 opacity-20 rounded-full top-2/3 right-1/3"></div>
      <div className="pulse-shape w-24 h-24 bg-gray-400 opacity-20 rounded-full bottom-1/4 left-2/3"></div>
      
      {/* Subtle grid pattern for depth */}
      <div className="absolute inset-0" 
          style={{ 
            backgroundImage: 
              'linear-gradient(to right, rgba(200, 200, 200, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 200, 200, 0.05) 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}>
      </div>
    </div>
  );
};

export default Background;
