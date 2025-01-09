import React, { useState } from 'react';

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = () => {
    const { firstName, lastName, email, phone, password } = formData;
    if (!firstName || !lastName || !email || !phone || !password) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    // Simulate sign-up authentication
    alert(`Inscription réussie pour : ${firstName} ${lastName} (${email})`);
  };

  return (
    <div className="flex flex-col items-center p-6 font-sans">
      <h2 className="text-lg font-bold mb-20">Bienvenue à notre site Ndaku proche !</h2>

      <div className="w-full max-w-md">
        <input
          type="text"
          name="firstName"
          placeholder="Nom"
          value={formData.firstName}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border border-brown-500 rounded focus:outline-none focus:ring focus:ring-brown-200"
        />
      </div>

      <div className="w-full max-w-md">
        <input
          type="text"
          name="lastName"
          placeholder="Prénom"
          value={formData.lastName}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border border-brown-500 rounded focus:outline-none focus:ring focus:ring-brown-200"
        />
      </div>

      <div className="w-full max-w-md">
        <input
          type="email"
          name="email"
          placeholder="Adresse-mail"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border border-brown-500 rounded focus:outline-none focus:ring focus:ring-brown-200"
        />
      </div>

      <div className="w-full max-w-md">
        <input
          type="text"
          name="phone"
          placeholder="Téléphone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border border-brown-500 rounded focus:outline-none focus:ring focus:ring-brown-200"
        />
      </div>

      <div className="w-full max-w-md">
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border border-brown-500 rounded focus:outline-none focus:ring focus:ring-brown-200"
        />
      </div>

      <button
        className="px-6 py-2 bg-brown-500 text-white rounded hover:bg-brown-600"
        onClick={handleSignUp}
      >
        S’inscrire
      </button>
    </div>
  );
};

export default SignUpPage;
