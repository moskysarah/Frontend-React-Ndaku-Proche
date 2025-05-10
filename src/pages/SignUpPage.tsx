import React, { useState } from 'react';

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const [showModal, setShowModal] = useState(false); // État pour afficher ou masquer le pop-up

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
    // Simulate successful sign-up
    setShowModal(true); // Affiche le modal
  };

  const closeModal = () => {
    setShowModal(false); // Ferme le modal
  };

  return (
    <div className="flex flex-col items-center p-6 font-sans mt-10">
      <h2 className="text-lg font-bold mb-6">Bienvenue à notre site Ndaku proche !</h2>

      <div className="w-full max-w-md">
        <input
          type="text"
          name="firstName"
          placeholder="Nom"
          value={formData.firstName}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
        />
      </div>

      <div className="w-full max-w-md">
        <input
          type="text"
          name="lastName"
          placeholder="Prénom"
          value={formData.lastName}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
        />
      </div>

      <div className="w-full max-w-md">
        <input
          type="email"
          name="email"
          placeholder="Adresse-mail"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
        />
      </div>

      <div className="w-full max-w-md">
        <input
          type="text"
          name="phone"
          placeholder="Téléphone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
        />
      </div>

      <div className="w-full max-w-md">
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
        />
      </div>

      <button
        className="px-6 py-2 bg-[#4A2501] text-white rounded hover:bg-gray-900"
        onClick={handleSignUp}
      >
        S’inscrire
      </button>

      {/* Pop-up modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">Inscription réussie 🎉</h2>
            <p>Bienvenue, {formData.firstName} {formData.lastName} !</p>
            <p className="mt-2">Votre email : {formData.email}</p>
            <button
              className="mt-4 px-4 py-2 bg-[#4A2501] text-white rounded hover:bg-gray-900"
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
