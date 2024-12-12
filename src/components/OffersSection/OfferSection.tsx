import React from "react";
const offers = [
  {
    title: "Gestion de propriétés",
    description: "Maximisez votre investissement avec une gestion immobilière experte",
    imageUrl: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515586/5a26c62606f3e380d85445615ff6a4fa_hrq3my.jpg", 
  },
  {
    title: "Décoration intérieure",
    description: "Transformez votre maison avec des designs modernes et élégants",
    imageUrl: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515653/30b1e90da38330dffe174454dee703a7_kxkqcj.jpg", 
  },
  {
    title: "Recherche immobilière",
    description: "Trouvez la maison idéale grâce à notre expertise",
    imageUrl: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515585/7c1cf61f72904a8aa6e0f903a36612b9_uyrnd4.jpg", 
  },
];

const OffersSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 ">
      <h2 className="text-center text-xl font-bold text-[#4A2501]  ml-6">Nos offres</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4  mt-6">
        {offers.map((offer, index) => (
          <div key={index} className="group bg-white border rounded-md shadow-md overflow-hidden transform transition duration-300 hover:bg-[#4A2501]">
            {/* Image de l'offre */}
            <img
              src={offer.imageUrl}
              alt={offer.title}
              className="w-full h-48 object-cover  transition-transform duration-300 transform group-hover:scale-110 group-hover:opacity-75"
            />
            {/* Texte de l'offre */}
            <div className=" p-4 text-center transition-colors duration-300 group hover:text-white">
              <h3 className="text-lg font-bold">{offer.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-200 ">
                    {offer.description}
                </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersSection;