
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'intra-city'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: 'intra-city'
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-loadr mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have questions or ready to book a delivery? Get in touch with our team and we'll be happy to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animated-element slide-in">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <Phone className="h-5 w-5 text-loadr mr-3 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Mail className="h-5 w-5 text-loadr mr-3 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@loadr.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-loadr mr-3 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">123 Tech Park, Sector 15<br />Mumbai, Maharashtra 400001</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Business Hours</h4>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-gray-600">Monday - Friday:</p>
                <p>9:00 AM - 8:00 PM</p>
                <p className="text-gray-600">Saturday:</p>
                <p>9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sunday:</p>
                <p>10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          <div className="animated-element fade-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Book a Delivery</h3>
              
              <div className="grid gap-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email address"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-loadr focus:border-transparent"
                  >
                    <option value="intra-city">Intra-city Logistics</option>
                    <option value="business">Business Transport</option>
                    <option value="packers">Packers & Movers</option>
                    <option value="express">Express Delivery</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Details (Pickup/Drop-off location, etc.)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your delivery needs"
                    rows={4}
                    className="w-full"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-loadr hover:bg-loadr-dark text-white rounded-full"
              >
                Book Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
