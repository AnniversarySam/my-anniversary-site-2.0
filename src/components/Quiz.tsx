// src/pages/Quiz.tsx
import { useState } from 'react';
import './Quiz.css';

const questions = [
  {
    question: 'Where did we go on our first trip?',
    options: ['Goa', 'Manali', 'Kerala', 'Jaipur'],
    answer: 'Manali',
  },
  {
    question: 'What is our favorite movie together?',
    options: ['La La Land', 'Interstellar', 'Yeh Jawaani Hai Deewani', 'Dil Chahta Hai'],
    answer: 'Yeh Jawaani Hai Deewani',
  },
  // Add more questions here...
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setSelected('');
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      <h2>How Well Do You Know Us? 💖</h2>

      {showResult ? (
        <div className="quiz-result">
          <p>You scored {score} out of {questions.length}!</p>
        </div>
      ) : (
        <div className="quiz-card">
          <h3>{questions[current].question}</h3>
          <div className="quiz-options">
            {questions[current].options.map((opt) => (
              <button
                key={opt}
                className={`option-btn ${selected === opt ? 'selected' : ''}`}
                onClick={() => setSelected(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          <button
            className="next-btn"
            onClick={handleNext}
            disabled={!selected}
          >
            {current === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
