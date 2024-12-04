import { useState, useEffect } from "react";

const Carousel = () => {
  const images = ["/img/carousel-1.jpg", "/img/carousel-2.jpg"]; // Liste des images
  const [currentIndex, setCurrentIndex] = useState(0); // Index de l'image actuelle

  // Fonction pour aller à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Utilisation de useEffect pour définir le timer
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Passe à l'image suivante toutes les 3 secondes
    }, 3000); // Délai de 3 secondes (3000 ms)

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, []); // Le tableau vide [] garantit que l'effet s'exécute une seule fois

  return (
    <div className="relative w-full h-[80vh]">
      {/* Carousel wrapper */}
      <div className="relative h-full overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ objectPosition: "top" }}
            />
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 bg-black bg-opacity-50 rounded-full group-hover:bg-opacity-75">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
        </span>
      </button>
      <button
        type="button"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 bg-black bg-opacity-50 rounded-full group-hover:bg-opacity-75">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
