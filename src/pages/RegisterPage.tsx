import React from "react";

const RegisterPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm px-6 py-8 bg-white rounded-lg shadow-md">
        {/* Titre */}
        <h2 className="text-center text-lg font-semibold text-gray-800 mb-6">
          Bienvenue à notre site <span className="font-bold">Ndaku proche</span> !
        </h2>

        {/* Formulaire */}
        <form className="space-y-6">
          {/* Input pour Nom */}
          <input
            type="text"
            placeholder="Nom"
            className="w-full px-4 py-2 border border-[#8B4513] rounded-full text-center focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          />

          {/* Input pour Prénom */}
          <input
            type="text"
            placeholder="Prénom"
            className="w-full px-4 py-2 border border-[#8B4513] rounded-full text-center focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          />

          {/* Input pour Adresse-mail */}
          <input
            type="email"
            placeholder="Adresse-mail"
            className="w-full px-4 py-2 border border-[#8B4513] rounded-full text-center focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          />

          {/* Input pour Téléphone */}
          <input
            type="tel"
            placeholder="Téléphone"
            className="w-full px-4 py-2 border border-[#8B4513] rounded-full text-center focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          />

          {/* Input pour Mot de passe */}
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full px-4 py-2 border border-[#8B4513] rounded-full text-center focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          />

          {/* Bouton S'inscrire */}
          <button
            type="submit"
            className="w-full py-2 bg-[#8B4513] text-white rounded-full font-medium hover:bg-[#6E3610] transition duration-300"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
