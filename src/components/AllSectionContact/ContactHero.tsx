import React from "react";

interface ContactHeroProps {
  title: string;
  backgroundImage: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({
  title,
  backgroundImage,
}) => {
  return (
    <div className="relative w-full h-[60vh] bg-[#4A2501] text-white">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-3xl sm:text-5xl font-bold">{title}</h1>
        
      </div>
    </div>
  );
};

export default ContactHero;
