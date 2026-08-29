import { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';
import '../styles/Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
    window.addEventListener('favoritesUpdated', loadFavorites);
    return () => window.removeEventListener('favoritesUpdated', loadFavorites);
  }, []);

  const loadFavorites = () => {
    const saved = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(saved);
  };

  return (
    <div className="page-container">
      <h1>My Favorite Games</h1>
      {favorites.length === 0 ? (
        <div className="empty-state">
          <h2>No favorites yet!</h2>
          <p>Go to the Home page to discover and add some games.</p>
        </div>
      ) : (
        <div className="games-grid">
          {favorites.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;