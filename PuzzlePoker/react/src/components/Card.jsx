// src/components/Card.jsx
import React from 'react';
import { getSuitSymbol, getSuitColor } from '../utils/cardUtils';

function Card({ suit, rank }) {
  const suitSymbol = getSuitSymbol(suit);
  const textColor = getSuitColor(suit);

  if (suitSymbol == "" || rank == "") {
    return (
      <div
        className="w-12 h-16 rounded-md border-2 border-white flex flex-col items-center justify-center shadow-sm"
        style={{
          backgroundColor: '#1e3a8a',
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0 2px, transparent 2px 8px)'
        }}
      >
        <div className="text-lg font-bold"></div>
        <div className="text-xl"></div>
      </div>
    );
  } else {
    return (
      <div className={`w-12 h-16 bg-white rounded-md border border-gray-300 flex flex-col items-center justify-center ${textColor} shadow-sm`}>
        <div className="text-lg font-bold">{rank}</div>
        <div className="text-xl">{suitSymbol}</div>
      </div>
    );
  }

}

export default Card;