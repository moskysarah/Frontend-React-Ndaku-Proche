import React from 'react';
import BookingForm from '../components/BookingForm/BookingForm';
import Features from '../components/Features/Features';


const ServiceItem: React.FC<{ title: string; items: { name: string; price: string }[] }> = ({ title, items }) => (
  <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
    <img src="/placeholder.svg?height=300&width=400" alt={title} className="rounded-lg shadow-md" />
    <div>
      <h3 className="text-2xl font-serif mb-4 text-primary">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span className="font-semibold">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Maquillage",
      items: [
        { name: "Maquillage de jour", price: "45€" },
        { name: "Maquillage de soirée", price: "60€" },
        { name: "Maquillage mariée", price: "80€" },
        { name: "Cours d'auto-maquillage", price: "70€" },
      ]
    },
    {
      title: "Style de coiffure femme",
      items: [
        { name: "Shampoing + coupe + brushing", price: "55€" },
        { name: "Coloration", price: "65€" },
        { name: "Mèches", price: "85€" },
        { name: "Lissage brésilien", price: "150€" },
      ]
    },
    {
      title: "Coiffure Homme",
      items: [
        { name: "Coupe", price: "25€" },
        { name: "Coupe + barbe", price: "35€" },
        { name: "Coloration", price: "40€" },
        { name: "Coupe enfant", price: "20€" },
      ]
    },
    {
      title: "Style de coiffure enfant",
      items: [
        { name: "Coupe garçon", price: "20€" },
        { name: "Coupe fille", price: "25€" },
        { name: "Tresse", price: "30€" },
        { name: "Coiffure spéciale", price: "40€" },
      ]
    },
    {
      title: "Soin des ongles",
      items: [
        { name: "Manucure", price: "30€" },
        { name: "Pédicure", price: "35€" },
        { name: "Pose de vernis", price: "15€" },
        { name: "Nail art", price: "20€" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center" style={{backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Services-r0blrylgNxYiantW4P3mk6IYJuBrGJ.png')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-serif text-white">Nos Services</h1>
        </div>
      </section>

      {/* Services and Prices */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-serif text-center mb-12">Services et Prix</h2>
        {services.map((service, index) => (
          <ServiceItem key={index} title={service.title} items={service.items} />
        ))}
      </section>

      {/* Booking Form */}
      <section className="bg-gray-100 py-16">
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