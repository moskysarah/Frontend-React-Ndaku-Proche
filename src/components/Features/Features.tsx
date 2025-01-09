import React from "react";
import { Link } from "react-router-dom";

const Features: React.FC = () => {
  const features = [
    {
      title: "Vente meubles",
      description:
        "Transformer votre maison avec des meubles qui offrent des designs modernes,  de haute qualité.",
      imageUrl:
        "https://res.cloudinary.com/dxyolecju/image/upload/v1734882271/7c6ce94b5cf148bef92ee99371d27f75_fajend.jpg",
    },
    {
      title: "Décoration intérieure",
      description: "Transformez votre espace en une sanctuaire de style avec nos expert(es) en design",
      imageUrl:
        "https://res.cloudinary.com/dxyolecju/image/upload/v1734528757/woman_designer_m8lldl.jpg",
    },
    {
      title: "Location de maisons ",
      description:
        "Restez informé des dernières actualités et tendances du marché immobilier.",
      imageUrl:
        "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515699/033809ad0f0ff94e1a357496b86ace04_lnex3e.jpg",
    },
    {
      title: "Nettoyage Professionnel",
      description:
        "Confiez l’entretien de vos espaces à des experts du nettoyage professionnel.",
      imageUrl:
        "https://res.cloudinary.com/dxyolecju/image/upload/v1734878999/nhwui7vbb34wcdkhfp0a.jpg",
    },
    {
      title: "Aide au déménagement",
      description:
        "Simplifiez votre déménagement avec notre service d’aide professionnel et fiable.",
      imageUrl:
        "https://res.cloudinary.com/dxyolecju/image/upload/v1734879000/knnxaormhjmbh9hcl9zi.jpg",
    },
    {
      title: "Actualités et tendances immobilières",
      description: "Trouvez la maison idéale grâce à notre expertise",
      imageUrl:
        "https://res.cloudinary.com/dtpw00be5/image/upload/v1733515585/7c1cf61f72904a8aa6e0f903a36612b9_uyrnd4.jpg",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <h1 className="text-center text-[#4A2501] text-2xl font-bold mb-8">
        Découvrez nos offres et trouvez la maison de vos rêves, adaptée à vos besoins !
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 mt-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white border rounded-md shadow-md overflow-hidden transform transition duration-300 hover:bg-[#4A2501]"
          >
            <div className="relative overflow-hidden">
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:opacity-75"
              />
            </div>

            <div className="p-4 text-center transition-colors duration-300 group-hover:text-white">
              <h3 className="text-2sm font-bold">{feature.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-200 text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="justify-center mt-10">
        <h1 className="font-bold text-center">
          <Link
            to="/services"
            className="text-[#4A2501] hover:underline hover:text-[#DFBFA8] transition-colors"
          >
            Savoir plus sur nos offres
          </Link>
        </h1>
      </div>
    </section>
  );
};

export default Features;
