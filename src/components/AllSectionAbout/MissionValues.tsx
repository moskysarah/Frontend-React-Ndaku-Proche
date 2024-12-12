import React from "react";

const values = [
  {
    title: "La coopération",
    description: 
      "Travailler main dans la main avec les partenaires et les clients pour répondre à leurs attentes.",
    imageUrl:
      "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515701/a7954cc99e09d676fce7e72741d35252_oics7g.jpg",
  },
  {
    title: "La qualité",
    description:
      "Offrir des services hautement professionnels dans la gestion, la recherche, et la décoration immobilière.",
    imageUrl:
      "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515579/2e0cf26256ae3ff9c5740663a7c52b38_uk4dvn.jpg",
  },
  {
    title: "La transparence",
    description:
      "Clarté dans les processus  S'assurer que les clients comprennent toutes les étapes de leurs transactions.",
    imageUrl:
      "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515660/1268ce44103667f291a8cf5be58e9c49_wdlr3h.jpg",
  },
  {
    title: "La technologie",
    description:
      " Utiliser les outils numériques et les solutions technologiques pour simplifier les expériences immobilières.",
    imageUrl:
      "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515583/4da5c12ff0d3b83348b11d9237a6c42c_grwb8n.jpg",
  },

  {
    title: " Les tendances",
    description:
      "Mettre à jour constamment les services pour rester en phase avec les avancées du secteur immobilier.",
    imageUrl:
      "https://res.cloudinary.com/dtpw00be5/image/upload/v1733813978/capkey_e1r9nl.png",
  },
  {
    title: " La durabilité",
    description:
      "Engager à promouvoir des pratiques respectueuses de l'environnement dans la construction.",
    imageUrl:
      "https://res.cloudinary.com/dtpw00be5/image/upload/v1733814813/0409d06e1fae6dd52e6443cf85124e08_cjqclt.jpg",
  },


];

const MissionValues: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-center text-2xl font-bold mb-8">Nos valeurs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition hover:bg-[#4A2501] hover:text-white"
          >
            <img
              src={value.imageUrl}
              alt={value.title}
              className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:opacity-75 "
            />
            <div className="p-4 text-center ">
              <h3 className="text-lg font-bold mb-2  bg-white ml-16 w-48 h-12   text-[#4A2501] px-6 py-3 rounded-lg  hover:bg-[#4A2501] hover:text-white transition duration-300">{value.title}</h3>
              <p className="text-sm">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionValues;
