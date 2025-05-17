
import React from 'react';
import { Truck, Users, Home, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: <Truck className="h-10 w-10 text-loadr" />,
    title: 'Intra-city Logistics',
    description: 'Instant delivery. Real-time tracking.'
  },
  {
    icon: <Briefcase className="h-10 w-10 text-loadr" />,
    title: 'Business Transport',
    description: 'Business logistics. Bulk booking. Dedicated support.'
  },
  {
    icon: <Home className="h-10 w-10 text-loadr" />,
    title: 'Packers & Movers',
    description: 'Seamless home & office shifting, end to end.'
  },
  {
    icon: <Users className="h-10 w-10 text-loadr" />,
    title: 'Express Delivery',
    description: 'Fast-track shipping for urgent deliveries.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-loadr mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            From small packages to full-scale moving services, LOADR provides a wide range of logistics solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white p-6 rounded-xl border border-gray-100 card-shadow transition duration-300 animated-element",
                index % 2 === 0 ? "slide-in" : "fade-in"
              )}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-loadr-50 rounded-lg mr-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Need a Custom Solution?</h3>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            We understand that every business has unique logistics requirements. 
            Contact our team to discuss how we can tailor our services to meet your specific needs.
          </p>
          <a 
            href="#contact" 
            className="btn-loadr-outline inline-block"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
