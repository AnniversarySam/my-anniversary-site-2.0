// src/components/Header.tsx
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-left">
        My Dear 💖
      </Link>
      <nav className="header-right">
        <Link to="/">Our Story</Link>
        <Link to="/photos">Photos</Link>
        <a href="/quiz">Quiz</a>
        <a href="/games">Games</a>
      </nav>
    </header>
  );
};

export default Header;
