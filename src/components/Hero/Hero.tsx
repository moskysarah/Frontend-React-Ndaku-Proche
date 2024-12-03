import React from "react";

import IconBrushFace from "../Icons/IconMakeUp/IconBrushFace";
import IconBrushHair from "../Icons/IconMakeUp/IconBrushHair";
import IconWoman from "../Icons/IconMakeUp/IconWoman";
import IconNail from "../Icons/IconMakeUp/IconNail";
import IconScissors from "../Icons/IconMakeUp/IconScissors";
import IconCosmeticProduct from "../Icons/IconMakeUp/IconCosmeticProduct";



  const services = [
    {
      id: 1,
      title: "Maquillage",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732947499/Card_1_3_wgg9dr.png", // Remplacez par votre URL
      icon:  <IconBrushFace />,
    },
    {
      id: 2,
      title: "Tresses Femme",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732947416/Card_2_3_nrtum1.png", // Remplacez par votre URL
      icon: <IconBrushHair/>,
    },
    {
      id: 3,
      title: "Pose Perruque",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732947415/Card_5_jpq1ba.png", // Remplacez par votre URL
      icon: <IconWoman/>,
    },
    {
      id: 4,
      title: "Onglerie",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732947974/Card_3_4_eqzlsk.png", // Remplacez par votre URL
      icon: <IconNail/>,
    },
    {
      id: 1,
      title: "Coifffure Homme",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732947468/Card_1_4_dr2ryd.png", // Remplacez par votre URL
      icon:  <IconScissors />,
    },
    {
      id: 2,
      title: "Coiffure Enfant",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732947469/Card_2_4_t8cxjk.png", // Remplacez par votre URL
      icon: <IconScissors />,
    },
    {
      id: 3,
      title: "Tresses Enfant",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732947537/Card_3_5_si9e8m.png", // Remplacez par votre URL
      icon: <IconBrushHair/>, 
    },
    {
      id: 4,
      title: "Cosmetiques",
      image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1733031643/produit_cos_sy1zxp.png", // Remplacez par votre URL
      icon: <IconCosmeticProduct/>,
    },
  ];
    
  const Hero: React.FC = () => {
    return (
      <div className=" py-10">

          <h1 className="text-center font-imperial text-4xl  text-[#6B0606] ">Pretty Glam</h1>
            {/* Image avec texte */}
        <div
            className=" bg-cover  w-full  h-[650px] "
            style={{
                     backgroundImage: `url('https://res.cloudinary.com/dtpw00be5/image/upload/v1732793283/hero_ul1x6h.png')`, // Remplacez par l'URL de votre image
                    }}
        >
            {/* Superposition */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-72">
          <h1 className="text-5xl  text-[#6B0606] font-bold py-2 px-6 font-serif mt-22 mb-2 ">
            Plonger dans l'élégance ultime
          </h1>
          <p className="text-5xl  text-[#6B0606] font-bold py-2 px-4 font-serif mt-22 ">
            Embellissez le monde par votre beauté
          </p>
        <button className="bg-white text-primary font-semibold py-2 px-6 rounded-full hover:bg-[#6B0606] hover:text-[#ffffff] transition duration-300 mt-8">
            Réservez-maintenant
        </button>
      </div>
        
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group cursor-pointer overflow-hidden  shadow-md "
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-44 mt-22 object-cotain transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center   pb-4  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="flex items-center space-x-4 bg-white mt-48 mr-40 w-8  h-8 text-white ">{service.icon}</span>
              </div>
              {/* Title */}
              <div className="text-center py-3 ">
                <p className="  font-semibold  hover:text-[#6B0606] opacity-0 group-hover:opacity-100  transition-opacity duration-300 ">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Hero;
