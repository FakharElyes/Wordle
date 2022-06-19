import React, { useState, useEffect } from 'react';
import './Finish.scss';
import { IoReloadOutline } from "react-icons/io5";


const Finish = ({solution, isTrue}) => {

    function refreshPage() {
        window.location.reload(false);
      }

    let reloadClass = isTrue? "reload" : "wrongReload";
  
    return (
      <div>
        {isTrue ? 
        <div>
            <div className="firework-1"></div>
            <div className="firework-2"></div>
            <div className="firework-3"></div>
            <div className="firework-4"></div>
            <div className="firework-5"></div>
            <div className="firework-6"></div>
            <div className="firework-7"></div>
            <div className="firework-8"></div>
            <div className="firework-9"></div>
            <div className="firework-10"></div>
            <div className="firework-11"></div>
            <div className="firework-12"></div>
            <div className="firework-13"></div>
            <div className="firework-14"></div>
            <div className="firework-15"></div>
            <div className="title">Congratulations 🎉</div>
         </div> : 
         <div className='wrong'>
            Correct word was {solution}
         </div>
        }
        
        <IoReloadOutline onClick={refreshPage} className={reloadClass}/>
      </div>
    );
}

export default Finish