
import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Book a Delivery</h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
