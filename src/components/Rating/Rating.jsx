function Rating({ rating }) {
    const maxStars = 5;
  
    const ratingValue = parseInt(rating);
  
    //  tableau avec des étoiles pleines et des étoiles vides
    const stars = Array.from({ length: maxStars }, (v, i) => {
      return i < ratingValue ? '★' : '☆'; // 
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
      fontSize: '24px', 
      color: '#FF6060',
    },
  };
  
  export default Rating;
  