import React, { useState } from 'react'

import '../01-useState/counter.css'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const {counter1, counter2} = counter;

  return (
    <>
        <p>Counter1 {counter1}</p>
        <p>Counter2 {counter2}</p>

        <button 
            className="btn btn-primary"
            onClick={() => {
                setCounter({
                    ...counter,
                    counter1: counter1 +1,
                    })
            }}
        >
            +1
        </button>
    </>
  )
}
