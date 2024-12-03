import React from 'react';
interface PriceItem {
  name: string;
  price: string;
}

interface CategoryProps {
  title: string;
  items: PriceItem[];
}

const Category: React.FC<CategoryProps> = ({ title, items }) => {
  return (
    <div className="w-full md:w-1/2 px-4 mb-8">
      <h3 className="text-xl font-semibold text-[#6B0606] mb-4">{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-gray-700 border-b border-dashed border-gray-300 py-2"
          >
            <span>{item.name}</span>
            <span className="text-[#6B0606]font-medium">{`from ${item.price}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pricing: React.FC = () => {
  const makeup = [
    { name: "Maquillage nude", price: "$25" },
    { name: "Maquillage de mariée", price: "$30" },
    { name: "Maquillage de soirée", price: "$50" },
    { name: "Maquillage libanais", price: "$30" },
  ];

  const womenHairstyle = [
    { name: "Les box braids", price: "$25" },
    { name: "Les senegalese twists", price: "$30" },
    { name: "Tresses collées", price: "$40" },
  ];
  
  const menHairstyle = [
    { name: "Crew cut", price: "$15" },
    { name: "Coupes en dégradé", price: "$35" },
    { name: "Coupes undercut", price: "$20" },
    { name: "Coupe effilée", price: "$40" },
    { name: "Coupe avec raie latérale", price: "$25" },
    { name: "Man bun", price: "$25" },
    { name: "Coupe pompadour", price: "$25" },
  ];
   
  const childHairstyle = [
    { name: "Crew cut", price: "$15" },
    { name: "Coupes en dégradé", price: "$35" },
    { name: "Coupes undercut", price: "$20" },
    { name: "Coupe effilée", price: "$40" },
    { name: "Coupe avec raie latérale", price: "$25" },
    { name: "Man bun", price: "$25" },
    { name: "Coupe pompadour", price: "$25" },
  ];
  
  const girlHairstyle  = [
    { name: "Les box braids", price: "$25" },
    { name: "Les senegalese twists", price: "$30" },
    { name: "Tresses collées", price: "$40" },
  ];
  const styleHair  = [
    { name: "Tissage par cheuveux naturels", price: "$25" },
    { name: "Tissage par closure", price: "$30" },
    { name: "Tissage par lace", price: "$40" },
    { name: "Tissage Naomie", price: "$40" },
  ];
  const styleHairwing  = [
    { name: "Pose perruque avec lace", price: "$25" },
    { name: "Pose perruque avec closure", price: "$30" },
  ];
  const hairCare  = [
    { name: "Soin de cheuveux par produits naturels", price: "$25" },
    { name: "Soin de cheuveux par produits artificiels", price: "$30" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#6B0606]">Nos prix</h2>
          <p className="text-gray-500 mt-4">
            Tout ceux dont vous avez besoin, nous les réalisons fabuleusement.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <Category title="Maquillage" items={makeup} />
          <Category title="Coiffure Homme" items={menHairstyle} />
          <Category title="Style de coiffure femme" items={womenHairstyle} />
          <Category title="Coiffure Enfant" items={childHairstyle} />
          <Category title="Pose Perruque" items={styleHairwing} />
          <Category title="Soin de cheuveux" items={hairCare} />
          <Category title="Tissage" items={styleHair} />
          <Category title=" Style de Coiffure Enfant" items={girlHairstyle} />
          
         
        </div>
      </div>
    </section>
  );
};

export default Pricing;
