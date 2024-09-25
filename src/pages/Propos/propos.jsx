import Collapse from "../../components/Collapse/Collapse";
import './Propos.css'

function Propos(){
    
        return (
          <>

          <div className="img-propos">

          </div>

          
            <div className="propos-container">

            {/* Boucler , pusher ds un collapse */}
        
              {/* Premier Collapse */}
              <Collapse title="Fiabilité" className="propos">
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale...</p>
              </Collapse>
        
              {/* Deuxième Collapse */}
              <Collapse title="Respect" className = "propos">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
              </Collapse>
        
              {/* Troisième Collapse */}
              <Collapse title="Service" className = "propos">
                <p>Nos équipes sont à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
              </Collapse>
        
              {/* Quatrième Collapse */}
              <Collapse title="Responsabilité" >
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.</p>
              </Collapse>
            </div>

          

            </>
          );

        }
        
export default Propos