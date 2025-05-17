
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomerForm from './CustomerForm';
import DriverForm from './DriverForm';

interface ContactFormProps {
  formData: {
    email: string;
    phone: string;
    name: string;
    message: string;
    service: string;
  };
  userType: 'customer' | 'driver';
  setUserType: (value: 'customer' | 'driver') => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  onPriceCalculated: (price: number, distance: number) => void;
  onPhotoUploaded: (url: string) => void;
  vehiclePhoto: string | null;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  userType,
  setUserType,
  handleInputChange,
  handleSubmit,
  onPriceCalculated,
  onPhotoUploaded,
  vehiclePhoto
}) => {
  return (
    <div className="animated-element fade-in" style={{ animationDelay: '0.2s' }}>
      <Tabs defaultValue={userType} onValueChange={(value) => setUserType(value as 'customer' | 'driver')}>
        <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 rounded-full p-1">
          <TabsTrigger 
            value="customer" 
            className="rounded-full data-[state=active]:bg-loadr data-[state=active]:text-white"
          >
            Book a Delivery
          </TabsTrigger>
          <TabsTrigger 
            value="driver" 
            className="rounded-full data-[state=active]:bg-loadr data-[state=active]:text-white"
          >
            Register as Driver
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="customer">
          <CustomerForm 
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            onPriceCalculated={onPriceCalculated}
          />
        </TabsContent>
        
        <TabsContent value="driver">
          <DriverForm 
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            onPhotoUploaded={onPhotoUploaded}
            vehiclePhoto={vehiclePhoto}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContactForm;
