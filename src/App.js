import './App.css';
import React, { useState, useEffect } from 'react';
import data from './constants/data';

function App() {
  const [random, setRandom] = useState(0);


  useEffect(() => {
    setRandom(Math.floor(Math.random() * data.listWords.length));
  }, []);

  console.log(random);


  return (
    <div className="grid-container">
      <div className="grid-item">1</div>
      <div className="grid-item">2</div>
      <div className="grid-item">3</div>
      <div className="grid-item">4</div>
      <div className="grid-item">5</div>
      <div className="grid-item">6</div>
      <div className="grid-item">7</div>
      <div className="grid-item">8</div>
      <div className="grid-item">9</div>
    </div>
  );
}

export default App;
