import React from "react";

interface ContactHeroProps {
  title: string;
  backgroundImage: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ title, backgroundImage }) => {
  return (
    <div className="relative w-full h-[80vh] text-white">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover border-b-4 border-[#4A2501]"
        />
        {/* Overlay noir avec opacité */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Contenu superposé */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-18  text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ContactHero;
