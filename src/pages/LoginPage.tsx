import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm px-6 py-8 bg-white rounded-lg shadow-md">
        {/* Titre */}
        <h2 className="text-center text-lg font-semibold text-gray-800 mb-6">
          Entrer votre mail et votre mot de passe
        </h2>

        {/* Boutons de connexion */}
        <div className="flex flex-col space-y-4">
          <button className="flex items-center justify-center w-full py-2 border border-[#8B4513] rounded-full text-[#8B4513] font-medium hover:bg-gray-100 transition duration-300">
            <img
              src="https://res.cloudinary.com/dtpw00be5/image/upload/v1734171663/ic_round-apple_jcyru9.png"
              alt="apple icon"
              className="w-5 h-5 mr-2"
            />
            Se connecter avec Apple
          </button>

          <button className="flex items-center justify-center w-full py-2 border border-[#8B4513] rounded-full text-[#8B4513] font-medium hover:bg-gray-100 transition duration-300">
            <img
              src="https://res.cloudinary.com/dtpw00be5/image/upload/v1734171663/devicon_google_eakij3.png"
              alt="google icon"
              className="w-5 h-5 mr-2"
            />
            Se connecter avec Google
          </button>
        </div>

        {/* Champs de formulaire */}
        <div className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Adresse-mail"
            className="w-full px-4 py-2 border border-[#8B4513] rounded-full focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full px-4 py-2 border border-[#8B4513] rounded-full focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          />
        </div>

        {/* Lien et Bouton suivant */}
        <div className="flex items-center justify-between mt-4">
          <a href="#" className="text-sm text-[#8B4513]">
            Mot de passe oublié?
          </a>
          <button className="px-4 py-2 bg-[#8B4513] text-white text-sm font-medium rounded-full hover:bg-[#6E3610] transition duration-300">
            suivant
          </button>
        </div>

        {/* Bouton Se connecter */}
        <button className="w-full mt-6 py-2 bg-[#8B4513] text-white rounded-full font-medium hover:bg-[#6E3610] transition duration-300">
          Se connecter
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
