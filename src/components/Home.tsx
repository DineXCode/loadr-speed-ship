
import React from 'react';
import Contact from './Contact';
import WhyChooseLoader from './WhyChooseLoader';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
        <div className="flex flex-col">
          <Contact />
        </div>
        <div className="flex flex-col">
          <WhyChooseLoader />
        </div>
      </div>
    </div>
  );
};

export default Home;
