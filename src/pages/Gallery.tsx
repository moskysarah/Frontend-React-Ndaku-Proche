import React from "react";

const GalleryPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      

      {/* Title */}
      <div className="text-center mt-8">
        <h1 className="text-5xl font-serif text-red-800">Modèles</h1>
        <p className="text-2xl font-semibold mt-2">Homme</p>
        <p className="text-gray-600 mt-4">
          Nos services et prix sont équilibrés pour vous rapprocher de vos besoins
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center space-x-4 mt-8">
        <button className="px-4 py-2 border border-red-800 text-red-800 font-semibold rounded-md">
          Homme
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-md hover:border-red-800 hover:text-red-800">
          Femme
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-md hover:border-red-800 hover:text-red-800">
          Enfant
        </button>
      </div>

      {/* Images Grid */}
      <div className="container mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-3 aspect-square ">
        {[
          "https://res.cloudinary.com/dtpw00be5/image/upload/v1732698724/Img_13_mt2zkr.png",
          "https://res.cloudinary.com/dtpw00be5/image/upload/v1732698725/Img_14_skbxwm.png",
          "https://res.cloudinary.com/dtpw00be5/image/upload/v1733184969/Img_27_udgu7q.png",
          "https://res.cloudinary.com/dtpw00be5/image/upload/v1733184966/Img_28_rr6dzt.png",
          "https://res.cloudinary.com/dtpw00be5/image/upload/v1733184966/Img_29_gz5i3o.png",
          "https://res.cloudinary.com/dtpw00be5/image/upload/v1733184967/Img_31_ruh6ri.png",
          "https://res.cloudinary.com/dtpw00be5/image/upload/v1732698728/Img_19_xsffh4.png",
          "https://res.cloudinary.com/dtpw00be5/image/upload/v1732698728/Img_20_usllbz.png",
          "https://res.cloudinary.com/dtpw00be5/image/upload/v1733185444/Card_8_yfzs2i.png",
        ].map((image, index) => (
          <div key={index} className="overflow-hidden  ml-24 justify-start">
            <img src={image} alt={`Modèle ${index + 1}`} className="w-[250px] h-[250px] " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;

            