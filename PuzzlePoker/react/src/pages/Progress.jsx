// src/pages/Progress.jsx
import React from 'react';
import ProgressBar from '../components/ProgressBar';

function Progress() {
  const progressData = {
    totalPuzzles: {
      completed: 45,
      total: 100,
      label: 'Total Puzzles Completed'
    },
    categories: [
      { label: 'Pre-flop Decisions', completed: 20, total: 30 },
      { label: 'Post-flop Play', completed: 15, total: 40 },
      { label: 'River Situations', completed: 10, total: 30 }
    ],
    recentAccuracy: {
      completed: 38,
      total: 45,
      label: 'Recent Accuracy'
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Progress</h1>
      
      {/* Overall Progress */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Overall Progress</h2>
        <ProgressBar
          completed={progressData.totalPuzzles.completed}
          total={progressData.totalPuzzles.total}
          label={progressData.totalPuzzles.label}
          className="mb-6"
        />
        <ProgressBar
          completed={progressData.recentAccuracy.completed}
          total={progressData.recentAccuracy.total}
          label={progressData.recentAccuracy.label}
        />
      </div>

      {/* Category Progress */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Category Progress</h2>
        <div className="space-y-6">
          {progressData.categories.map((category, index) => (
            <ProgressBar
              key={index}
              completed={category.completed}
              total={category.total}
              label={category.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Progress;