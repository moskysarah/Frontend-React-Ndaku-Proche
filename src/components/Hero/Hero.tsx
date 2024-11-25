import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Beauty Salon</h1>
        <p className="text-xl md:text-2xl mb-8">Elegance comes from being as beautiful inside as outside</p>
        <button className="bg-white text-primary font-semibold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Hero;