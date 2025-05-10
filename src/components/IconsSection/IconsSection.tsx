
import React from "react";

const features = [
  {
    title: "Gestion Immobilière",
    imageUrl: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733749417/Vector_33_e4yihy.png",
  },
  {
    title: "Décoration Intérieure",
    imageUrl: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733749418/Vector_31_iaovy7.png",
  },
  {
    title: "Recherche Immobilière",
    imageUrl: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733749418/Vector_30_qtjdra.png",
  },
  {
    title: "Client",
    imageUrl: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733751424/Vector_35_hl1pnd.png",
  },
];

const IconsSection: React.FC = () => {
  return (
    <section className="bg-white py-8  ">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Icône sous forme d'image */}
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="w-8 h-8 object-contain mb-4"
            />
            {/* Titre */}
            <h3 className="text-sm font-medium text-[#4A2501]">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconsSection;
