import { useState } from "react";
import './Collapse.css'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false); 

  // Fonction pour basculer l'ouverture/fermeture
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.collapseContainer} className="propos">
      {/* Titre de la section cliquable */}
      <div onClick={toggleCollapse} style={styles.collapseHeader}>
        <h3>{title}</h3>
        <span
          style={{
            ...styles.collapseSpan,
            transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease", 
            transformOrigin: "50% 30%", 

          }}
        >
          ▲
        </span>
      </div>

      {/* Contenu qui s'affiche uniquement si isOpen est vrai */}
      {isOpen && <div style={styles.collapseContent}>{children}</div>}
    </div>
  );
}

const styles = {
  collapseContainer: {
    marginBottom: '10px',
    borderRadius: '5px',
    overflow: 'hidden',
    width : ' 40%',
  },
  collapseHeader: {
    backgroundColor: '#FF6060',
    paddingBottom: '5px',
    paddingLeft: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    color : 'white',
    borderRadius : '10px',
    height : '52px',
  },
  collapseContent: {
    padding: '10px',
    backgroundColor: '#fff',
  },
  collapseSpan :{
    marginTop : '20px',
    marginRight : '5px',
    
  }
};

export default Collapse;
