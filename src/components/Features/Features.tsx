import React from "react";

const Features: React.FC = () => {
  const features = [
    {
      title: "Gestion de propriétés",
      description:
        "Maximisez votre investissement avec une gestion immobilière experte",
      imageUrl:
        "https://res.cloudinary.com/dtpw00be5/image/upload/v1733733964/HOME_rqjzfr.png",
    },
    {
      title: "Décoration intérieure",
      description: "Transformez votre espace en un sanctuaire de style",
      imageUrl:
        "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515578/0dc41fd0b139d6febbacfc0b4375f28f_y0ukww.jpg",
    },
    {
      title: "Décoration intérieure",
      description:
        "Admirez chaque recoin de votre maison de l'intérieur à l'extérieur",
      imageUrl:
        "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515699/033809ad0f0ff94e1a357496b86ace04_lnex3e.jpg",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <h1 className="text-center text-[#4A2501] text-2xl font-bold mb-8">
        Les moments conviviaux au confort parfait de votre maison
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 mt-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white border rounded-md shadow-md overflow-hidden transform transition duration-300 hover:bg-[#4A2501]"
          >
            
            <div className="relative overflow-hidden">
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:opacity-75"
              />
            </div>

            <div className="p-4 text-center transition-colors duration-300 group-hover:text-white">
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-200">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
