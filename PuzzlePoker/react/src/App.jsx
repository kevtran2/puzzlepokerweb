// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PuzzleView from './pages/PuzzleView';
import Progress from './pages/Progress';
import SignIn from './pages/SignIn';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/puzzles" element={<PuzzleView />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/profile" element={<h1>Profile Page In Progress</h1>} />
              <Route path="/signout" element={<h1>Sign Out Page In Progress</h1>} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;