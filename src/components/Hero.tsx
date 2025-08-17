import React from 'react';
import { ArrowRight, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          src="https://res.cloudinary.com/djc7mipe7/image/upload/v1744146947/WALLPAPER_LOADR_10000_xqfdh3.jpg" 
          alt="LOADR logistics vehicles and app" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            On-Demand LOADR at Your Fingertips
          </h1>
          
          <p className="text-xl text-gray-100 mb-8">
            Trucks, Excavators, and Transport Services Made Easy with LOADR
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact} 
              className="bg-white text-loadr hover:bg-gray-100 text-lg font-medium px-8 py-6 rounded-full"
            >
              Book a LOADR
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
