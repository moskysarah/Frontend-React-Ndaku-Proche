import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1115);

  // Gérer le redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1115);
      if (window.innerWidth > 1115) {
        setIsMenuOpen(false); // Fermer le menu burger en mode desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-[#4A2501] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl flex items-center space-x-2 flex-shrink-0">
            <img
              src="https://res.cloudinary.com/dtpw00be5/image/upload/v1733645851/White_and_Blue_Flat_Illustrative_Real_Estate_Agency_Logo-removebg-preview_cerl2n.png" // Remplacez par le chemin réel de votre logo
              alt="Logo Ndaku Proche"
              className="h-14 w-14" 
            />
          <Link to="/" className="text-sm ">
             NDAKU PROCHE
          </Link>
        </h1>

        {/* Menu Burger Icon (Visible uniquement en mode mobile) */}
        {!isDesktop && (
          <button
            className="flex items-center text-white focus:outline-none z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        )}

        {/* Navigation Menu */}
        <nav
          className={`${
            isDesktop
              ? "flex items-center space-x-6"
              : `fixed top-0 left-0 w-full h-full bg-[#4A2501] flex flex-col items-center justify-center space-y-6 transition-all duration-300 ${
                  isMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`
          }`}
        >
          {/* Liste des liens */}
          {[
            { label: "Accueil", path: "/" },
            { label: "À propos", path: "/a-propos" },
            { label: "Services", path: "/services" },
            { label: "Propriétés", path: "/proprietes" },
            { label: "Contact", path: "/contact" },
          ].map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`${
                isDesktop
                  ? "hover:text-[#DFBB9B] transition-all duration-300"
                  : "text-white text-xl hover:text-[#FFD700] text-center "
              }`}
              onClick={() => setIsMenuOpen(false)} 
            >
              {link.label}
            </Link>
          ))}

          {/* Boutons "Se connecter" et "S'inscrire" */}
          <div
            className={`${
              isDesktop
                ? "flex space-x-4"
                : "flex flex-col items-center space-y-4"
            }`}
          >
            <Link
              to="/connexion"
              className="px-4 py-2 border border-[#FFF8F4] rounded-md hover:bg-[#FFF8F4] hover:text-[#4A2501] transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Se connecter
            </Link>
            <Link
              to="/inscription"
              className="px-4 py-2 border border-[#FFD700] rounded-md  text-[#FFF8F4] hover:bg-[#FFD700] hover:text-[#4A2501] transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              S'inscrire
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
