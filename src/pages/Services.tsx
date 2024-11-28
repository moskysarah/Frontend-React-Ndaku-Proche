
import BookingForm from '../components/BookingForm/BookingForm';
import Features from '../components/Features/Features';

import React from "react";

type Service = {
  name: string;
  price: string; // Prix au format texte (ex. : "$20")
};

type Category = {
  title: string;
  image: string; // URL de l'image
  services: Service[];
};

const ServicesPage: React.FC = () => {
  
      
  const categories: Category[] = [
    
    {
      title: "Maquillage",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732698765/Make_up_lj1jbb.png", // Remplacez par le chemin de vos images
      services: [
        { name: "Maquillage de jour", price: "$20" },
        { name: "Maquillage de soirée", price: "$30" },
        { name: "Maquillage mariage", price: "$50" },
      ],
    },
    {
      title: "Coiffure femme",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732793079/coupe_femme_zhizyo.png",

      services: [
        { name: "Coupe classique", price: "$15" },
        { name: "Coloration", price: "$40" },
        { name: "Brushing", price: "$25" },
      ],
    },
    {
      title: "Coiffure homme",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732793263/coupe_noir_1_1_sqskgw.png",
      services: [
        { name: "Coupe classique", price: "$10" },
        { name: "Dégradé", price: "$15" },
        { name: "Barbe", price: "$10" },
      ],
    },
    {
      title: "Coiffure enfants",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732793263/Clip_path_group_1_fnyhim.png",
      services: [
        { name: "Coupe simple", price: "$8" },
        { name: "Coiffure spéciale", price: "$12" },
      ],
    },
  ];

  return (
    <div className="">
      {/* Bannière */}
        <div className="  justify-center mr-50"> 
            <h1 className="text-5xl font-imperial items-center ">Service</h1>
        </div>
      <header className="relative">
        <img
          src="https://res.cloudinary.com/dtpw00be5/image/upload/v1732698675/Frame_480_sh8dym.png" // Remplacez par l'image de la bannière
          alt="Bannière"
          className="w-full h-100  object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          
        </div>
      </header>
    
      {/* Liste des catégories */}
      <div className="container mx-auto px-4 py-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center mb-12 border-b pb-8"
          >
            {/* Image */}
            <img
              src={category.image}
              alt={category.title}
              className="w-full md:w-1/3 rounded-lg shadow-md mb-4 md:mb-0 md:mr-6 md:flex-row-reverse"
            />
            {/* Contenu */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <ul>
                {category.services.map((service, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center text-lg mb-2"
                  >
                    <span>{service.name}</span>
                    <span className="text-gray-500">{service.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
       {/* Booking Form */}
       <section className="bg-gray-100 py-16 mt-25">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">Prenez rendez-vous</h2>
          <BookingForm />
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto py-16 px-4">
        <Features />
      </section>
    </div>
  );
};

export default ServicesPage;
     
  