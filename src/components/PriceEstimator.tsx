
import React, { useState, useCallback, useRef } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { calculatePrice } from '@/utils/distance';
import { useToast } from '@/components/ui/use-toast';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

interface Location {
  lat: number;
  lng: number;
  address: string;
}

interface PriceEstimatorProps {
  onPriceCalculated: (price: number, distance: number) => void;
}

// Libraries we want to load from Google Maps
const libraries = ['places'];

const PriceEstimator: React.FC<PriceEstimatorProps> = ({ onPriceCalculated }) => {
  const { toast } = useToast();
  const [pickup, setPickup] = useState<string>('');
  const [dropoff, setDropoff] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<string>('mini-truck');
  const [isCalculating, setIsCalculating] = useState(false);
  const [pickupLocation, setPickupLocation] = useState<Location | null>(null);
  const [dropoffLocation, setDropoffLocation] = useState<Location | null>(null);

  // Reference for autocomplete instances
  const pickupAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const dropoffAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  // Load the Google Maps script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your Google Maps API key
    libraries: libraries as any,
  });

  const onPickupLoad = useCallback((autocomplete: google.maps.places.Autocomplete) => {
    pickupAutocompleteRef.current = autocomplete;
  }, []);

  const onDropoffLoad = useCallback((autocomplete: google.maps.places.Autocomplete) => {
    dropoffAutocompleteRef.current = autocomplete;
  }, []);

  const onPickupPlaceChanged = useCallback(() => {
    if (pickupAutocompleteRef.current) {
      const place = pickupAutocompleteRef.current.getPlace();
      if (place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const address = place.formatted_address || '';
        
        setPickup(address);
        setPickupLocation({ lat, lng, address });
      }
    }
  }, []);

  const onDropoffPlaceChanged = useCallback(() => {
    if (dropoffAutocompleteRef.current) {
      const place = dropoffAutocompleteRef.current.getPlace();
      if (place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const address = place.formatted_address || '';
        
        setDropoff(address);
        setDropoffLocation({ lat, lng, address });
      }
    }
  }, []);

  const calculateRoute = async () => {
    if (!pickup || !dropoff) {
      toast({
        title: "Missing Locations",
        description: "Please enter both pickup and dropoff locations",
        variant: "destructive"
      });
      return;
    }
    
    setIsCalculating(true);
    
    try {
      // If we have locations from Google Maps
      if (pickupLocation && dropoffLocation) {
        // Use the Google Maps Distance Matrix API for more accurate distance calculation
        const service = new google.maps.DistanceMatrixService();
        
        service.getDistanceMatrix(
          {
            origins: [new google.maps.LatLng(pickupLocation.lat, pickupLocation.lng)],
            destinations: [new google.maps.LatLng(dropoffLocation.lat, dropoffLocation.lng)],
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (response, status) => {
            if (status === 'OK' && response) {
              const distanceText = response.rows[0].elements[0].distance.text;
              const distanceValue = response.rows[0].elements[0].distance.value / 1000; // Convert to km
              
              // Calculate price based on distance and vehicle type
              const price = calculatePrice(distanceValue, vehicleType);
              
              // Call the callback with the calculated price and distance
              onPriceCalculated(price, Math.round(distanceValue * 10) / 10);
            } else {
              // Fallback to direct distance calculation
              calculateDirectDistance();
            }
            setIsCalculating(false);
          }
        );
      } else {
        // Fallback to direct distance calculation
        calculateDirectDistance();
      }
    } catch (error) {
      console.error('Error calculating route:', error);
      calculateDirectDistance();
    }
  };

  // Fallback distance calculation method
  const calculateDirectDistance = async () => {
    try {
      // Get coordinates for pickup and dropoff locations if not already set
      const pickupCoords = pickupLocation || await getCoordinates(pickup);
      const dropoffCoords = dropoffLocation || await getCoordinates(dropoff);
      
      // Calculate distance between coordinates
      const latDiff = Math.abs(pickupCoords.lat - dropoffCoords.lat);
      const lngDiff = Math.abs(pickupCoords.lng - dropoffCoords.lng);
      
      // Simple distance calculation (not accurate for real-world use)
      const directDistance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff) * 111; // rough km per degree
      const roadDistance = directDistance * 1.3; // factor to simulate road vs direct distance
      
      // Calculate price based on distance and vehicle type
      const price = calculatePrice(roadDistance, vehicleType);
      
      // Call the callback with the calculated price and distance
      onPriceCalculated(price, Math.round(roadDistance * 10) / 10);
    } catch (error) {
      console.error('Error in fallback distance calculation:', error);
      toast({
        title: "Error",
        description: "Could not calculate the distance. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsCalculating(false);
    }
  };

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

  if (loadError) {
    return (
      <div className="p-4 border border-red-200 rounded-lg bg-red-50 text-red-700">
        Error loading Google Maps API: {loadError.message}
      </div>
    );
  }

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
            {isLoaded ? (
              <Autocomplete
                onLoad={onPickupLoad}
                onPlaceChanged={onPickupPlaceChanged}
              >
                <Input
                  id="pickup"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Search for pickup location"
                  className="rounded-l-none"
                />
              </Autocomplete>
            ) : (
              <Input
                id="pickup"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Enter pickup address"
                className="rounded-l-none"
              />
            )}
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
            {isLoaded ? (
              <Autocomplete
                onLoad={onDropoffLoad}
                onPlaceChanged={onDropoffPlaceChanged}
              >
                <Input
                  id="dropoff"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  placeholder="Search for destination location"
                  className="rounded-l-none"
                />
              </Autocomplete>
            ) : (
              <Input
                id="dropoff"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                placeholder="Enter destination address"
                className="rounded-l-none"
              />
            )}
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
