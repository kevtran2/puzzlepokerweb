// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PuzzleView from './pages/PuzzleView';
import Progress from './pages/Progress';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/puzzles" element={<PuzzleView />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/profile" element={<div className="p-4">Profile page coming soon</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;