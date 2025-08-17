
import React from 'react';
import { Check, Star } from 'lucide-react';

const reasons = [
  {
    title: 'Reliability',
    description: 'On-time pickups and deliveries with a 98% success rate across all our services.'
  },
  {
    title: 'Affordability',
    description: 'Transparent pricing with no hidden costs. Only pay for what you need with our dynamic pricing model.'
  },
  {
    title: 'Tech-Driven Solutions',
    description: 'Advanced technology for real-time tracking, automated dispatching, and optimized routes.'
  },
  {
    title: 'Customer Support',
    description: '24/7 dedicated customer support to address any concerns or queries during transportation.'
  },
  {
    title: 'Vetted Drivers',
    description: 'All our drivers undergo rigorous background checks and regular training to ensure safety.'
  },
  {
    title: 'Insurance Coverage',
    description: 'Shipment insurance included with every booking for complete peace of mind.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose LOADR</h2>
          <div className="w-20 h-1 bg-loadr mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            LOADR stands apart in the logistics industry with our commitment to reliability, technology, and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="flex items-start"
            >
              <div className="flex-shrink-0 mr-4 mt-1">
                <div className="bg-loadr-50 p-1 rounded-full">
                  <Check className="h-5 w-5 text-loadr" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-loadr text-white p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 fill-white text-white mr-2" />
                <Star className="h-6 w-6 fill-white text-white mr-2" />
                <Star className="h-6 w-6 fill-white text-white mr-2" />
                <Star className="h-6 w-6 fill-white text-white mr-2" />
                <Star className="h-6 w-6 fill-white text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">4.8/5 Customer Rating</h3>
              <p className="text-white/90">
                Join thousands of satisfied customers who trust LOADR for their logistics needs.
              </p>
            </div>
            <div>
              <a 
                href="#contact" 
                className="inline-block bg-white text-loadr font-medium py-3 px-6 rounded-full hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
