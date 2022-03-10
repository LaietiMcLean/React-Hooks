import React from 'react'

import '../02-useEffect/effects.css'

export const FocusScreen = () => {

  const handleClick = () => {
      document.querySelector('#btn1').select();
  }

  return (
    <div>
        <p>Focus Screen</p>
        <input
            id="btn1"
            className="form-control"
            placeholder="Your name"

        />
        <button 
            className="btn btn-outline-primary"
            onClick={handleClick}
            >
            Focus
        </button>
    </div>
  )
}
