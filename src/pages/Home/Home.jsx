import { listeLogement } from "../../data/listeLogement"
import Card from "../../components/Card/Card"
import './Home.css'
import Banner from "../../components/Banner/Banner.jsx"
import { useNavigate } from "react-router-dom"; // Importer useNavigate
import  { useState, useEffect } from 'react';




function Home() {
  const navigate = useNavigate(); // Créer une fonction de navigation

  const handleCardClick = (id) => {
    navigate(`/logement/${id}`); // Rediriger vers la page du logement
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Écoute le redimensionnement de la fenêtre pour changer l'état mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  // Filtrer le nombre de cartes en fonction de l'état mobile ou desktop
  const logementsAffiches = isMobile ? listeLogement : listeLogement;
  


  return (
    <>

    <Banner/>



    <div className="cards-section">
    {logementsAffiches.map((logement) => (
          <div key={logement.id} onClick={() => handleCardClick(logement.id)}>
            <Card title={logement.title} cover={logement.cover} />
          </div>
        ))}
    </div>
    </>
  )
}

export default Home
