
import React from 'react';
import { ArrowRight, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimationWrapper } from '@/utils/animate';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="public/lovable-uploads/d535c31d-55fe-464d-8b7f-08c7c34b365b.png" 
          alt="LOADR logistics vehicles and app" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <AnimationWrapper delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              On-Demand Logistics at Your Fingertips
            </h1>
          </AnimationWrapper>
          
          <AnimationWrapper delay={0.3}>
            <p className="text-xl text-gray-100 mb-8">
              Trucks, Tempos, and Transport Services Made Easy with LOADR
            </p>
          </AnimationWrapper>
          
          <AnimationWrapper delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact} 
                className="bg-white text-loadr hover:bg-gray-100 text-lg font-medium px-8 py-6 rounded-full"
              >
                Book a Load
                <Truck className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white bg-transparent text-white hover:bg-white/10 text-lg font-medium px-8 py-6 rounded-full"
              >
                Learn How It Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
