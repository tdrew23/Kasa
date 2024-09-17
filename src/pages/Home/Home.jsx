import { listeLogement } from "../../data/listeLogement"
import Card from "../../components/Card/Card"
import './Home.css'
import Banner from "../../components/Banner/Banner.jsx"
import { useNavigate } from "react-router-dom"; // Importer useNavigate



function Home() {
  const navigate = useNavigate(); // Créer une fonction de navigation

  const handleCardClick = (id) => {
    navigate(`/logement/${id}`); // Rediriger vers la page du logement
  };
  


  return (
    <>

    <Banner/>

    <div className="cards-section">
    {listeLogement.slice(0, 6).map((logement) => (
          <div key={logement.id} onClick={() => handleCardClick(logement.id)}>
            <Card title={logement.title} cover={logement.cover} />
          </div>
        ))}
    </div>
    </>
  )
}

export default Home
