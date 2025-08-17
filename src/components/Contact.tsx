
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
    <section id="contact" className="relative py-20 px-4 sm:px-8 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-20 bg-loadr opacity-5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="relative">
              Book Your Delivery
              <span className="absolute bottom-2 left-0 w-full h-3 bg-loadr/10 -z-10"></span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-loadr mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Need something moved? Get instant pricing and book your delivery in minutes. Our reliable drivers are ready to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100">
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
          
          <div className="order-first md:order-last">
            <div className="sticky top-24">
              <ContactInfo 
                estimatedPrice={userType === 'customer' ? estimatedPrice : null} 
                estimatedDistance={userType === 'customer' ? estimatedDistance : null} 
              />
              
              <div className="mt-12 bg-loadr text-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Why Choose Loadr</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-white text-loadr rounded-full p-1 mr-3 flex-shrink-0">✓</span>
                    <span>Fast & reliable delivery across the city</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-loadr rounded-full p-1 mr-3 flex-shrink-0">✓</span>
                    <span>Real-time tracking of your shipments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-loadr rounded-full p-1 mr-3 flex-shrink-0">✓</span>
                    <span>Vetted and trained professional drivers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-loadr rounded-full p-1 mr-3 flex-shrink-0">✓</span>
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
