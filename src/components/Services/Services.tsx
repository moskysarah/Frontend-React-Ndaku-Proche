import React from 'react';
import { Brush, Scissors, Fingerprint, Star } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  { icon: Brush, title: "Make up", description: "Professional makeup services" },
  { icon: Scissors, title: "Hair styling", description: "Expert hair styling services" },
  { icon: Fingerprint, title: "Nail care", description: "Complete nail care services" },
  { icon: Star, title: "Cosmetology", description: "Advanced skin treatments" },
];

const Services: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;