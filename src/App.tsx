import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import 'leaflet/dist/leaflet.css';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/Services';
import AboutPage from './pages/AboutPage';
import PropertiesPage from './pages/Properties';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Propreties" element={<PropertiesPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;