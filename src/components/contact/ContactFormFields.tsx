
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormFieldsProps {
  formData: {
    name: string;
    email: string;
    company: string;
    message: string;
    service: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
}

const ContactFormFields = ({ formData, handleChange, handleSubmit, isSubmitting }: ContactFormFieldsProps) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="John Doe" 
          required 
          className="border-gray-300 focus:border-primary"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="john@company.com" 
          required 
          className="border-gray-300 focus:border-primary"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input 
          id="company" 
          name="company" 
          value={formData.company} 
          onChange={handleChange} 
          placeholder="Your Company" 
          className="border-gray-300 focus:border-primary"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service Interested In</Label>
        <select 
          id="service" 
          name="service" 
          value={formData.service} 
          onChange={handleChange}
          className="w-full h-10 px-3 py-2 bg-background border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option>Not specified</option>
          <option>Paid Media Marketing</option>
          <option>Performance Marketing</option>
          <option>Google My Business</option>
          <option>Marketing Design</option>
          <option>Multiple Services</option>
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Tell us about your marketing goals" 
          rows={4} 
          className="border-gray-300 focus:border-primary"
        />
      </div>
      <Button type="submit" className="w-full gradient-bg hover:opacity-90" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactFormFields;
