
import React from 'react';
import { Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="animate-fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Grow Your Business Together</h2>
      <p className="text-gray-600 mb-6">
        Fill out the form to schedule your free consultation. Our experts will analyze your current marketing efforts and create a customized strategy to help you achieve your business goals.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-purple-100 to-brand-100 p-2 rounded-full">
            <Phone className="h-5 w-5 text-primary" />

        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-brand-100 to-teal-100 p-2 rounded-full">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium">Email</p>
            <p className="text-gray-600">info@ruckbell.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
