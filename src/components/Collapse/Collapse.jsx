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
          <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2897 0.789661C11.9591 0.120242 13.0462 0.120242 13.7157 0.789661L23.9979 11.0719C24.6674 11.7414 24.6674 12.8285 23.9979 13.4979C23.3285 14.1673 22.2414 14.1673 21.572 13.4979L12.5 4.42595L3.42804 13.4926C2.75862 14.162 1.67148 14.162 1.00206 13.4926C0.332646 12.8231 0.332646 11.736 1.00206 11.0666L11.2843 0.784306L11.2897 0.789661Z" fill="white"/>
          </svg>

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
