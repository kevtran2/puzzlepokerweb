// src/components/Card.jsx
import React from 'react';
import { getSuitSymbol, getSuitColor } from '../utils/cardUtils';

function Card({ suit, rank }) {
  const suitSymbol = getSuitSymbol(suit);
  const textColor = getSuitColor(suit);

  return (
    <div className={`w-12 h-16 bg-white rounded-md border border-gray-300 flex flex-col items-center justify-center ${textColor} shadow-sm`}>
      <div className="text-lg font-bold">{rank}</div>
      <div className="text-xl">{suitSymbol}</div>
    </div>
  );
}

export default Card;