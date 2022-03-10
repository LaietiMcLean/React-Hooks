import React, { useRef } from 'react'

import '../02-useEffect/effects.css'

export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
      inputRef.current.select();
      console.log(inputRef);
;  }

  return (
    <div>
        <p>Focus Screen</p>
        <input
            ref={inputRef}
            id="btn1"
            className="form-control"
            placeholder="Your name"
        />
        <button 
            className="btn btn-primary"
            onClick={handleClick}
            >
            Focus
        </button>
    </div>
  )
}
