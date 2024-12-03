import React, { useState } from "react";

const VideoSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideo = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <section className="relative h-[400px] bg-black flex items-center justify-center">
      {/* Vidéo */}
      {isVideoOpen && (
        <video
          className="absolute w-full h-full object-cover"
          controls
          autoPlay
        >
          <source src="/video section/video section.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Bouton Play/Pause */}
      <button
        onClick={toggleVideo}
        className="absolute z-10 bg-white p-4 rounded-full shadow-lg focus:outline-none hover:scale-110 hover:bg-[#DFBFA8]  transition-transform"
      >
        {isVideoOpen ? (
          // Icône pour "Pause" ou "Fermer"
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 hover: text-black "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 9v6m4-6v6"
            />
          </svg>
        ) : (
          // Icône pour "Play"
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 text-black "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-5.197-3.09A1 1 0 008 8.91v6.18a1 1 0 001.555.832l5.197-3.09a1 1 0 000-1.664z"
            />
          </svg>
        )}
      </button>
    </section>
  );
};

export default VideoSection;
