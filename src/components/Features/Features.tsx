import React from 'react';

const products = [
  { name: "Far à paupière", image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732830164/Img_37_wvfvh6.png" },
  { name: "Crème de nuit", image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732830164/Img_38_sntlyx.png" },
  { name: "Base de maquillage", image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732698727/Img_2_k6wjbj.png" },
  { name: "Brosse de maquillage", image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732831093/Img_41_zlnlnu.png" },
  { name: "Blush visage", image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732698729/Img_45_msjix5.png" },
  { name: "Rose à lèvre", image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732698729/Img_44_vajylm.png" },
  { name: "Rouge à lèvre", image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732698729/Img_43_c4j2ql.png" },
  { name: "Vernis à ongle", image: "https://res.cloudinary.com/dtpw00be5/image/upload/v1732698728/Img_42_upirzc.png" },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <header className="mb-10">
        <nav className="flex justify-center space-x-5 text-sm font-medium text-gray-700">
          <a href="#" className="text-[#6B0606] ">Tout nos produits</a>
          <a href="#">Nail polishes</a>
          <a href="#">Base de maquillage</a>
          <a href="#">Rouge à lèvre</a>
          <a href="#">Crème de nuit</a>
          <a href="#">Mascaras</a>
          <a href="#">Crayon à sourcil</a>
        </nav>
      </header>
      <main className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 md:w-32 md:h-32 ml-14 object-contain rounded-md"
            />
            <h2 className="text-sm font-medium text-gray-800">{product.name}</h2>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;