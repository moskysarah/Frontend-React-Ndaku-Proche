import React, { useState } from 'react';

const GoogleIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className="w-6 h-6"
    >
      <path
        fill="#fbc02d"
        d="M44.5 20H24v8.5h11.8c-1.7 4.5-5.6 7.8-11.8 7.8-7 0-12.8-5.8-12.8-12.8S17 10.8 24 10.8c3.2 0 6.2 1.2 8.4 3.3L38 8.5C34.3 5.1 29.4 3 24 3 11.8 3 2 12.8 2 25s9.8 22 22 22c11.4 0 20.7-8.2 22-19V20z"
      />
      <path
        fill="#e53935"
        d="M6.3 14.7l6.6 4.8c1.8-4.4 6.2-7.5 11.2-7.5 3.2 0 6.2 1.2 8.4 3.3l5.6-5.6C34.3 5.1 29.4 3 24 3 15.4 3 8.3 7.8 6.3 14.7z"
      />
      <path
        fill="#4caf50"
        d="M24 47c5.9 0 11.2-2.2 15.3-5.9l-5.9-5.9c-2.2 1.8-5.2 3-8.4 3-6.2 0-11.4-4-13.3-9.5l-6.4 5C8.4 41.4 15.7 47 24 47z"
      />
      <path
        fill="#1565c0"
        d="M44.5 20H24v8.5h11.8c-1 2.7-2.8 4.9-5.1 6.4-.1.1-.1.2-.2.2l6 5.8c1.4-1.3 2.6-2.9 3.4-4.6.8-1.7 1.3-3.6 1.5-5.5.1-.7.2-1.4.2-2.1V20z"
      />
    </svg>
  );
};

const AppleIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M16.365 1.43c0 1.14-.455 2.294-1.166 3.192-.748.948-2.052 1.666-3.166 1.576a3.643 3.643 0 01-.035-.445c0-1.07.49-2.238 1.25-3.086C14.026 1.188 15.418.646 16.365.93c.015.168.035.33.035.5zm4.118 15.56c-.26.558-.585 1.11-.988 1.633-.56.718-1.02 1.36-1.735 1.36-.69 0-.97-.45-1.8-.43-.74.03-1.06.45-1.75.45-.725 0-1.18-.65-1.735-1.35-.81-1.05-1.445-2.675-1.445-4.185 0-1.55.515-2.29.975-2.97.735-1.065 1.81-1.68 3.095-1.68.87 0 1.495.46 2.26.46.72 0 1.275-.48 2.26-.48.72 0 1.58.38 2.27 1.04-.06.05-1.425.82-1.405 2.455.02 1.93 1.645 2.59 1.665 2.6-.03.08-.26.91-.98 1.96z" />
    </svg>
  );
};

const LoginPage: React.FC<{ onLoginSuccess: (user: { email: string }) => void }> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAppleLogin = () => {
    // Simulate Apple login
    alert('Connexion avec Apple réussie !');
    onLoginSuccess({ email: 'user@apple.com' });
  };

  const handleGoogleLogin = () => {
    // Simulate Google login
    alert('Connexion avec Google réussie !');
    onLoginSuccess({ email: 'user@gmail.com' });
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert('Veuillez entrer un email et un mot de passe.');
      return;
    }
    // Simulate email/password authentication
    alert(`Connexion réussie avec: ${email}`);
    onLoginSuccess({ email });
  };

  const handleSignup = () => {
    alert('Redirection vers la page d’inscription (simulée)');
  };

  return (
    <div className="flex flex-col items-center p-6 font-sans">
      <h2 className="text-lg font-bold mb-20">Entrer votre mail et votre mot de passe</h2>

      <button
        className="mb-4 px-6 py-2 border border-brown-500 rounded bg-white text-brown-500 hover:bg-brown-100 flex items-center justify-center"
        onClick={handleAppleLogin}
      >
        <AppleIcon />
        <span className="ml-2">Se connecter avec Apple</span>
      </button>

      <button
        className="mb-4 px-6 py-2 border border-brown-500 rounded bg-white text-brown-500 hover:bg-brown-100 flex items-center justify-center"
        onClick={handleGoogleLogin}
      >
        <GoogleIcon />
        <span className="ml-2">Se connecter avec Google</span>
      </button>

      <div className="w-full max-w-md">
        <input
          type="email"
          placeholder="Adresse-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-brown-500 rounded focus:outline-none focus:ring focus:ring-brown-200"
        />
      </div>

      <div className="w-full max-w-md">
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-brown-500 rounded focus:outline-none focus:ring focus:ring-brown-200"
        />
      </div>

      <div>
        <button
          className="mb-4 text-brown-500 underline hover:text-brown-700"
          onClick={() => alert('Réinitialisation du mot de passe (simulé)')}
        >
          Mot de passe oublié?
        </button>
      </div>

      <button
        className="mb-4 px-6 py-2 bg-brown-500 text-white rounded hover:bg-brown-600"
        onClick={handleLogin}
      >
        Se connecter
      </button>
    </div>
  );
};

export default LoginPage;
