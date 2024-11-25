import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "I've been going to this salon for years and I'm always impressed with the quality of service. The staff is professional, friendly, and truly skilled at what they do.",
    author: "Michelle Hopkins",
    role: "Regular client"
  },
  {
    quote: "The attention to detail and the personalized care I receive here is unmatched. It's more than just a beauty salon, it's a self-care experience.",
    author: "Sarah Johnson",
    role: "Loyal customer"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;