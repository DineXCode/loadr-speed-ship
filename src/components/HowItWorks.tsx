
import React from 'react';
import { Calendar, Truck, Package } from 'lucide-react';

const steps = [
  {
    icon: <Calendar className="h-12 w-12 text-white" />,
    title: 'Book',
    description: 'Choose your vehicle type, enter pickup and drop-off locations, and schedule your delivery time.'
  },
  {
    icon: <Truck className="h-12 w-12 text-white" />,
    title: 'Track',
    description: 'Monitor your delivery in real-time through our app and get immediate updates on your shipment.'
  },
  {
    icon: <Package className="h-12 w-12 text-white" />,
    title: 'Deliver',
    description: 'Receive your goods at the destination with digital proof of delivery and instant payment options.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <div className="w-20 h-1 bg-loadr mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            LOADR makes logistics simple with just three easy steps. Our streamlined process ensures a hassle-free experience every time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative"
            >
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-24 h-24 bg-loadr rounded-full mb-6 relative z-10">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-loadr font-bold">
                    {index + 1}
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[62%] w-full h-2 bg-loadr-light opacity-30 z-0"></div>
                )}
                
                <h3 className="text-xl md:text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-center text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="btn-loadr inline-block"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Book Your First Delivery
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
