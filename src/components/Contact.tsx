
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VehiclePhotoUpload from './VehiclePhotoUpload';
import PriceEstimator from './PriceEstimator';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    message: '',
    service: 'intra-city'
  });
  const [vehiclePhoto, setVehiclePhoto] = useState<string | null>(null);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [estimatedDistance, setEstimatedDistance] = useState<number | null>(null);
  const [userType, setUserType] = useState<'customer' | 'driver'>('customer');

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
    console.log('User type:', userType);
    
    if (userType === 'driver' && vehiclePhoto) {
      console.log('Vehicle photo for AR:', vehiclePhoto);
    }
    
    if (estimatedPrice !== null) {
      console.log('Estimated price:', estimatedPrice);
      console.log('Estimated distance:', estimatedDistance);
    }
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      email: '',
      phone: '',
      name: '',
      message: '',
      service: 'intra-city'
    });
    
    if (userType === 'customer') {
      setEstimatedPrice(null);
      setEstimatedDistance(null);
    }
  };

  const handlePriceCalculated = (price: number, distance: number) => {
    setEstimatedPrice(price);
    setEstimatedDistance(distance);
    
    toast({
      title: "Price Calculated",
      description: `Estimated price: ₹${price} for ${distance} km`,
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
                  <p className="text-gray-600">+91 95675 63944</p>
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
                  <p className="text-gray-600">123 Technopark,Kazhakootam<br />Thiruvananthapuram, Kerala 695018</p>
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
            
            {userType === 'customer' && estimatedPrice !== null && (
              <div className="mt-6 bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="font-semibold mb-3 text-green-800">Price Estimate</h4>
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-gray-600">Distance:</p>
                  <p>{estimatedDistance} km</p>
                  <p className="text-gray-600">Estimated Price:</p>
                  <p className="text-xl font-bold text-green-600">₹{estimatedPrice}</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  *This is an estimate. Final price may vary based on actual route and traffic conditions.
                </p>
              </div>
            )}
          </div>

          <div className="animated-element fade-in" style={{ animationDelay: '0.2s' }}>
            <Tabs defaultValue="customer" onValueChange={(value) => setUserType(value as 'customer' | 'driver')}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="customer">Book a Delivery</TabsTrigger>
                <TabsTrigger value="driver">Register as Driver</TabsTrigger>
              </TabsList>
              
              <TabsContent value="customer">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="text-2xl font-semibold mb-6">Book a Delivery</h3>
                  
                  <div className="grid gap-4 mb-6">
                    <div>
                      <PriceEstimator onPriceCalculated={handlePriceCalculated} />
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
                        Pickup/Drop-off location
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide pickup and drop-off location details"
                        rows={4}
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
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-loadr hover:bg-loadr-dark text-white rounded-full"
                  >
                    Book Now
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="driver">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="text-2xl font-semibold mb-6">Register as a Driver</h3>
                  
                  <div className="grid gap-4 mb-6">
                    <div>
                      <VehiclePhotoUpload onPhotoUploaded={(url) => setVehiclePhoto(url)} />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Vehicle Type
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-loadr focus:border-transparent"
                      >
                        <option value="mini-truck">Mini Truck</option>
                        <option value="tempo">Tempo</option>
                        <option value="pickup">Pickup</option>
                        <option value="large-truck">Large Truck</option>
                      </select>
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
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Vehicle Details
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Vehicle registration number, model, capacity, etc."
                        rows={4}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-loadr hover:bg-loadr-dark text-white rounded-full"
                  >
                    Register Now
                  </Button>
                  
                  {vehiclePhoto && (
                    <div className="mt-4 text-sm text-green-600 flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                      Vehicle photo added for AR recognition
                    </div>
                  )}
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
