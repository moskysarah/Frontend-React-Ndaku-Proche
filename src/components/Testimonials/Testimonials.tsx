import React from 'react';
import QuoteDown from '../Icons/QuoteDown';
import QuoteUp from '../Icons/QuoteUp';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image : string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Le grand sanctuaire de la beauté .",
    author: "Bodouin Muyaya",
    role: "client",
    image : "https://res.cloudinary.com/dtpw00be5/image/upload/v1733029823/104410477_756715608405638_3108927899059211482_n_cg3goy.jpg",
  },
  {
    quote: "pretty glam c'est là ou la beauté reside au quotidien.",
    author: "Sarah Lema",
    role: "Client",
    image : "",
  }
  
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-[#DFBFA8]  py-16">
            <h2 className="text-3xl font-serif text-center mb-12  text-[#6B0606]">Temoignage de nos clients</h2>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg  text-center relative">
        <QuoteUp/>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg ">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
          <QuoteDown/>
      </div>
    </div>
  );
}

export default Testimonials;