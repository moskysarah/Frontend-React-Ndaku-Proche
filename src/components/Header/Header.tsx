import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1115);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState<boolean>(false); // Utilisateur fictif pour la simulation
  const navigate = useNavigate();

  // Gestion du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1115);
      if (window.innerWidth > 1115) {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Gestion de la recherche
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

  // Déconnexion simulée
  const handleLogout = () => {
    setUser(false); // Déconnecte l'utilisateur fictif
    alert("Déconnexion réussie !");
    navigate("/"); // Redirection après déconnexion
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#4A2501] text-white py-4 z-50 shadow-md">
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

        {/* Menu Burger Icon (Visible uniquement en mobile) */}
        {!isDesktop && (
          <button
            className="flex items-center text-white focus:outline-none z-50"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsSearchOpen(false);
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
              : `fixed top-0 left-0 w-full h-full bg-[#4A2501] flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`
          }`}
        >
          {/* Liens de navigation */}
          <Link
            to="/"
            className="hover:text-[#DFBB9B] transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="/services"
            className="hover:text-[#DFBB9B] transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/apropos"
            className="hover:text-[#DFBB9B] transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            À propos
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#DFBB9B] transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/proprietes"
            className="hover:text-[#DFBB9B] transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Propriétés
          </Link>

          {user ? (
            <>
              {/* Lien vers le Dashboard */}
              
              {/* Bouton de déconnexion */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-[#FFD700] rounded-md hover:bg-[#FFD700] hover:text-[#4A2501] transition-all duration-300"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <>
              {/* Boutons Se connecter et S'inscrire */}
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 bg-[#FFD700] text-[#4A2501] rounded-md hover:bg-[#4A2501] hover:text-white border border-[#FFD700] transition-all duration-300"
              >
                Se connecter
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-4 py-2 bg-[#4A2501] text-white rounded-md hover:bg-[#FFD700] hover:text-[#4A2501] border border-[#FFD700] transition-all duration-300"
              >
                S'inscrire
              </button>
            </>
          )}
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
                  className="px-2 py-1 bg-[#4A2501] text-white hover:text-black border border-[#FFD700] hover:bg-[#FFD700] transition-all"
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
