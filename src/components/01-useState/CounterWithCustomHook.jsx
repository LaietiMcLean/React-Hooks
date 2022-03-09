import React from 'react'
import { useCounter } from '../../hooks/useCounter'


export const CounterWithCustomHook = () => {

const {reset, state, increment, decrement} = useCounter(10);

  return (
    <>
        <p>Counter with Hook: {state}</p>

        <button onClick={() => increment(2)} className="btn btn-primary">+1</button>
        <button onClick={reset} className="btn btn-primary">Reset</button>
        <button onClick={() => decrement(2)} className="btn btn-primary">-1</button>
        <hr />
    </>
  )
}
