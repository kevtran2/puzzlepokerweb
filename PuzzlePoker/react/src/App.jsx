// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PuzzleView from './pages/PuzzleView';
import Play from './pages/Play';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/puzzles" element={<PuzzleView />} />
            <Route path="/play" element={<Play />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;