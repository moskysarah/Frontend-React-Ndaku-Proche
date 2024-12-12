import React from "react";

interface Service {
  id: number;
  title: string;
  icon: string; 
}

const services: Service[] = [
  {
    id: 1,
    title: "Vente meuble",
    icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517946/Vector_14_dj19lq.png",
  },
  {
    id: 2,
    title: "Entretien et maintenance",
    icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517930/Vector_15_mhktd9.png",
  },
  {
    id: 3,
    title: "Aide au déménagement",
    icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517929/Vector_16_or7o54.png",
  },
  {
    id: 4,
    title: "Décoration intérieure",
    icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517929/Vector_17_zqfq3e.png",
  },
  {
    id: 5,
    title: "Nettoyage professionnel",
    icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517929/Vector_18_zwaxjo.png",
  },
  {
    id: 6,
    title: "Choix de maison",
    icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517929/Vector_19_mrao3b.png",
  },
  {
    id: 7,
    title: "Actualité et tendance immobilière",
    icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517928/Vector_21_d5dojc.png",
  },
  {
    id: 8,
    title: "Visite virtuelle en 3D",
    icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517928/Vector_20_lzxmtk.png",
  },
  {
    id: 9,
    title: "Mise en réseau entre locataire et propriétaire",
    icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517911/Vector_22_oygrgd.png",
  },
  
  {
    id: 10,
    title: "Alerte de disponibilité",
    icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517910/Vector_23_m1tjra.png",
  },
  
  {
    id: 11,
    title: "Estimation immobilière",
    icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517909/Vector_24_cjgb1i.png",
  },

  {
    id: 12,
    title: "Support en ligne",
    icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517909/Vector_25_sakhfh.png",
  },


];

const Services: React.FC = () => {
  return (
    <section className="bg-gray-50">
      
      <div className="relative w-full h-[60vh] bg-[#4A2501] text-white">
       
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dtpw00be5/image/upload/v1733852768/salon_nlz0tf.jpg"
            alt="Services Hero Background"
            className="w-full h-full object-cover"
          />    
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
       
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Ndaku proche vous accompagne
          </h1>
         
        </div>
      </div>

     
      <div className="py-12 px-6 text-center">
        <h2 className="text-2xl font-bold text-[#4A2501] mb-6">
          Nos services d'accompagnement
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border rounded-lg shadow-md p-6 hover:bg-[#EADDC8] hover:text-[#4A2501] transition duration-300 flex flex-col items-center"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-6 h-6 mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
