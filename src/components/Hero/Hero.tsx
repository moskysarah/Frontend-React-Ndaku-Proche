import React from "react";
import { useNavigate } from "react-router-dom"; // Assurez-vous d'utiliser React Router

const Hero: React.FC = () => {
  const navigate = useNavigate();

  // Simulation d'une vérification utilisateur (remplacez avec votre logique réelle)
  const isUserLoggedIn = () => {
    // Exemple : vérifiez via un token ou un état global (authentification)
    const userToken = localStorage.getItem("userToken"); // Supposons que vous stockez un token
    return Boolean(userToken);
  };

  // Gestion du clic sur le bouton
  const handleVoirPlusClick = () => {
    if (isUserLoggedIn()) {
      navigate("/dashboard"); // Redirige vers la page des utilisateurs inscrits
    } else {
      navigate("/signup"); // Redirige vers la page d'inscription
    }
  };

  return (
    <section className="relative bg-[#4A2501]">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dtpw00be5/image/upload/v1733515652/27e1a91da6ab9ed2e09837cb08d77697_cdbt7q.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Contenu du Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-20 px-6 sm:py-32 sm:px-12">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Votre partenaire de confiance pour trouver 
        </h1>
        <p className="text-3xl sm:text-5xl font-bold mb-6">
          La maison idéale au confort du design
        </p>
        <button
          onClick={handleVoirPlusClick}
          className="bg-white text-[#4A2501] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#4A2501] hover:text-[#FFFFFF] transition duration-300"
        >
          Voir plus
        </button>
      </div>
    </section>
  );
};

export default Hero;
