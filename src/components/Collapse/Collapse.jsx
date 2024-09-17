import { useState } from "react";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false); // Gérer l'état ouvert/fermé

  // Fonction pour basculer l'ouverture/fermeture
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.collapseContainer}>
      {/* Titre de la section cliquable */}
      <div onClick={toggleCollapse} style={styles.collapseHeader}>
        <h3>{title}</h3>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>

      {/* Contenu qui s'affiche uniquement si isOpen est vrai */}
      {isOpen && <div style={styles.collapseContent}>{children}</div>}
    </div>
  );
}

const styles = {
  collapseContainer: {
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  collapseHeader: {
    backgroundColor: '#f7f7f7',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  collapseContent: {
    padding: '10px',
    backgroundColor: '#fff',
  },
};

export default Collapse;
