// src/components/MemoryGame.tsx
import { useEffect, useState } from 'react';
import './MemoryGame.css';

const emojis = ['💖', '🌹', '💌', '💕', '💘', '😘'];
const shuffled = [...emojis, ...emojis].sort(() => Math.random() - 0.5);

type Card = {
  id: number;
  emoji: string;
  flipped: boolean;
  matched: boolean;
};

const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    const initCards = shuffled.map((emoji, index) => ({
      id: index,
      emoji,
      flipped: false,
      matched: false,
    }));
    setCards(initCards);
  }, []);

  const handleFlip = (index: number) => {
    if (selected.length === 2 || cards[index].flipped || cards[index].matched) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);
    const newSelected = [...selected, index];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      const [i1, i2] = newSelected;
      if (cards[i1].emoji === cards[i2].emoji) {
        setTimeout(() => {
          newCards[i1].matched = true;
          newCards[i2].matched = true;
          setCards([...newCards]);
          setSelected([]);
        }, 500);
      } else {
        setTimeout(() => {
          newCards[i1].flipped = false;
          newCards[i2].flipped = false;
          setCards([...newCards]);
          setSelected([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="memory-wrapper">
      <h2>Memory Match 💘</h2>
      <div className="memory-grid">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`memory-card ${card.flipped || card.matched ? 'flipped' : ''}`}
            onClick={() => handleFlip(index)}
          >
            {card.flipped || card.matched ? card.emoji : '❓'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
