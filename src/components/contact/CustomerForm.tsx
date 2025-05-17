
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import PriceEstimator from '@/components/PriceEstimator';

interface CustomerFormProps {
  formData: {
    email: string;
    phone: string;
    name: string;
    message: string;
    service: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  onPriceCalculated: (price: number, distance: number) => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ 
  formData, 
  handleInputChange, 
  handleSubmit,
  onPriceCalculated 
}) => {
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Book a Delivery</h3>
      
      <div className="grid gap-4 mb-6">
        <div>
          <PriceEstimator onPriceCalculated={onPriceCalculated} />
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
  );
};

export default CustomerForm;
