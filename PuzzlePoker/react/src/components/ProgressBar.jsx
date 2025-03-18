// src/components/ProgressBar.jsx
import React from 'react';

function ProgressBar({ completed, total, label, className }) {
  const percentage = Math.round((completed / total) * 100);
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-700">{`${completed}/${total}`}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;