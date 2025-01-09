import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const PropertyDetailsPage: React.FC = () => {
  const { propertyName } = useParams<{ propertyName: string }>();
  const navigate = useNavigate(); // Hook pour la navigation

  const properties = [
    {
      name: "Barumbu",
      description: "Maison à deux chambres salon, salle de bain et magasin",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515725/b769a689ea2d81225ca60ca3c564fee3_k5mont.jpg",
      price: 400,
    },
    {
      name: "Gombe",
      description: "Maison à trois chambres salon, cuisine et salle de bain",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515728/cb64c5144d889593e8a38746dde0e621_hiifth.jpg",
      price: 750,
    },
    {
      name: "Ngaliema",
      description: "Maison à trois chambres, salle à manger et salle de bain",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515578/1c27c3f33a680a04dcce85099910bab7_adew7r.jpg",
      price: 450,
    },
    // Ajoutez les autres propriétés ici...
  ];

  // Recherche de la propriété par son nom
  const property = properties.find((p) => p.name.toLowerCase() === propertyName?.toLowerCase());

  // Si la propriété n'est pas trouvée, afficher un message
  if (!property) {
    return <div className="text-center">Propriété non trouvée</div>;
  }

  // Fonction de réservation
  const handleReservation = () => {
    navigate("/reservation", { state: { property } }); // Redirection vers la page de réservation
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      <div
        className="relative bg-cover bg-center w-full h-[415px]"
        style={{ backgroundImage: `url(${property.image || ''})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">{property.name}</h1>
        </div>
      </div>
      <div className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{property.name}</h2>
        <p className="text-gray-700">{property.description}</p>
        <p className="text-lg font-semibold text-gray-800 mt-4">
          Prix: <span className="text-green-600">${property.price?.toLocaleString() || "Non disponible"}</span>
        </p>
        <button
          onClick={handleReservation}
          className="mt-6 px-4 py-2 bg-[#4A2501] text-white rounded hover:bg-[#3e1e01]"
        >
          Confirmer la réservation
        </button>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
