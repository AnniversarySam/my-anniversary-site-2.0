// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Header from '../src/components/header.tsx';
import Home from '../src/components/home.tsx';
import Photos from "../src/components/Photos.tsx";
import Quiz from "../src/components/Quiz.tsx";
import Games from "../src/components/Games.tsx";
import LoveHangman from "../src/components/LoveHangman.tsx";
import MemoryPage from "../src/components/MemoryPage.tsx";
function App() {
 return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/hangman" element={<LoveHangman />} />
        <Route path="/games/memory" element={<MemoryPage />} />

      </Routes>
    </>
  );
}

export default App;
