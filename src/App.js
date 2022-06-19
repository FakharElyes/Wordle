import './App.css';
import React, { useState, useEffect } from 'react';
import data from './constants/data';
import Line from './Components/Line'


const gridWordle = () => {
  let content = [];
  for (var i=0; i< 30 ; i++) {
    let className = "cell cell-" + i;
    content.push(<div className={className} key={i}>{i}</div>);
  }
  return content;
};


function App() {
  const [randomWord, setRandomWord] = useState('');
  const [tries, setTries] = useState(Array(6).fill(null));

  useEffect(() => {
    setRandomWord(data.listWords[Math.floor(Math.random() * data.listWords.length)]);
  }, []);

  return (
    <div className="board">
      {
        tries.map(guess => {
          return(
              <Line guess={guess ?? ''}/>
          );
        })
      }
    </div>
  );
}

export default App;
