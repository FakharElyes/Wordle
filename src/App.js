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
  const [isTrue, setIsTrue] = useState(false);

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
        if(isCorrect || guesses[4] != null)
        {
          setIsGameOver(true);
          setIsTrue(isCorrect);
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
    <div className='wordle'>
      <div className='instructions'>
        <h1 className='instruction-title'>Instructions</h1>
        <p className='instruction'>1-after you type in a word with 5 letters you press 'enter' to register it</p>
        <p className='instruction'>2-if a letter is colored <b>yellow</b> that means that it exists in the word but not in the correct place</p>
        <p className='instruction'>3-if the letter is colored <b>green</b> then it is in the right place</p>
        <p className='instruction'>4-if the letter is colored <b>gray</b> then it doesnt exist in the word</p>
      </div>
      <div className="board">
        {
          guesses.map((guess,i) => {
            const isCurrentGuess = i === guesses.findIndex(val => val == null);
            return(
                <Line 
                guess = {isCurrentGuess ? currentGuess : guess ?? ''}
                isFinal = {!isCurrentGuess && guess != null}
                solution = {solution}
                />
            );
          })
        }
          { isGameOver && <Finish solution={solution} isTrue={isTrue}/>}
      </div>
    </div>
    
  );
}

export default App;
