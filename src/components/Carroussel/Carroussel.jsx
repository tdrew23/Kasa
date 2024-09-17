import { useState } from "react";
import './Carroussel.css'

function Carrousel({ pictures }) {
  // Crée un état pour suivre l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    if (currentIndex < pictures.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Retourne à la première image si on est à la fin
    }
  };

  // Fonction pour revenir à l'image précédente
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(pictures.length - 1); // Retourne à la dernière image si on est au début
    }
  };

  return (
    <div>
      {/* Affiche l'image courante */}
      <img
        src={pictures[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
      />


        {/* Numérotation des images */}
        <div>
        {currentIndex + 1}/{pictures.length}
      </div>

      {/* Bouton pour aller à l'image précédente */}
      <button onClick={prevImage}>◀</button>

      {/* Bouton pour aller à l'image suivante */}
      <button onClick={nextImage}>▶</button>
    </div>
  );
}

export default Carrousel;
