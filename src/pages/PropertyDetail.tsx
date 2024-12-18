import React from "react";
import { useParams } from "react-router-dom";


const properties = [
    {
      name: "Barumbu",
      description: "Maison à deux chambres salon, salle de bain et magasin",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515725/b769a689ea2d81225ca60ca3c564fee3_k5mont.jpg",
    },
    {
      name: "Gombe",
      description: "Maison à trois chambres salon, cuisine et salle de bain",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515728/cb64c5144d889593e8a38746dde0e621_hiifth.jpg",
    },
    {
      name: "Ngaliema",
      description: "Maison à trois chambres, salle à manger et salle de bain",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515578/1c27c3f33a680a04dcce85099910bab7_adew7r.jpg",
    },
    {
      name: "Bandal",
      description: "Maison à deux chambres salon, salle de bain et dépôt",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515578/1b09918045fb44bb3bda4eb25ec6cef3_slfqac.jpg",
    },
    {
      name: "Kinshasa",
      description: "Maison à trois chambres salon, cuisine et salle de jeux",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515583/05f68d1e36e9e54a589eabec75306fd2_seu6ii.jpg",
    },
    {
      name: "Kitambo",
      description: "Maison à trois chambres salon, cuisine et salle de dépôt",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515653/39b9a2a55caca07a1223a9f078e6e5bd_q0swjn.jpg",
    },
    {
      name: "Limete",
      description: "Maison à deux chambres salon, salle de bain et magasin",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515660/05213e3e61513bf19d41ced8eca31b36_s9dynp.jpg",
    },
    {
      name: "Lemba",
      description: "Maison à une chambre salon, cuisine et salle de bain",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515702/ad243eb0ba314bcf39b7e09017868388_ocntdb.jpg",
    },
    {
      name: "Lingwala",
      description: "Maison à une chambre salon, cuisine et salle de bain",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515700/9609890d5f00fd956618130861c41c39_xxwupz.jpg",
    },
  ];


const PropertyDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>(); // Récupérer le paramètre 'name' depuis l'URL
  const property = properties.find((p) => p.name.toLowerCase() === name?.toLowerCase());

  if (!property) {
    return <div>Propriété non trouvée</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{property.name}</h1>
      <p className="mt-2 text-gray-700">{property.description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Confirmer la réservation
      </button>
    </div>
  );
};

export default PropertyDetails;
