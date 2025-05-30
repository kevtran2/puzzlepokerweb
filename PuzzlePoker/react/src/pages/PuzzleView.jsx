// src/pages/PuzzleView.jsx
import React, { useState, useEffect } from 'react';
import PuzzleGenerator from '../components/PuzzleGenerator';
import Table from '../components/Table';

function PuzzleView() {
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const [puzzles, setPuzzles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Load puzzles from the JSON file
    fetch('/data/puzzles.json')
      .then(response => response.json())
      .then(data => {
        setPuzzles(data.puzzles);
        setCurrentPuzzle(data.puzzles[0]);
      })
      .catch(error => console.error('Error loading puzzles:', error));
  }, []);

  const handleNextPuzzle = () => {
    const nextIndex = (currentIndex + 1) % puzzles.length;
    setCurrentIndex(nextIndex);
    setCurrentPuzzle(puzzles[nextIndex]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Poker Puzzle #{currentPuzzle?.id}</h1>
        <p className="text-gray-600">
          Street: {currentPuzzle?.street.charAt(0).toUpperCase() + currentPuzzle?.street.slice(1)} |
          Difficulty: {'★'.repeat(currentPuzzle?.difficulty || 0)}
        </p>
      </div>
      <Table></Table>
      <PuzzleGenerator
        puzzle={currentPuzzle}
        onSolutionReveal={() => {
          // Wait for a moment before enabling the next puzzle button
          setTimeout(() => {
            const nextButton = document.getElementById('next-puzzle-button');
            if (nextButton) nextButton.disabled = false;
          }, 1000);
        }}
      />

      <div className="mt-6 text-center">
        <button
          id="next-puzzle-button"
          onClick={handleNextPuzzle}
          disabled={!currentPuzzle}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
        >
          Next Puzzle
        </button>
      </div>
    </div>
  );
}

export default PuzzleView;