import React from "react";
import { Link } from "react-router-dom"; // Importer Link pour la navigation

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
    image: "https://res.cloudinary.com/dxyolecju/image/upload/v1734891268/76b4717614ad47c70f163840ad46f607_wwvwht.jpg",
  },
  {
    name: "Bandal",
    description: "Maison à deux chambres salon, salle de bain et dépôt",
    image: "https://res.cloudinary.com/dxyolecju/image/upload/v1734879001/dwcrzknozp3jn6dcmbi3.jpg",
  },
  {
    name: "Kinshasa",
    description: "Maison à trois chambres salon, cuisine et salle de jeux",
    image: "https://res.cloudinary.com/dxyolecju/image/upload/v1734879001/woexkrf7rtjibshwdkuw.jpg",
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

  {
    name: "Matete",
    description: "Maison à trois chambres salon, cuisine et salle de dépôt",
    image: "https://res.cloudinary.com/dxyolecju/image/upload/v1734879000/u7ghscgrabhorhsrab6p.jpg",
  },
  {
    name: "Mont-Ngafula",
    description: "Maison à deux chambres salon, salle de bain et magasin",
    image: "https://res.cloudinary.com/dxyolecju/image/upload/v1734879000/dfuhjdpyxnzubjc3vsmp.jpg",
  },
  {
    name: "Masina",
    description: "Maison à une chambre salon, cuisine et salle de bain",
    image: "https://res.cloudinary.com/dxyolecju/image/upload/v1734879001/woexkrf7rtjibshwdkuw.jpg",
  },
  {
    name: "Makala",
    description: "Maison à trois chambres salon, cuisine et salle de dépôt",
    image: "https://res.cloudinary.com/dxyolecju/image/upload/v1734879000/cpeymurvpburnokg9z7k.jpg",
  },
  {
    name: "Maluku",
    description: "Maison à deux chambres salon, salle de bain et magasin",
    image: "https://res.cloudinary.com/dxyolecju/image/upload/v1734878999/rtmrdhhpcdltvuqvait0.jpg",
  },
  {
    name: "N'sele",
    description: "Maison à une chambre salon, cuisine et salle de bain",
    image: "https://res.cloudinary.com/dxyolecju/image/upload/v1734904875/098ad9b1aa10331b00900892d808c72f_uruorw.jpg",
  },
  {
    name: "Ndjili",
    description: "Maison à trois chambres salon, cuisine et salle de dépôt",
    image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515653/39b9a2a55caca07a1223a9f078e6e5bd_q0swjn.jpg",
  },
  {
    name: "Ngaba",
    description: "Maison à deux chambres salon, salle de bain et magasin",
    image: "https://res.cloudinary.com/dxyolecju/image/upload/v1734904875/9c72a7ffdcaa4c37568d98b39bfe6750_jgzeih.jpg",
  },
  {
    name: "Selembao",
    description: "Maison à une chambre salon, cuisine et salle de bain",
    image: "https://res.cloudinary.com/dxyolecju/image/upload/v1734904875/26ac5568bae9beece7f8ae55a541446a_pqmzn5.jpg",
  },
  
  
  
];

const PropertyPage: React.FC = () => {
  return (
    <div className=" text-gray-900  pt-16">
      <main>
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center w-full h-[440px] flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dtpw00be5/image/upload/v1733515766/house_with_parents_l71ref.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40  border-b-4 border-[#4A2501]"></div>

          {/* Text content */}
          <div className="relative z-10 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Le confort de votre maison contribue à votre bonheur
            </h2>
          </div>
        </section>

        {/* Properties Section */}
        <section className="py-12 px-8">
          <h2 className="text-center text-2xl font-bold mb-8">
            Votre satisfaction est notre plus grande joie Réservez maintenant!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 mt-6">
            {properties.map((property, index) => (
              <div
                key={index}
                className="relative group border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:bg-[#4A2501]"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Text overlay */}
                <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1  shadow-md">
                  <h3 className="text-sm font-bold">{property.name}</h3>
                </div>

                {/* Description */}
                <div className="p-4">
                  <p className="text-gray-700 group-hover:text-white mb-4 transition-colors duration-300">
                    {property.description}
                  </p>
                  <Link
                     to={`/PropertyDetails/${property.name}`}
                    className="inline-block px-4 py-2 bg-[#4A2501] hover:text-[#4A2501] hover:bg-white text-white rounded"
                  >
                    Réserver
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PropertyPage;
