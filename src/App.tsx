import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import PropertyPage from "./pages/PropertyPage";
import DetailsPage from "./pages/DetailsPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SearchPage from "./pages/SearchPage";
import "./App.css";
import "leaflet/dist/leaflet.css";
const App: React.FC = () => {
  const handleLoginSuccess = (user: { email: string }) => {
    console.log("Utilisateur connecté :", user.email);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apropos" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/proprietes" element={<PropertyPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route
            path="/PropertyDetails/:propertyName"
            element={<PropertyDetailsPage />}
          />
          <Route path="/recherche" element={<SearchPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* Passez `onLoginSuccess` au composant LoginPage */}
          <Route
            path="/login"
            element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};


export default App;
