import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4A2501] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 px-6">
        {/* Section 1 - Logo et description */}
        <div>
          <h1 className="text-lg font-semibold mb-4">NDAKU PROCHE</h1>
          <p className="text-sm mb-4">
            Votre partenaire idéale pour trouver une maison
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#FFD700]">
              <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
            </a>
            <a href="#" className="hover:text-[#FFD700]">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a href="#" className="hover:text-[#FFD700]">
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Section 2 - Recherche immobilière */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Recherche immobilière</h2>
          <ul className="space-y-2 text-sm">
            <li>Mont-Amba</li>
            <li>Lukunga</li>
            <li>Funa</li>
            <li>Ndjangu</li>
          </ul>
        </div>

        {/* Section 3 - Décoration intérieure */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Décoration intérieure</h2>
          <ul className="space-y-2 text-sm">
            <li>Mont-Amba</li>
            <li>Lukunga</li>
            <li>Funa</li>
            <li>Ndjangu</li>
          </ul>
        </div>

        {/* Section 4 - Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p className="text-sm mb-4">+243 892 231 978</p>
          {/* Bouton "Contactez-nous" redirigeant vers la page Contact */}
          <Link
            to="/contact"
            className="bg-[#FFD700] text-[#4A2501] px-4 py-2 rounded-md inline-block hover:bg-[#FFA500] transition duration-300"
          >
            <i className="fas fa-envelope"></i> Contactez-nous
          </Link>
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="border-t border-[#FFF8F4] mt-10"></div>
    </footer>
  );
};

export default Footer;
