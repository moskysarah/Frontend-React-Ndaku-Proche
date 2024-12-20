import React, { useState } from "react";

interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
}

const services: Service[] = [
   
{

  id: 1,

  title: "Vente meuble",

  icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517946/Vector_14_dj19lq.png",

  description: "Nous vous accompagnons dans l'achat et la vente de meubles, en vous offrant des conseils sur l'évaluation et la négociation des prix.",

},

{

  id: 2,

  title: "Entretien et maintenance",

  icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517930/Vector_15_mhktd9.png",

  description: "Nos services d'entretien et de maintenance garantissent que votre propriété reste en parfait état, avec un entretien régulier et des réparations nécessaires.",

},

{

  id: 3,

  title: "Aide au déménagement",

  icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517929/Vector_16_or7o54.png",

  description: "Nous facilitons votre déménagement en organisant le transport et le stockage de vos biens, tout en assurant leur sécurité pendant le processus.",

},

{

  id: 4,

  title: "Décoration intérieure",

  icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517929/Vector_17_zqfq3e.png",

  description: "Transformez votre espace avec notre service de décoration intérieure, qui inclut des conseils sur les couleurs, les meubles et l'aménagement.",

},

{

  id: 5,

  title: "Nettoyage professionnel",

  icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517929/Vector_18_zwaxjo.png",

  description: "Nous offrons un nettoyage en profondeur pour assurer un environnement sain et agréable, en utilisant des produits de qualité et des méthodes efficaces.",

},

{

  id: 6,

  title: "Choix de maison",

  icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517929/Vector_19_mrao3b.png",

  description: "Bénéficiez de conseils d'experts pour choisir la maison idéale en fonction de vos préférences et de votre budget, avec un accompagnement à chaque étape.",

},

{

  id: 7,

  title: "Actualité et tendance immobilière",

  icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517928/Vector_21_d5dojc.png",

  description: "Restez informé des dernières tendances du marché immobilier et des nouvelles réglementations pour faire des choix éclairés concernant vos investissements.",

},

{

  id: 8,

  title: "Visite virtuelle en 3D",

  icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517928/Vector_20_lzxmtk.png",

  description: "Explorez les propriétés depuis chez vous grâce à nos visites virtuelles en 3D, offrant une expérience immersive et détaillée.",

},

{

  id: 9,

  title: "Mise en réseau entre locataire et propriétaire",

  icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517911/Vector_22_oygrgd.png",

  description: "Facilitez la communication et les accords entre locataires et propriétaires grâce à notre plateforme dédiée, qui simplifie les échanges.",

},

{

  id: 10,

  title: "Alerte de disponibilité",

  icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517910/Vector_23_m1tjra.png",

  description: "Recevez des notifications instantanées lorsque des propriétés correspondant à vos critères sont disponibles, vous permettant d'agir rapidement.",

},

{

  id: 11,

  title: "Estimation immobilière",

  icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517909/Vector_24_cjgb1i.png",

  description: "Obtenez une évaluation précise de la valeur de votre propriété, basée sur des analyses de marché approfondies et des comparaisons avec d'autres biens.",

},

{

  id: 12,

  title: "Support en ligne",

  icon: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733517909/Vector_25_sakhfh.png",

  description: "Vous pouvez poser vos questions directement ici. Notre équipe est prête à vous aider avec tous vos besoins.",

},

];

const SupportChat: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, `Vous : ${input}`]);
      setInput("");

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          "Support : Merci pour votre question ! Nous vous répondrons sous peu.",
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border shadow-lg rounded-lg w-80 h-96 flex flex-col">
      <div className="bg-[#4A2501] text-white py-2 px-4 font-bold flex justify-between items-center">
        <span>Support en Ligne</span>
        <button
          onClick={onClose}
          className="text-white font-bold cursor-pointer"
        >
          ✕
        </button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-2">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex border-t p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Écrivez un message..."
          className="flex-1 px-2 py-1 border rounded-l-md"
        />
        <button
          onClick={sendMessage}
          className="bg-[#4A2501] text-white px-4 rounded-r-md hover:bg-green-600 transition cursor-pointer"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
};

const ServiceModal: React.FC<{ service: Service; onClose: () => void }> = ({ service, onClose }) => (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
      <p>{service.description}</p>
      <button
        onClick={onClose}
        className="mt-4 bg-[#4A2501] text-white py-2 px-4 rounded cursor-pointer"
      >
        Fermer
      </button>
    </div>
  </div>
);

const ServicesPage: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="bg-gray-50 relative">
      <div className="relative mb-6">
        <img
          src="https://res.cloudinary.com/dxyolecju/image/upload/v1734537247/salon_hzvx1p.jpg"
          alt="Image Principale de la page service"
          className="w-full h-[415px] object-cover bg-black bg-opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl font-bold text-center">
            Ndaku Proche vous accompagne
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
              className="bg-white border rounded-lg shadow-md p-6 hover:bg-[#EADDC8] hover:text-[#4A2501] transition duration-300 flex flex-col items-center cursor-pointer"
              onClick={() => {
                if (service.id === 12) {
                  setIsChatOpen(true);
                } else {
                  setSelectedService(service);
                }
              }}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-8 h-8 mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {isChatOpen && <SupportChat onClose={() => setIsChatOpen(false)} />}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default ServicesPage;
