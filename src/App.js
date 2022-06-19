import './App.css';
import React, { useState, useEffect } from 'react';
import data from './constants/data';
import Line from './Components/Line'
import Finish from './Components/Finish';

function App() {
  const [solution, setSolution] = useState('');
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);


  useEffect(() => {
    const handleType = (event) => {
      if(isGameOver){
        return;
      }

      if (event.key === 'Enter') {
        if (currentGuess.length !== 5 ){
          return ;
        }

        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex(val => val == null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess('');

        const isCorrect = solution === currentGuess;
        if(isCorrect)
        {
          setIsGameOver(true);
        }
      }

      if(event.key === 'Backspace')
      {
        setCurrentGuess(currentGuess.slice(0,-1));
        return;
      }

      if(currentGuess.length >= 5)
      {
        return;
      }

      const isLetter = event.key.match(/^[a-zA-Z]{1}$/) != null ;
      if(isLetter)
      {
        setCurrentGuess(oldGuess =>  oldGuess + (event.key).toUpperCase());
      }
    };

    window.addEventListener('keydown', handleType);
    
    return () => window.removeEventListener('keydown', handleType);
  }, [currentGuess, isGameOver, solution, guesses]);


  useEffect(() => {
    setSolution(data.listWords[Math.floor(Math.random() * data.listWords.length)]);
  }, []);

  return (
    <div className="board">
      {
        guesses.map((guess,i) => {
          const isCurrentGuess = i === guesses.findIndex(val => val == null);
          return(
            <div>
              <Line 
              guess = {isCurrentGuess ? currentGuess : guess ?? ''}
              isFinal = {!isCurrentGuess && guess != null}
              solution = {solution}
              />
              { isGameOver && <Finish />}
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
