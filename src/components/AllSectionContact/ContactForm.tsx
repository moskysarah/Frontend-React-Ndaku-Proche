import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section className="bg-[#EADDC8] py-12 px-6 flex justify-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-5xl w-full">
        {/* Image à gauche */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://res.cloudinary.com/dtpw00be5/image/upload/v1733515727/bf34d88080e7715e2260ed767370edb0_y5pr31.jpg"
            alt="Décor de contact"
            className="w-full shadow-md h-[648px]"
          />
        </div>

        {/* Formulaire à droite */}
        <div className="w-full lg:w-1/2 bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Contactez-nous </h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  Nom
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-[#4A2501] focus:outline-none"
                  placeholder="Votre nom"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Prénom
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-[#4A2501] focus:outline-none"
                  placeholder="Votre prénom"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Téléphone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-[#4A2501] focus:outline-none"
                  placeholder="Votre téléphone"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="email" className="text-sm font-medium">
                  Adresse-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-[#4A2501] focus:outline-none"
                  placeholder="Votre adresse-mail"
                />
              </div>
            </div>
            {/* Sélection des services */}
            <div>
              <label htmlFor="services" className="text-sm font-medium">
                Sélectionnez un service
              </label>
              <select
                id="services"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-[#4A2501] focus:outline-none"
              >
                <option value="">Choisissez un service</option>
                <option value="nettoyage">Nettoyage professionnel</option>
                <option value="maintenance">Maintenance</option>
                <option value="aide au demenagement">Aide au déménagement</option>
                <option value="maintenance">Décoration interieure</option>
                <option value="maintenance">Estimation immobilier</option>
                <option value="maintenance">Alerte de disponibilité</option>

              </select>
            </div>
            {/* Sélection de l'heure */}
            <div>
              <label htmlFor="time" className="text-sm font-medium">
                Choisissez une heure de réservation
              </label>
              <input
                type="time"
                id="time"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-[#4A2501] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-[#4A2501] focus:outline-none"
                placeholder="Votre message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#4A2501] text-white font-medium py-3 rounded-md hover:bg-[#60350F] transition duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
