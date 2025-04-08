import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dine Babu',
    position: 'Student at SCT college of engineering',
    testimonial: 'As a student, shifting between hostels and home used to be stressful. LOADR made the entire process super easy and reliable. The real-time tracking and professional service gave me peace of mind during my move!',
    rating: 5,
    image: "/Dine.jpg",
  },
  {
    name: 'Siva M S',
    position: 'E-commerce Entrepreneur',
    testimonial: 'As an online store owner, reliable delivery is crucial. LOADR provides consistent and timely services that my customers love. Their drivers are professional and courteous.',
    rating: 5
  },
  {
    name: 'Vijay Kebb',
    position: 'Warehouse Manager',
    testimonial: 'The bulk booking feature and business dashboard have streamlined our daily operations. LOADR\'s customer service is exceptional whenever we need assistance.',
    rating: 4
  },
  {
    name: 'Pranav Prabhakar',
    position: 'Homeowner',
    testimonial: 'I used LOADR for my house move and was impressed with their efficiency. The movers were careful with my belongings, and the entire process was smooth.',
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'fill-loadr text-loadr' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-loadr mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it. See what our clients have to say about their experience with LOADR.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-loadr/10 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-loadr/10 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <p className="text-gray-700 text-lg italic mb-6">
                "{testimonials[currentIndex].testimonial}"
              </p>
              
              <div className="flex items-center gap-4 mb-4">
                {testimonials[currentIndex].image && (
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].position}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={prevTestimonial} 
                  className="p-2 border border-gray-200 rounded-full hover:bg-loadr hover:text-white hover:border-loadr transition"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={nextTestimonial} 
                  className="p-2 border border-gray-200 rounded-full hover:bg-loadr hover:text-white hover:border-loadr transition"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? 'bg-loadr' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
