// src/components/PuzzleCard.jsx

function PuzzleCard({ puzzle, onSelect }) {
  const { id, difficulty, category, description } = puzzle;

  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">Puzzle #{id}</h3>
        <span className={`px-2 py-1 rounded-full text-sm font-medium ${difficultyColors[difficulty]}`}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </div>
      <div className="mb-4">
        <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
          {category}
        </span>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <button
        onClick={() => onSelect(puzzle)}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Solve Puzzle
      </button>
    </div>
  );
}

export default PuzzleCard;