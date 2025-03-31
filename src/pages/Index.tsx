
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Background from '@/components/Background';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Background />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Testimonials />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
