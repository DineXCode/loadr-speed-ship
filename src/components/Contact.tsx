
import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 h-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Book a Delivery</h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
