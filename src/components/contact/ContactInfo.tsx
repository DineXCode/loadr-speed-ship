
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactInfoProps {
  estimatedPrice: number | null;
  estimatedDistance: number | null;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ estimatedPrice, estimatedDistance }) => {
  return (
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
      
      {estimatedPrice !== null && estimatedDistance !== null && (
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
  );
};

export default ContactInfo;
