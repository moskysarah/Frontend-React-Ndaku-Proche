import React from "react";

interface ContactHeroProps {
  title: string;
  backgroundImage: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ title, backgroundImage }) => {
  return (
    <div className="relative w-full h-[72vh] text-white">
     
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay noir avec opacité */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      {/* Contenu superposé */}
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-3xl sm:text-4xl font-bold  leading-tight">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ContactHero;
