import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

import '../02-useEffect/effects.css'

export const Memorize = () => {

  const {counter, increment} = useCounter(10);
  const [show, setShow] = useState(true)

  return (
    <>
        <p>React redraws our component every time we do changes in the State</p>
        <p>If we want to prevent this behavior, we use React.memo</p>
        <p>We ask React not to do changes if the properties of the component are the same</p>
        
        <p className="text-warning">Counter: <Small value={counter} /> </p>

        <button
            className="btn btn-primary"
            onClick={increment}
        >
        +1
        </button>
        <button
            className="btn btn-outline-primary ml-3"
            onClick={() => {
                setShow(!show);
            }}
        >
        Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )

}
