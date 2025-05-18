
import React from 'react';
import Contact from './Contact';
import WhyChooseLoader from './WhyChooseLoader';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <div className="flex flex-col h-full">
          <Contact />
        </div>
        <div className="flex flex-col h-full">
          <WhyChooseLoader />
        </div>
      </div>
    </div>
  );
};

export default Home;
