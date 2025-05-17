
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

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
          <ContactInfo 
            estimatedPrice={userType === 'customer' ? estimatedPrice : null} 
            estimatedDistance={userType === 'customer' ? estimatedDistance : null} 
          />
          
          <ContactForm 
            formData={formData}
            userType={userType}
            setUserType={setUserType}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            onPriceCalculated={handlePriceCalculated}
            onPhotoUploaded={setVehiclePhoto}
            vehiclePhoto={vehiclePhoto}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
