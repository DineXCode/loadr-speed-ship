
// Function to calculate distance between two coordinates using the Haversine formula
export function calculateDistance(
  lat1: number, 
  lon1: number, 
  lat2: number, 
  lon2: number
): number {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const distance = R * c; // Distance in km
  
  return distance;
}

function deg2rad(deg: number): number {
  return deg * (Math.PI/180);
}

// Price calculation based on distance and vehicle type
export function calculatePrice(distanceKm: number, vehicleType: string): number {
  const basePrices = {
    'mini-truck': 15,
    'tempo': 10,
    'pickup': 12,
    'large-truck': 20
  };
  
  const basePrice = basePrices[vehicleType as keyof typeof basePrices] || 10;
  const price = basePrice * distanceKm;
  
  return Math.round(price * 100) / 100; // Round to 2 decimal places
}
