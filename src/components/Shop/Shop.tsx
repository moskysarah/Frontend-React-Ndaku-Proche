import React from 'react';

interface Product {
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { name: "Face Toner", price: "$25", image: "/placeholder.svg?height=200&width=200" },
  { name: "Night Cream", price: "$35", image: "/placeholder.svg?height=200&width=200" },
  { name: "Makeup Base", price: "$28", image: "/placeholder.svg?height=200&width=200" },
  { name: "Makeup Brush Set", price: "$45", image: "/placeholder.svg?height=200&width=200" },
];

const Shop: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Our Shop</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-primary font-bold">{product.price}</p>
                <button className="mt-2 w-full bg-primary text-white py-2 rounded hover:bg-opacity-90 transition duration-300">
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