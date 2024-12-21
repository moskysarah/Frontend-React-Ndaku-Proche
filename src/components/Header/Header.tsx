import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1115);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  // Gérer le redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1115);
      if (window.innerWidth > 1115) {
        setIsMenuOpen(false); // Fermer le menu burger en mode desktop
        setIsSearchOpen(false); // Fermer l'icône de recherche en mode desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/recherche?query=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      alert("Veuillez entrer un terme de recherche.");
    }
  };

  return (
    <header className="bg-[#4A2501] text-white py-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl flex items-center space-x-2 flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dtpw00be5/image/upload/v1733645851/White_and_Blue_Flat_Illustrative_Real_Estate_Agency_Logo-removebg-preview_cerl2n.png"
            alt="Logo Ndaku Proche"
            className="h-14 w-14"
          />
          <Link to="/" className="text-sm">
            NDAKU PROCHE
          </Link>
        </h1>

        {/* Menu Burger Icon (Visible uniquement en mode mobile) */}
        {!isDesktop && (
          <button
            className="flex items-center text-white focus:outline-none z-50 relative"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsSearchOpen(false); // Fermer l'icône de recherche en mode menu burger
            }}
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
              ? "flex items-center space-x-8"
              : `fixed top-0 left-0 w-full h-full bg-[#4A2501] flex flex-col items-center justify-center space-y-6 transition-all duration-300 ${
                  isMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`
          }`}
        >
          {[{ label: "Accueil", path: "/" },
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
                  : "text-white text-xl hover:text-[#FFD700] text-center"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

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
              className="px-4 py-2 border border-[#FFD700] rounded-md text-[#FFF8F4] hover:bg-[#FFD700] hover:text-[#4A2501] transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              S'inscrire
            </Link>
          </div>
        </nav>

        {/* Bouton et champ de recherche */}
        {isDesktop && (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="bg-[#4A2501] text-white p-1 rounded-full hover:bg-[#63320C] transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
                />
              </svg>
            </button>
            {isSearchOpen && (
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center bg-white rounded-md overflow-hidden shadow-md"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Rechercher..."
                  className="px-2 py-1 text-[#4A2501] w-32 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-2 py-1 bg-[#4A2501] text-white hover:text-black  border border-[#FFD700] hover:bg-[#FFD700] transition-all"
                >
                  Rechercher
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
