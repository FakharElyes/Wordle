import React from 'react'
import './Line.css';



const tryLength = 5;

const Line = ({ guess }) => {
    const tiles = [];
    for (let i= 0; i< tryLength; i++)
    {
        const char = guess[i];
        tiles.push(<div key={i} className='tile'>{char}</div>)
    }

  return (
    <div className='line'>
        {tiles}
    </div>
  )
}

export default Line