
import React from 'react';
import { Truck, Clock, Shield, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Truck className="h-10 w-10 text-loadr" />,
    title: 'Wide Vehicle Range',
    description: 'Choose from various mini-trucks and vehicles to match your transport needs perfectly.'
  },
  {
    icon: <Clock className="h-10 w-10 text-loadr" />,
    title: 'Real-Time Tracking',
    description: 'Track your shipment in real-time through our intuitive mobile app.'
  },
  {
    icon: <Shield className="h-10 w-10 text-loadr" />,
    title: 'Verified Drivers',
    description: 'All our drivers are verified and trained to ensure safe transportation.'
  },
  {
    icon: <FileText className="h-10 w-10 text-loadr" />,
    title: 'Instant Invoicing',
    description: 'Receive digital invoices instantly for easy record-keeping and tax purposes.'
  }
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About LOADR</h2>
          <div className="w-20 h-1 bg-loadr mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            LOADR simplifies logistics for businesses and individuals with on-demand mini-truck services. Our tech-driven platform connects you with reliable transport solutions when you need them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 card-shadow hover:border-loadr-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                At LOADR, we're on a mission to revolutionize the logistics industry by making goods transportation accessible, efficient, and reliable for everyone.
              </p>
              <p className="text-gray-600">
                We leverage technology to eliminate the traditional hassles of logistics, providing transparent pricing, easy booking, and reliable service every time.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-loadr/10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=600&h=400" 
                alt="LOADR mission"
                className="rounded-lg shadow-md relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
