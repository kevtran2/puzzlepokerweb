// src/utils/cardUtils.js
export const getSuitSymbol = (suit) => {
  const symbols = {
    hearts: '♥',
    diamonds: '♦',
    clubs: '♣',
    spades: '♠'
  };
  return symbols[suit.toLowerCase()] || suit;
};

export const getSuitColor = (suit) => {
  return ['hearts', 'diamonds'].includes(suit.toLowerCase())
    ? 'text-red-600'
    : 'text-gray-900';
};

export const formatBetSize = (size) => {
  return typeof size === 'number' ? size.toString() : size;
};