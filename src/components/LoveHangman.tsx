import { useState } from 'react';
import './LoveHangman.css';

const words = [
  'ARGO',
  'SPOTLIGHT',
  'MOONLIGHT',
  'PARASITE',
  'NOMADLAND',
  'CODA',
  'OPPENHEIMER',
  'STAY',
  'HELLO',
  'BADGUY',
];

const LoveHangman = () => {
  const [word] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const maxMistakes = 5;

  const handleGuess = (letter: string) => {
    if (guesses.includes(letter)) return;

    setGuesses(prev => [...prev, letter]);

    if (!word.includes(letter)) {
      setMistakes(prev => prev + 1);
    }
  };

  const restartGame = () => {
    window.location.reload();
  };

  const isWinner = word.split('').every(l => guesses.includes(l));
  const isGameOver = mistakes >= maxMistakes;

  return (
    <div className="hangman-container">
      <h2>Guess the Word, you have {maxMistakes - mistakes} lives</h2>

      <div className="word-display">
        {word.split('').map((letter, i) => (
          <span key={i} className="letter">
            {guesses.includes(letter) || isGameOver ? letter : '_'}
          </span>
        ))}
      </div>

      <div className="letter-buttons">
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
          <button
            key={letter}
            onClick={() => handleGuess(letter)}
            disabled={guesses.includes(letter) || isWinner || isGameOver}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="status-message">
        {isWinner && <p className="win">You guessed it! 💖</p>}
        {isGameOver && <p className="lose">Oops! The word was <strong>{word}</strong> 😢</p>}
      </div>

      <button className="restart-btn" onClick={restartGame}>Try Again</button>
    </div>
  );
};

export default LoveHangman;
