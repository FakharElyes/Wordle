import './App.css';
import React, { useState, useEffect } from 'react';
import data from './constants/data';


const gridWordle = () => {
  let content = [];
  for (var i=0; i< 30 ; i++) {
    let className = "cell cell-" + i;
    content.push(<div className={className} key={i}>{i}</div>);
  }
  return content;
};


function App() {
  const [random, setRandom] = useState(0);


  useEffect(() => {
    setRandom(Math.floor(Math.random() * data.listWords.length));
  }, []);

  return (
    <div className="container">
       {gridWordle()}
    </div>
  );
}

export default App;
