import React from 'react';

interface Treatment {
  name: string;
  price: string;
}

const treatments: Treatment[] = [
  { name: "Nail care", price: "$45" },
  { name: "Hair styling", price: "$65" },
  { name: "Make up", price: "$50" },
  { name: "Cosmetology", price: "$85" },
];

const Treatments: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Treatments and Prices</h2>
        <div className="max-w-md mx-auto">
          {treatments.map((treatment, index) => (
            <div key={index} className="flex justify-between items-center border-b py-4">
              <span className="text-lg">{treatment.name}</span>
              <span className="text-lg font-semibold text-primary">{treatment.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Treatments;