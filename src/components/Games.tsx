// src/pages/Games.tsx
import { useNavigate } from 'react-router-dom';
import './Games.css';

const Games = () => {
  const navigate = useNavigate();

  return (
    <div className="games-container">
      <h2>Play With Love 💞</h2>
      <div className="game-buttons">
        <button className="game-btn" onClick={() => navigate('/games/hangman')}>
          ❤️ Love Hangman
        </button>
        <button className="game-btn" onClick={() => navigate('/games/memory')}>
          🧠 Memory Match
        </button>
      </div>
    </div>
  );
};

export default Games;
