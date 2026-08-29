import { useState } from 'react';
import { gamesData } from '../data/games';
import GameCard from '../components/GameCard';
import '../styles/Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All", ...new Set(gamesData.map(game => game.genre))];

  const filteredGames = gamesData.filter(game => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "All" || game.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="page-container home-page">
      <h1>Discover Games</h1>
      
      <div className="filters">
        <input 
          type="text" 
          placeholder="Search games..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        
        <select 
          value={selectedGenre} 
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="genre-filter"
        >
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <div className="games-grid">
        {filteredGames.length > 0 ? (
          filteredGames.map(game => <GameCard key={game.id} game={game} />)
        ) : (
          <p>No games found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Home;