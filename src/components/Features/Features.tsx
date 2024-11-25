import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: "👩‍🎨", title: "Professional Care", description: "Our expert stylists provide top-notch care" },
  { icon: "🏆", title: "Premium Brands", description: "We use only the best beauty products" },
  { icon: "🌿", title: "Natural Cosmetics", description: "Eco-friendly and skin-loving options available" },
];

const Features: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;