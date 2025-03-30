
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'Not specified'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real implementation, you would send the form data to your backend
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'Not specified'
      });
    }, 1500);
  };

  return (
    <section className="py-16" id="contact">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Grow Your Business Together</h2>
            <p className="text-gray-600 mb-6">
              Fill out the form to schedule your free consultation. Our experts will analyze your current marketing efforts and create a customized strategy to help you achieve your business goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-brand-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-600">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+91 866-7680320</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-brand-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-600">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@ruckbell.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="animate-fade-up">
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="+1 (555) 000-0000" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Your Company" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service} 
                    onChange={handleChange}
                    className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md"
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
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
