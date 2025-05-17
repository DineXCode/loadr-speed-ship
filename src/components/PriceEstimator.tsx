
import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { calculatePrice } from '@/utils/distance';

interface Location {
  lat: number;
  lng: number;
  address: string;
}

interface PriceEstimatorProps {
  onPriceCalculated: (price: number, distance: number) => void;
}

const PriceEstimator: React.FC<PriceEstimatorProps> = ({ onPriceCalculated }) => {
  const [pickup, setPickup] = useState<string>('');
  const [dropoff, setDropoff] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<string>('mini-truck');
  const [isCalculating, setIsCalculating] = useState(false);

  const getCoordinates = async (address: string): Promise<Location> => {
    // In a real app, you would use a geocoding service like Google Maps API
    // For demo, we're simulating coordinates
    return new Promise((resolve) => {
      setTimeout(() => {
        // Random coordinates near Kerala, India
        const lat = 8.5 + Math.random() * 2;
        const lng = 76.5 + Math.random() * 2;
        resolve({ lat, lng, address });
      }, 500);
    });
  };

  const calculateRoute = async () => {
    if (!pickup || !dropoff) return;
    
    setIsCalculating(true);
    
    try {
      // Get coordinates for pickup and dropoff locations
      const pickupLocation = await getCoordinates(pickup);
      const dropoffLocation = await getCoordinates(dropoff);
      
      // Calculate distance between coordinates (in a real app, you'd use a routing service)
      // For demo, let's assume a straight-line distance and multiply by 1.3 to simulate road distance
      const latDiff = Math.abs(pickupLocation.lat - dropoffLocation.lat);
      const lngDiff = Math.abs(pickupLocation.lng - dropoffLocation.lng);
      
      // Simple distance calculation (not accurate for real-world use)
      const directDistance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff) * 111; // rough km per degree
      const roadDistance = directDistance * 1.3; // factor to simulate road vs direct distance
      
      // Calculate price based on distance and vehicle type
      const price = calculatePrice(roadDistance, vehicleType);
      
      // Call the callback with the calculated price and distance
      onPriceCalculated(price, Math.round(roadDistance * 10) / 10);
    } catch (error) {
      console.error('Error calculating route:', error);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg bg-white">
      <h3 className="text-lg font-semibold mb-4">Estimate Delivery Price</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="vehicle-type" className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle Type
          </label>
          <select
            id="vehicle-type"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-loadr focus:border-transparent"
          >
            <option value="mini-truck">Mini Truck</option>
            <option value="tempo">Tempo</option>
            <option value="pickup">Pickup</option>
            <option value="large-truck">Large Truck</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">
            Pickup Location
          </label>
          <div className="flex">
            <div className="flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50">
              <MapPin size={16} className="text-gray-400" />
            </div>
            <Input
              id="pickup"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup address"
              className="rounded-l-none"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700 mb-1">
            Drop-off Location
          </label>
          <div className="flex">
            <div className="flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50">
              <Navigation size={16} className="text-gray-400" />
            </div>
            <Input
              id="dropoff"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="Enter destination address"
              className="rounded-l-none"
            />
          </div>
        </div>
        
        <Button
          type="button"
          onClick={calculateRoute}
          disabled={!pickup || !dropoff || isCalculating}
          className="w-full bg-loadr hover:bg-loadr-dark"
        >
          {isCalculating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Calculating...
            </>
          ) : (
            'Calculate Price'
          )}
        </Button>
      </div>
    </div>
  );
};

export default PriceEstimator;
