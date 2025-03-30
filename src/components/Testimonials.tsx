
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Ruckbell Services transformed our digital presence. Their paid media strategy reduced our CPA by 32% while increasing conversions by over 40%.",
      author: "Sarah Johnson",
      position: "Marketing Director, TechSolutions Inc."
    },
    {
      quote: "The results speak for themselves. Our GMB listing now generates 15+ quality leads weekly, and we're seeing a 250% ROI on our ad spend with their performance marketing approach.",
      author: "Michael Chen",
      position: "Owner, Chen's Consulting"
    },
    {
      quote: "Their team created ad designs that perfectly captured our brand voice while driving action. We've renewed our contract three times because the results are consistently excellent.",
      author: "Priya Patel",
      position: "CEO, GrowthMasters"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="results">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="mb-3">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Don't take our word for it. Here's what businesses like yours have achieved with our services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6 flex flex-col h-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-brand-400 mb-4">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <p className="text-gray-700 flex-grow">{testimonial.quote}</p>
                <div className="mt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
