
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animated-element fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Move Your Goods <span className="text-loadr">Hassle-Free</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            LOADR provides on-demand mini-truck and goods transport services with real-time tracking, verified drivers, and instant invoicing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact} 
              className="btn-loadr"
            >
              Book a Truck Instantly
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const element = document.getElementById('how-it-works');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-loadr-outline"
            >
              Learn How It Works
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center animated-element fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-loadr/10 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-loadr/10 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=450" 
              alt="LOADR delivery truck"
              className="rounded-2xl shadow-xl relative z-10 max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
