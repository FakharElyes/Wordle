import React from 'react'
import './Line.css';



const tryLength = 5;

const Line = ({ guess, isFinal, solution }) => {
    const tiles = [];
    for (let i= 0; i< tryLength; i++)
    {
        const char = guess[i];
        let className ='tile';

        if(isFinal)
        {
            if(char === solution[i])
            {
                className += ' correct';
            }
            else if( solution.includes(char))
            {
                className += ' close';
            }
            else{
                className += ' incorrect';
            }
        }

        tiles.push(<div key={i} className={className}>{char}</div>)
    }

  return (
    <div className='line'>
        {tiles}
    </div>
  )
}

export default Line