import React, { useState, useEffect } from "react";

const DetailsPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://res.cloudinary.com/dxyolecju/image/upload/v1734528757/woman_designer_m8lldl.jpg",
    "https://res.cloudinary.com/dxyolecju/image/upload/v1734529194/ed89999de524705f48a77d8c20814fe9_d6vfnz.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Détails sur la Décoration Intérieure</h1>
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-6 relative">
        <div className="relative group">
          <img
            src={images[currentImageIndex]}
            alt="Exemple de décoration intérieure"
            className="w-full h-auto object-cover rounded-md mb-6 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
            <p className="text-white text-lg font-semibold">Transformez votre espace avec style</p>
          </div>
        </div>
        <p className="text-gray-600 text-lg mb-4">
          La décoration intérieure est un art qui transforme les espaces en des lieux confortables, esthétiques et fonctionnels. 
          Cela implique l'harmonisation des couleurs, des textures, des matériaux et des styles pour créer une atmosphère unique.
        </p>
        <p className="text-gray-600 text-lg mb-4">
          Nos services incluent :
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Consultation en design personnalisé</li>
          <li>Aménagement et optimisation des espaces</li>
          <li>Sélection de meubles et accessoires tendance</li>
          <li>Création d'ambiances adaptées à vos besoins</li>
        </ul>
        <p className="text-gray-600 text-lg">
          Faites-nous confiance pour transformer vos idées en réalité et créer un intérieur qui vous ressemble.
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
