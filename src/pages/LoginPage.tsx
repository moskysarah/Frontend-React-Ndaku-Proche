import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage: React.FC<{ onLoginSuccess: (user: { email: string }) => void }> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Veuillez entrer un email et un mot de passe.");
      return;
    }
    alert(`Connexion réussie avec: ${email}`);
    onLoginSuccess({ email });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-xl font-bold text-center mb-6">Connectez-vous sur Ndaku Proche</h2>
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Adresse e-mail ou numéro de tél."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-[#4A2501] text-white py-2 rounded hover:bg-[#4A2501] mb-3"
        >
          Se connecter
        </button>

        <div className="text-center mb-4">
          <a
            href="#"
            className="text-[#4A2501] hover:underline text-sm"
            onClick={() => alert("Réinitialisation du mot de passe (simulée)")}
          >
            Mot de passe oublié ?
          </a>
        </div>

        <div className="text-center">
          <Link
            to="/signup"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 block text-center"
          >
            Créer nouveau compte
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
