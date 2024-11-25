import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <div className="relative h-[400px] bg-gray-900">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/placeholder.svg?height=400&width=800')"}}></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <button className="bg-white text-primary rounded-full p-4 hover:bg-opacity-90 transition duration-300">
          <Play size={32} />
        </button>
      </div>
    </div>
  );
}

export default VideoSection;