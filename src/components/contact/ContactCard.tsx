
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactFormFields from './ContactFormFields';

interface ContactCardProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    service: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
}

const ContactCard = ({ formData, handleChange, handleSubmit, isSubmitting }: ContactCardProps) => {
  return (
    <Card className="animate-fade-up relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-50 via-transparent to-teal-50 opacity-50"></div>
      <CardHeader className="relative">
        <CardTitle>Get In Touch</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <ContactFormFields 
          formData={formData} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          isSubmitting={isSubmitting} 
        />
      </CardContent>
    </Card>
  );
};

export default ContactCard;
