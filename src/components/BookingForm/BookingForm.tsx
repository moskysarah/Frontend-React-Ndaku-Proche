import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="bg-muted/20 py-12">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-1  bg-white rounded-lg shadow-md p-8">
            <div className="relative h-[400px] bg-cover bg-center border" style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2015/05/31/14/23/organizer-791939_1280.jpg')"}}>
            </div>
        
            <div className="bg-white rounded-lg">
              <h2 className="text-2xl font-serif text-primary text-center mb-6">Prendre rendez-vous</h2>
              <i className="text-sm text-gray-600">
                Remplissez ce formulaire pour prendre rendez-vous avec notre salon de beauté.
                Nous vous remercions de votre confiance.
              </i>
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="prenom"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Prenom"
                  className="border rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="nom"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Nom"
                  className="border rounded px-3 py-2"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border rounded px-3 py-2"
                  required
                />
                <input
                  type="tel"
                  name="telephone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="TelePhone"
                  className="border rounded px-3 py-2"
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border rounded px-3 py-2"
                  required
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="border rounded px-3 py-2"
                  required
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 md:col-span-2"
                  required
                >
                  <option value="">Selectionner service</option>
                  <option value="haircut">Haircut</option>
                  <option value="coloring">Hair Coloring</option>
                  <option value="styling">Hair Styling</option>
                  <option value="treatment">Hair Treatment</option>
                </select>
                <button
                  type="submit"
                  className="bg-[#6B0606] text-white px-4 py-2 rounded md:col-span-2"
                >
                  Envoyer message
                </button>
              </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;