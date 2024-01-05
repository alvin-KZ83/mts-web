// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
// import Chatbot from './components/Chatbot';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="products">
        <Products />
      </div>
      {/* Add more sections with unique IDs as needed */}
    </div>
  );
}

export default App;
