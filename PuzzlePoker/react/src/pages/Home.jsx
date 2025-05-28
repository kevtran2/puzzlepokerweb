// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const features = [
    {
      title: 'Interactive Puzzles',
      description: 'Practice with real poker scenarios and improve your decision-making skills',
      icon: '🎯'
    },
    {
      title: 'Track Progress',
      description: 'Monitor your improvement with detailed statistics and achievements',
      icon: '📈'
    },
    {
      title: 'Learn from Pros',
      description: 'Access expert explanations for every puzzle solution',
      icon: '🏆'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="pt-16 pb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Master Poker Through Interactive Puzzles
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Train like chess players do. Solve real poker situations and improve your game.
          </p>
          <Link
            to="/signin"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Start Training
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 py-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;