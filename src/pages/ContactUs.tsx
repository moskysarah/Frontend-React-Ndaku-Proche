import React from 'react';
import Map from '../components/Map/Map';
import BookingForm from '../components/BookingForm/BookingForm';
import InstagramFeed from '../components/InstagramFeed/InstagramFeed';

const ContactPage: React.FC = () => {
  const salonLocation: [number, number] = [40.7128, -74.0060]; // Example: New York City coordinates

  return (
    <div className="bg-white">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-serif text-center mb-8">Contact Us</h1>

        <div>
          <BookingForm />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Map center={salonLocation} zoom={13} />
          </div>
          <div>
            <div className="mt-4">
              <h2 className="text-2xl font-serif mb-4">Localisation & Horaires de travail</h2>
              <p className="mb-2"><strong>Adresse:</strong>Bvld Lumumba Limete 18ème Rue Ref.YA LOLO</p>
              <p className="mb-2"><strong>E-mail:</strong>prettyglam@gmail.com</p>
              <p className="mb-2"><strong>Téléphone:</strong>+243842300559</p>
              <p className="mb-2"><strong>Lundi:</strong>Fermé</p>
              <p className="mb-2"><strong>Mardi-Samedi:</strong>8h30-22h30</p>
              <p className="mb-2"><strong>Dimanche:</strong>12h30-22h30</p>
            </div>
          </div>
          
        </div>
        <div>
            <InstagramFeed />
          </div>
      </div>
    </div>
  );
};

export default ContactPage;