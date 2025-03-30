
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full border-b bg-background/90 backdrop-blur-sm fixed top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand-700">Ruckbell</span>
          <span className="text-2xl font-light">Services</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-brand-600 transition-colors">Services</a>
          <a href="#why-us" className="text-sm font-medium hover:text-brand-600 transition-colors">Why Us</a>
          <a href="#results" className="text-sm font-medium hover:text-brand-600 transition-colors">Results</a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-600 transition-colors">Contact</a>
        </nav>
        <Button asChild className="hidden md:inline-flex" size="sm">
          <a href="#contact">Get Started</a>
        </Button>
        <Button variant="outline" size="icon" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
