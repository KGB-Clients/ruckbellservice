
import React from 'react';
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-brand-600">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Marketing Results?
        </h2>
        <p className="text-white/90 mb-8 max-w-[700px] mx-auto">
          Join the growing list of businesses that have seen their ROI soar with our data-driven marketing strategies.
        </p>
        <Button size="lg" variant="secondary" asChild className="text-base">
          <a href="#contact">Schedule Your Free Strategy Session</a>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
