
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full border-b backdrop-blur-sm fixed top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 shadow-sm' : 'bg-transparent border-transparent'
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Ruckbell</span>
          <span className="text-2xl font-light text-secondary">Services</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
          <a href="#why-us" className="text-sm font-medium hover:text-primary transition-colors">Why Us</a>
          <a href="#results" className="text-sm font-medium hover:text-primary transition-colors">Results</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <Button asChild className="hidden md:inline-flex bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" size="sm">
          <a href="#contact">Get Started</a>
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className={`md:hidden border-none ${scrolled ? 'text-primary' : 'text-primary'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg animate-fade-in">
          <div className="container py-4 flex flex-col space-y-3">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-50">Services</a>
            <a href="#why-us" className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-50">Why Us</a>
            <a href="#results" className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-50">Results</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-50">Contact</a>
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity mx-4">
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
