
  const ServicesPage = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        {/* Titre principal */}
        <h1 className="text-4xl font-bold text-center text-red-700 mb-4">
          Services et Prix
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Nos services et prix sont équilibrés pour vous rapprocher de vos besoins.
        </p>
  
        {/* Section maquillage */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Image maquillage */}
          <div className="w-full">
            <img
              src="https://via.placeholder.com/500" // Remplace par ton image
              alt="Maquillage"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Texte maquillage */}
          <div>
            <h2 className="text-2xl font-semibold text-red-700 mb-4">Maquillage</h2>
            <p className="text-gray-600 mb-4">
              Laissez-nous vous embellir avec un talent uniforme.
            </p>
            <ul className="space-y-2">
              <li className="flex justify-between border-b pb-2">
                <span>Maquillage nude</span>
                <span className="text-red-700 font-semibold">$35</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Maquillage de mariée</span>
                <span className="text-red-700 font-semibold">$40</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Maquillage de soirée</span>
                <span className="text-red-700 font-semibold">$50</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Maquillage libanais</span>
                <span className="text-red-700 font-semibold">$60</span>
              </li>
            </ul>
            <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">
              Voir tout
            </a>
          </div>
        </div>
  
        {/* Section style de coiffure */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Texte coiffure */}
          <div>
            <h2 className="text-2xl font-semibold text-red-700 mb-4">
              Style de coiffure femme
            </h2>
            <p className="text-gray-600 mb-4">
              Laissez-nous prendre soin de vos cheveux.
            </p>
            <ul className="space-y-2">
              <li className="flex justify-between border-b pb-2">
                <span>Box braid</span>
                <span className="text-red-700 font-semibold">$55</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Semi-tressage twist</span>
                <span className="text-red-700 font-semibold">$50</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Dreadlock braids</span>
                <span className="text-red-700 font-semibold">$25</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Pose lace</span>
                <span className="text-red-700 font-semibold">$30</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Pose perruque</span>
                <span className="text-red-700 font-semibold">$25</span>
              </li>
            </ul>
          </div>
          {/* Image coiffure */}
          <div className="w-full">
            <img
              src="https://via.placeholder.com/500" // Remplace par ton image
              alt="Coiffure"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default ServicesPage;