import React from 'react';

interface Product {
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { name: "Blush visage", price: "$25", image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732698729/Img_45_msjix5.png" },
  { name: "Crème de nuit", price: "$35", image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732830164/Img_38_sntlyx.png" },
  { name: "Base de maquillage", price: "$28", image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732698727/Img_2_k6wjbj.png" },
  { name: "Brosse de maquillage", price: "$45", image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732831093/Img_41_zlnlnu.png" },
];

const Shop: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12 text-[#6B0606]  ">Nos produits cosmetiques</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg hover:bg-[#DFBFA8] hover:text-[#ffffff] hover:shadow-md transition-all duration-200 p-3 text-center">
              <img src={product.image} alt={product.name} className="w-24 h-24 mt-5 md:w-32 md:h-32 ml-16 object-contain rounded-md " />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className=" font-bold ">{product.price}</p>
                <button className="mt-2 w-[120px] h-[40px] bg-primary font-bold  py-2 rounded hover:bg-white hover:text-[#DFBFA8]">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;