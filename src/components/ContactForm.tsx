
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { supabase } from '@/integrations/supabase/client';
import ContactInfo from './contact/ContactInfo';
import ContactCard from './contact/ContactCard';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Submitting form data:', formData);
      
      // Insert data into Supabase contact_form table
      const { error } = await supabase
        .from('contact_form')
        .insert([
          { 
            "Full Name": formData.name,
            "Email": formData.email,
            "Company Name": formData.company,
            "Your Message": formData.message,
            "Service Interested In": formData.service
          }
        ]);
        
      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      console.log('Form submitted successfully');
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        service: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission failed",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 relative" id="contact">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <ContactInfo />
          <ContactCard 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            isSubmitting={isSubmitting} 
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
