import { useState } from "react";
import './Carroussel.css'

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < pictures.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); 
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(pictures.length - 1); 
    }
  };

  return (
    <div className="carrousel-container">
      <img
        className="carrousselImg"
        src={pictures[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
      />

      {/* Numérotation des images */}
      <div className="numerotation">
        {currentIndex + 1}/{pictures.length}
      </div>

      {/* Afficher les flèches seulement s'il y a plus d'une image */}
      {pictures.length > 1 && (
        <>
          {/* Bouton pour aller à l'image précédente */}
          <button onClick={prevImage} className="prevBtn">
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
            </svg>
          </button>

          {/* Bouton pour aller à l'image suivante */}
          <button onClick={nextImage} className="nextBtn">
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

export default Carrousel;
