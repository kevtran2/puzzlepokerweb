// src/components/PuzzleGenerator.jsx
import React, { useState } from 'react';
import Card from './Card';
import { formatBetSize } from '../utils/cardUtils';

function PuzzleGenerator({ puzzle, onSolutionReveal }) {
  const [showSolution, setShowSolution] = useState(false);

  const handleRevealSolution = () => {
    setShowSolution(true);
    onSolutionReveal && onSolutionReveal();
  };

  if (!puzzle) return null;

  const { scenario, solution } = puzzle;
  const { holeCards, communityCards, position, potSize, action, betSizing } = scenario;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Position and Pot Info */}
      <div className="flex justify-between mb-4">
        <div className="text-lg font-semibold">Position: {position}</div>
        <div className="text-lg font-semibold">Pot: {formatBetSize(potSize)} BB</div>
      </div>

      {/* Cards Display */}
      <div className="mb-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Your Hand</h3>
          <div className="flex gap-2">
            {holeCards.map((card, index) => (
              <Card key={index} suit={card.suit} rank={card.rank} />
            ))}
          </div>
        </div>

        {communityCards.length > 0 && (
          <div>
            <h3 className="text-lg font-medium mb-2">Community Cards</h3>
            <div className="flex gap-2">
              {communityCards.map((card, index) => (
                <Card key={index} suit={card.suit} rank={card.rank} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Information */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Situation</h3>
        <p className="text-gray-700">
          Previous action: {action.previousAction} {action.betSize > 0 && `(${formatBetSize(action.betSize)} BB)`}
        </p>
        <p className="text-gray-700">Available bet sizes: {betSizing.recommendedSizes.map(size => `${formatBetSize(size)} BB`).join(', ')}</p>
      </div>

      {/* Solution */}
      {!showSolution ? (
        <button
          onClick={handleRevealSolution}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Reveal Solution
        </button>
      ) : (
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2 text-green-800">Solution</h3>
          <p className="text-green-700 mb-2">Optimal Action: {solution.action}</p>
          <p className="text-green-700">{solution.explanation}</p>
          <div className="mt-4 text-sm text-green-600">
            <p>Equity: {(solution.equityAnalysis.equity * 100).toFixed(1)}%</p>
            <p>Pot Odds: {(solution.equityAnalysis.potOdds * 100).toFixed(1)}%</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PuzzleGenerator;