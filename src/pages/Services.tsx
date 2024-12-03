import React from "react";
import { Link } from "react-router-dom";

const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* Section Hero */}
      <section className="bg-cover bg-center py-16" style={{ backgroundImage: "url('https://res.cloudinary.com/dtpw00be5/image/upload/v1732698675/Frame_480_sh8dym.png')" }}>
        <div className="container mx-auto text-center">
        </div>
        <h1 className="text-5xl font-bold text-white">Services et Prix</h1>
      </section>

      {/* Section Contenu */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 space-y-16">
          {/* Ligne 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <img src="https://res.cloudinary.com/dtpw00be5/image/upload/v1732698765/Make_up_lj1jbb.png" alt="Maquillage" className="rounded-lg shadow-md" />
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-4">Maquillage</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Maquillage nude</span>
                  <span className="text-red-500">from $25</span>
                </li>
                <li className="flex justify-between">
                  <span>Maquillage de mariée</span>
                  <span className="text-red-500">from $30</span>
                </li>
                <li className="flex justify-between">
                  <span>Maquillage de soirée</span>
                  <span className="text-red-500">from $50</span>
                </li>
                <li className="flex justify-between">
                  <span>Maquillage libanais</span>
                  <span className="text-red-500">from $30</span>
                </li>
              </ul>
                  <Link to="/services" className="text-black  hover:underline hover:text-red-600  mt-4 block">
                    Voir plus
                  </Link>
            </div>
          </div>

          {/* Ligne 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-4">Style de coiffure femme</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Les box braids</span>
                  <span className="text-red-500">from $25</span>
                </li>
                <li className="flex justify-between">
                  <span>Les senegalese twists</span>
                  <span className="text-red-500">from $30</span>
                </li>
              </ul>
                  <Link to="/" className="text-black  hover:underline hover:text-red-600  mt-4 block">
                    Voir plus
                  </Link>
            </div>
            <img src="https://res.cloudinary.com/dtpw00be5/image/upload/v1732793079/coupe_femme_zhizyo.png" alt="Coiffure Femme" className="rounded-lg shadow-md" />
          </div>

          {/* Ligne 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ">
            <img src="https://res.cloudinary.com/dtpw00be5/image/upload/v1732793263/coupe_noir_1_1_sqskgw.png" alt="Coiffure Homme" className="rounded-lg shadow-md w[150px] h[150px] " />
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-4">Coiffure Homme</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Crew cut</span>
                  <span className="text-red-500">from $15</span>
                </li>
                <li className="flex justify-between">
                  <span>Coupes en dégradé</span>
                  <span className="text-red-500">from $35</span>
                </li>
                <li className="flex justify-between">
                  <span>Coupes undercut</span>
                  <span className="text-red-500">from $20</span>
                </li>
                <li className="flex justify-between">
                  <span>Coupe effilée</span>
                  <span className="text-red-500">from $40</span>
                </li>
              </ul>
                  <Link to="/galleryPage" className="text-black  hover:underline hover:text-red-600  mt-4 block">
                    Voir plus
                  </Link>
            </div>
             {/* Ligne 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-4">Coiffure Enfant</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Crew cut</span>
                  <span className="text-red-500">from $25</span>
                </li>
                <li className="flex justify-between">
                  <span>Coupe à degradé</span>
                  <span className="text-red-500">from $30</span>
                </li>
                <li className="flex justify-between">
                  <span>Coupes undercut</span>
                  <span className="text-red-500">from $20</span>
                </li>
                <li className="flex justify-between">
                  <span>Coupe effilée</span>
                  <span className="text-red-500">from $40</span>
                </li>
              </ul>
                  <Link to="/galleryPage" className="text-black  hover:underline hover:text-red-600  mt-4 block">
                    Voir plus
                  </Link>
                  <img src="https://res.cloudinary.com/dtpw00be5/image/upload/v1732793263/Clip_path_group_1_fnyhim.png" alt="Coiffure enfant" className="rounded-lg shadow-md" />

            </div>
          </div>
           {/* Ligne 2 */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-4">Oglerie</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Manicure</span>
                  <span className="text-red-500">from $25</span>
                </li>
                <li className="flex justify-between">
                  <span>pedicure</span>
                  <span className="text-red-500">from $30</span>
                </li>
                <li className="flex justify-between">
                  <span>Vernis + replication</span>
                  <span className="text-red-500">from $30</span>
                </li>
              </ul>
                  <Link to="/GalleryPage" className="text-black  hover:underline hover:text-red-600  mt-4 block">
                    Voir plus
                  </Link>
            </div>
            <img src="https://res.cloudinary.com/dtpw00be5/image/upload/v1732698763/Img_7_kukx4j.png" alt="soin ongle" className="rounded-lg shadow-md" />
          </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

