import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [favCount, setFavCount] = useState(0);

  // Update count whenever storage changes
  useEffect(() => {
    const updateCount = () => {
      const saved = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavCount(saved.length);
    };
    updateCount();
    window.addEventListener('storage', updateCount);
    // Custom event to trigger re-render on same window
    window.addEventListener('favoritesUpdated', updateCount);
    return () => {
      window.removeEventListener('storage', updateCount);
      window.removeEventListener('favoritesUpdated', updateCount);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">🎮 GameVerse</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites ({favCount})</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;