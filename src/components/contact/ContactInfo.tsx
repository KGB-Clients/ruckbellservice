
import React from 'react';
import { Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="animate-fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Let's Grow Your Business Together</h2>
      <p className="text-gray-700 mb-6">
        Fill out the form to schedule your free consultation. Our experts will analyze your current marketing efforts and create a customized strategy to help you achieve your business goals.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-2 rounded-full">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium text-gray-800">Email</p>
            <p className="text-primary">info@ruckbell.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
