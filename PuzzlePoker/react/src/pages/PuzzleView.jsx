// src/pages/PuzzleView.jsx
import { useState, useEffect } from 'react';
import Table from '../components/Table';

function PuzzleView() {
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const [puzzles, setPuzzles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Load puzzles from the JSON file
    fetch('/data/hungryHorseTest1.json')
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
    <div className="text-gray-300 mx-auto max-w-fit px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Poker Puzzle #{currentPuzzle?.id}</h1>
        <p className="text-gray-400">
          Street: {currentPuzzle?.street.charAt(0).toUpperCase() + currentPuzzle?.street.slice(1)} |
          Difficulty:
          <span className="text-yellow-400 ml-1">
            {'★'.repeat(currentPuzzle?.difficulty || 0)}
          </span>
        </p>
      </div>
      <Table
        tablePuzzle={currentPuzzle}
      />
      <div>
        <button className="bg-blue-900 mt-4 rounded-md py-4 px-4 text-lg font-semibold border border-gray-700 hover:bg-blue-800 transition-colors duration-150" onClick={handleNextPuzzle}>
          Next Puzzle
        </button>
      </div>
    </div>
  );
}

export default PuzzleView;