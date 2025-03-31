
import React from 'react';
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 gradient-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Marketing Results?
        </h2>
        <p className="text-white/90 mb-8 max-w-[700px] mx-auto">
          Join the growing list of businesses that have seen their ROI soar with our data-driven marketing strategies.
        </p>
        <Button size="lg" variant="secondary" asChild className="text-base bg-white text-primary hover:bg-white/90">
          <a href="#contact">Schedule Your Free Strategy Session</a>
        </Button>
      </div>
      
      {/* 3D Decorative Elements */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden md:block">
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm animate-float"></div>
      </div>
      <div className="absolute right-10 top-1/3 transform -translate-y-1/2 hidden md:block">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm animate-float animation-delay-300"></div>
      </div>
    </section>
  );
};

export default CTA;
