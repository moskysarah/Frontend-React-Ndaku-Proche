import React from "react";
import { useNavigate } from "react-router-dom";

const PromoBanner: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/details");
  };

  return (
    <section className="bg-[#EADDC8] py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around ml-6">
        {/* Image */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img
            src="https://res.cloudinary.com/dtpw00be5/image/upload/v1733515579/3bb8ce84c13931ced83d910c197e5d10-removebg-preview_zk9duk.png"
            alt="Canapé moderne"
            className="w-full md:w-64 h-auto object-contain"
          />
        </div>

        {/* Texte et bouton */}
        <div className="text-center md:text-center ml-6">
          <h2 className="text-lg font-semibold text-[#4A2501]">
            Harmonisez votre maison avec <br />
            une tendance à couper le souffle
          </h2>
          <button
            onClick={handleNavigation}
            className="mt-4 px-6 py-2 border border-[#4A2501] text-[#4A2501] rounded-md hover:bg-[#4A2501] hover:text-white transition-colors duration-300"
          >
            Plus de détails
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
