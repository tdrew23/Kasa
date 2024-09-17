function Rating({ rating }) {
    const maxStars = 5; // Nombre maximum d'étoiles
  
    // Convertir la note en nombre pour être sûr que c'est un entier
    const ratingValue = parseInt(rating);
  
    // Créer un tableau avec des étoiles pleines et des étoiles vides
    const stars = Array.from({ length: maxStars }, (v, i) => {
      return i < ratingValue ? '★' : '☆'; // '★' pour une étoile pleine, '☆' pour une étoile vide
    });
  
    return (
      <div style={styles.ratingContainer}>
        {stars.map((star, index) => (
          <span key={index} style={styles.star}>
            {star}
          </span>
        ))}
      </div>
    );
  }
  
  const styles = {
    ratingContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: '5px',
    },
    star: {
      fontSize: '24px', // Taille des étoiles
      color: '#FFD700', // Couleur des étoiles (jaune)
    },
  };
  
  export default Rating;
  