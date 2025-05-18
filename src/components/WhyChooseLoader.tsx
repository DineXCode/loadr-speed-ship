
import React from 'react';

const WhyChooseLoader = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 h-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Loader</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-blue-500 rounded-full p-2 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Reliable Service</h3>
            <p className="text-gray-600">We ensure your deliveries arrive on time, every time.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-blue-500 rounded-full p-2 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Competitive Pricing</h3>
            <p className="text-gray-600">Get the best rates for local and long-distance deliveries.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-blue-500 rounded-full p-2 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Fast Delivery</h3>
            <p className="text-gray-600">Our efficient logistics ensure quick turnaround times.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseLoader;
