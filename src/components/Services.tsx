
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Paid Media Marketing",
      description: "Strategic ad campaigns across platforms like Google, Facebook, and Instagram that target your ideal customers and maximize conversions while minimizing costs.",
      benefits: [
        "Precise audience targeting",
        "Continuous optimization for lower CPAs",
        "Transparent reporting with clear ROI metrics"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M4 9h8" /><path d="M20 15h-8" /><circle cx="12" cy="9" r="2" /><circle cx="12" cy="15" r="2" /></svg>
      )
    },
    {
      title: "Performance Marketing",
      description: "Data-driven campaigns focused solely on measurable outcomes, ensuring every marketing dollar contributes directly to your business growth objectives.",
      benefits: [
        "Pay only for measurable results",
        "Real-time campaign adjustments",
        "Comprehensive analytics dashboard"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
      )
    },
    {
      title: "Google My Business Optimization",
      description: "Capture local customers actively searching for your services with a fully optimized GMB profile that improves visibility, drives traffic, and generates leads.",
      benefits: [
        "Higher local search visibility",
        "Improved customer engagement",
        "Boost in-store or service-area traffic"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
      )
    },
    {
      title: "Marketing Design",
      description: "Elevate your brand with eye-catching designs that support your marketing initiatives, from ad creatives and landing pages to social media assets and more.",
      benefits: [
        "Conversion-focused design principles",
        "Brand consistency across channels",
        "Quick turnaround for campaign assets"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M12 19c.5 0 1-.1 1.46-.27A7.5 7.5 0 0 0 19 12.74V11a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1h-1.5A1.5 1.5 0 0 0 8 13.5V16h2" /><path d="M16 10h-4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z" /><circle cx="12" cy="19" r="2" /></svg>
      )
    }
  ];

  return (
    <section className="py-16" id="services">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="mb-3 text-primary">Services That Drive Measurable Results</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Data-driven marketing strategies customized to your business goals and target audience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="mt-1 p-2 rounded-full bg-primary/10">{service.icon}</div>
                <div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  <CardDescription className="mt-2">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mt-2">
                  <h4 className="font-medium text-sm mb-2 text-secondary">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-secondary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button className="text-base gradient-bg hover:opacity-90 transition-opacity group" asChild>
            <a href="#contact" className="flex items-center gap-2">
              Request Service Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
