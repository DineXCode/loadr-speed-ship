
import React from 'react';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen py-8">
      <header className="bg-blue-600 text-white py-4 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Loader Delivery Service</h1>
        </div>
      </header>
      <main>
        <Home />
      </main>
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Loader Delivery Service. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
