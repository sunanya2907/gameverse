import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { gamesData } from '../data/games';
import '../styles/GameDetails.css';

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const placeholderImg = "https://via.placeholder.com/800x400?text=Image+Not+Found";

  useEffect(() => {
    const foundGame = gamesData.find(g => g.id === id);
    setGame(foundGame);
  }, [id]);

  if (!game) return <div className="page-container"><h2>Loading Game Details...</h2></div>;

  return (
    <div className="page-container details-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      <div className="details-card">
        <img 
          src={game.image} 
          alt={game.name} 
          onError={(e) => { e.target.src = placeholderImg; }}
          className="details-image"
        />
        <div className="details-content">
          <h1>{game.name}</h1>
          <span className="genre-badge">{game.genre}</span>
          <p className="description">{game.description}</p>
          <a href={game.website} target="_blank" rel="noopener noreferrer" className="btn-website">
            Visit Official Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;