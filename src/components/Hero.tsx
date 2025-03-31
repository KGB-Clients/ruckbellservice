
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <h1 className="animate-fade-up text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="gradient-text">Supercharge</span> Your ROI With Data-Driven Marketing
            </h1>
            <p className="animate-fade-up animation-delay-100 mx-auto max-w-[700px] text-gray-700 md:text-xl">
              We turn your marketing budget into measurable growth. Stop wasting money on campaigns that don't deliver results.
            </p>
          </div>
          <div className="animate-fade-up animation-delay-200 flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
            <Button className="text-base gradient-bg hover:opacity-90 transition-opacity" size="lg" asChild>
              <a href="#contact" className="flex items-center gap-2">
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" className="text-base border-2 border-secondary text-secondary hover:bg-secondary/10 transition-colors" size="lg" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>
          
          {/* Marketing achievement badges */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up animation-delay-300">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm flex flex-col items-center">
              <p className="text-2xl font-bold text-primary">250%</p>
              <p className="text-xs text-gray-600">Avg. ROAS Increase</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm flex flex-col items-center">
              <p className="text-2xl font-bold text-secondary">40%</p>
              <p className="text-xs text-gray-600">Lower Cost Per Lead</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm flex flex-col items-center">
              <p className="text-2xl font-bold text-primary">85%</p>
              <p className="text-xs text-gray-600">Client Retention</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm flex flex-col items-center">
              <p className="text-2xl font-bold text-secondary">100+</p>
              <p className="text-xs text-gray-600">Businesses Scaled</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 3D Decorative Elements */}
      <div className="hidden md:block absolute top-1/2 -left-4 w-16 h-16 transform -translate-y-1/2">
        <div className="w-full h-full rounded-lg bg-gradient-to-br from-coral-300 to-transparent opacity-60 animate-float"></div>
      </div>
      <div className="hidden md:block absolute top-1/3 right-4 w-20 h-20 transform -translate-y-1/2">
        <div className="w-full h-full rounded-lg bg-gradient-to-bl from-amber-300 to-transparent opacity-60 animate-float animation-delay-200"></div>
      </div>
    </section>
  );
};

export default Hero;
