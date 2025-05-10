import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 mt-18  ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Image */}
        <img
          src="https://res.cloudinary.com/dtpw00be5/image/upload/v1733515654/87a6a92dce49fc3d1034fef0c2b30478_kyreag.jpg" 
          alt="Ndaku Proche"
          className=" rounded-lg shadow-md   w-[450px]  h-[450px]"
        />
        {/* Texte */}
        <div>
          <h3 className="text-2xl font-bold text-[#4A2501] mb-6  ">
            Notre mission
          </h3>
          <p className="text-gray-700 leading-relaxed  text-sm2 ">
                La mission de Ndaku Proche est de redéfinir les standards de l'immobilier en 
                République Démocratique du Congo et au-delà, en offrant des services 
                exceptionnels qui répondent aux besoins variés des clients. Cela inclu
          </p>
            <h1 className="font-semibold"> Fournir des solutions immobilières personnalisées </h1>
          <p className="text-gray-700 leading-relaxed  text-sm2 mb-6">
                Aider les clients à trouver des maisons adaptées à leurs goûts et besoins spécifiques.
                Offrir une gestion efficace des propriétés pour maximiser leur valeur.
          </p>
            <h2 className="font-semibold text-sm2">Simplifier les transactions immobilières </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
                 Proposer des processus transparents pour l'achat, la location ou la vente de biens immobiliers.
                Garantir un accompagnement complet à chaque étape.
          </p>
            <h3 className="font-semibold text-sm2">Créer des espaces de vie modernes et confortables </h3>
          <p className="text-gray-700 leading-relaxed">
                Transformer les espaces grâce à la décoration intérieure innovante.
                Concevoir des environnements harmonieux qui favorisent le bien-être et la convivialité. 
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
