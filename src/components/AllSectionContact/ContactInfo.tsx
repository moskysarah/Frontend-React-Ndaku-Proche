import React from "react";

interface InfoCard {
  title: string;
  description: string;
  icon: string; // Contiendra le lien Cloudinary de l'icône
}

const infoCards: InfoCard[] = [
  {
    title: "Adresse",
    description: "Notre bureau se trouve à la commune de Lingwala  Nyangwe ",
    icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733905304/Vector_36_nqgrfr.png",
  },
  {
    title: "Appelez-nous",
    description: "+243892293178",
    icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517947/Vector_12_nhubfj.png", 
  },
  {
    title: "Disponibilité",
    description: "Nous sommes à votre disposition tous les jours",
    icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517947/Vector_13_xutssl.png", // Remplacez par un lien d'icône Cloudinary
  },
];

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-[#EADDC8] py-12 px-6 text-center">
      <h2 className="text-2xl font-bold text-[#4A2501] mb-6">
        Restez proche de nos services et soyez informé de toutes nos actualités dans l'immobilier
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {infoCards.map((card, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md p-6 hover:bg-[#EADDC8] hover:text-[#4A2501] transition duration-300 flex flex-col items-center"
          >
            <img
              src={card.icon}
              alt={`${card.title} icon`}
              className="w-7 h-7 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#4A2501]">{card.title}</h3>
            <p className="text-sm text-gray-800">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
