import React, { useState } from 'react';
import { cn } from '../utils/cn';

type TabType = 'homme' | 'femme' | 'enfants';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: TabType;
}

const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('homme');

  const galleryImages: GalleryImage[] = [
    // Homme
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Coupe homme dégradé",
      category: 'homme'
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Coupe courte homme",
      category: 'homme'
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Style moderne homme",
      category: 'homme'
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Coupe avec barbe",
      category: 'homme'
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Tresses homme",
      category: 'homme'
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Afro style",
      category: 'homme'
    },
    // Femme
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Tresses africaines",
      category: 'femme'
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Chignon tressé",
      category: 'femme'
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Tresses avec extensions",
      category: 'femme'
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Coiffure de mariée",
      category: 'femme'
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Chignon élégant",
      category: 'femme'
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Coiffure de soirée",
      category: 'femme'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-60 bg-primary/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary">Modèles</h1>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('homme')}
              className={cn(
                "px-6 py-2 rounded-l-lg transition-colors",
                activeTab === 'homme' 
                  ? "bg-primary text-white" 
                  : "hover:bg-gray-50"
              )}
            >
              Homme
            </button>
            <button
              onClick={() => setActiveTab('femme')}
              className={cn(
                "px-6 py-2 transition-colors",
                activeTab === 'femme' 
                  ? "bg-primary text-white" 
                  : "hover:bg-gray-50"
              )}
            >
              Femme
            </button>
            <button
              onClick={() => setActiveTab('enfants')}
              className={cn(
                "px-6 py-2 rounded-r-lg transition-colors",
                activeTab === 'enfants' 
                  ? "bg-primary text-white" 
                  : "hover:bg-gray-50"
              )}
            >
              Enfants
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-gray-600 mb-8">
          Nos services et prix sont équilibrés pour vous rapprocher de vos besoins
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages
            .filter(image => image.category === activeTab)
            .map(image => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;