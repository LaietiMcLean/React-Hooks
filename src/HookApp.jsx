import React from 'react'
import { CounterApp } from './components/CounterApp'
import { CounterWithCustomHook } from './components/CounterWithCustomHook'

export const HookApp = () => {
  return (
    <>
    <h1>Counter with useState:</h1>
    <CounterApp />
    <hr />
    <h1>Counter with custom Hook:</h1>
    <CounterWithCustomHook />
    </>
  )
}
