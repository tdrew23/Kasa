import { useParams } from "react-router-dom";
import { listeLogement } from "../../data/listeLogement";
import Carrousel from "../../components/Carroussel/Carroussel";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";
import './Logement.css'

function Logement(){

    const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
    const logement = listeLogement.find((item) => item.id === id);

    if (!logement) {
        return <h2>Logement non trouvé</h2>;
      }
    return(

      <div className="logement-container">
       <Carrousel pictures={logement.pictures} />

      <div className="main-info">

      <article>
      
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>

       {/* Section pour afficher les tags */}
       <div className="tagsContainer">
        {logement.tags.map((tag, index) => (
          <span key={index} style={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      </article>

    <article>

           {/* profil */}
    <div className="profil">
    <p>{logement.host.name}</p>
    <img src={logement.host.picture}></img>
    </div>

     <div style={{ marginTop: '20px' }}>
        <Rating rating={logement.rating} />
      </div>

      </article>

    </div>
    
      {/* Collapse pour la description */}
      <Collapse title="Description">
        <p>{logement.description}</p>
      </Collapse>

      {/* Collapse pour les équipements */}
      <Collapse title="Équipements">
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </Collapse>

      </div>
    )
}


const styles = {

  tag: {
    backgroundColor: '#F7F7F7',
    padding: '5px 10px',
    borderRadius: '15px',
    color: '#333',
    fontSize: '14px',
    border: '1px solid #ddd',
  },
};


export default Logement