import React from "react";

const properties = [
  {
    name: "Barumbu",
    description: "Maison à deux chambres salon, salle de bain et magasin",
    image: "path/to/bonumbu.jpg",
  },
  {
    name: "Gombe",
    description: "Maison à trois chambres salon, cuisine et salle de bain",
    image: "path/to/gombe.jpg",
  },
  {
    name: "Ngaliema",
    description: "Maison à trois chambres, salle à manger et salle de bain",
    image: "path/to/ngaliema.jpg",
  },
  {
    name: "Lingwala",
    description: "Maison à deux chambres salon, salle de bain et dépôt",
    image: "path/to/lingwala.jpg",
  },
  {
    name: "Kinshasa",
    description: "Maison à trois chambres salon, cuisine et salle de jeux",
    image: "path/to/kinshasa.jpg",
  },
  {
    name: "Bandal",
    description: "Maison à trois chambres salon, cuisine et salle de dépôt",
    image: "path/to/bandal.jpg",
  },
  {
    name: "Limete",
    description: "Maison à deux chambres salon, salle de bain et magasin",
    image: "path/to/limete.jpg",
  },
  {
    name: "Matete",
    description: "Maison à une chambre salon, cuisine et salle de bain",
    image: "path/to/matete.jpg",
  },
];

const PropetiesPage: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <main>
        <section className="relative bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('path/to/header-image.jpg')" }}>
          <div className="text-center text-white">
            <h2 className="text-4xl font-semibold">Le confort de votre maison contribue à votre bonheur</h2>
            <button className="mt-4 px-6 py-2 bg-white text-brown-700 font-bold rounded">Voir plus</button>
          </div>
        </section>

        <section className="py-12 px-8">
          <h2 className="text-center text-2xl font-bold mb-8">Êtes-vous satisfait de votre nouvelle maison?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div key={index} className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                  <p className="text-gray-700 mb-4">{property.description}</p>
                  <button className="px-4 py-2 bg-brown-700 text-white rounded">Réserver</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default PropetiesPage;
