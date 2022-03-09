import React from 'react'
import { useCounter } from '../hooks/useCounter'

import '../index.css'

export const CounterWithCustomHook = () => {

const {state, increment, decrement} = useCounter();

  return (
    <>
        <p>Counter with Hook: {state}</p>
        <hr />

        <button onClick={increment} className="btn btn-primary">+1</button>
        <button onClick={decrement} className="btn btn-primary">-1</button>
    </>
  )
}
