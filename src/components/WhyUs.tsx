
import React from 'react';

const WhyUs = () => {
  const reasons = [
    {
      title: "Data-First Approach",
      description: "We make decisions based on real data, not guesswork. Every campaign is continuously monitored and optimized for maximum performance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-brand-600">
          <path d="M3 3v18h18" />
          <path d="M18 12V8" />
          <path d="M14 18v-8" />
          <path d="M10 18v-4" />
          <path d="M6 18v-2" />
        </svg>
      )
    },
    {
      title: "Transparent Reporting",
      description: "No smoke and mirrors. You'll always know exactly how your campaigns are performing with clear, jargon-free reports focused on business results.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-brand-600">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      )
    },
    {
      title: "ROI-Focused Strategy",
      description: "We're obsessed with your return on investment. Our strategies focus on driving measurable business outcomes, not vanity metrics.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-brand-600">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 6v2" />
          <path d="M12 16v2" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16" id="why-us">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="mb-3">Why Choose Ruckbell Services</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            We're not just another marketing agency. Here's what sets us apart:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="mb-4 p-3 rounded-full bg-brand-50">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
