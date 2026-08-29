import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/GameCard.css';

const GameCard = ({ game }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const placeholderImg = "https://via.placeholder.com/300x200?text=Image+Not+Found";

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(fav => fav.id === game.id));
  }, [game.id]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (isFavorite) {
      favorites = favorites.filter(fav => fav.id !== game.id);
    } else {
      favorites.push(game);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
    window.dispatchEvent(new Event('favoritesUpdated')); // Updates Navbar
  };

  return (
    <div className="game-card">
      <img 
        src={game.image} 
        alt={game.name} 
        onError={(e) => { e.target.src = placeholderImg; }} 
        className="game-image"
      />
      <div className="game-info">
        <h3>{game.name}</h3>
        <p className="genre-tag">{game.genre}</p>
        <div className="card-actions">
          <Link to={`/game/${game.id}`} className="btn-details">View Details</Link>
          <button onClick={toggleFavorite} className={`btn-fav ${isFavorite ? 'active' : ''}`}>
            {isFavorite ? '❤️ Remove' : '🤍 Add to Fav'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;