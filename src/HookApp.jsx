import React from 'react'
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
import { SimpleForm } from './components/02-useEffect/SimpleForm'

export const HookApp = () => {
  return (
    <>
    <h1>Counter with useState:</h1>
    <CounterApp />
    <hr />
    <h1>Counter with custom Hook:</h1>
    <CounterWithCustomHook />
    <h1>Simple Form with useEffect:</h1>
    <SimpleForm />
    <hr />
    <h1>Form with custom Hook:</h1>
    <FormWithCustomHook />
    </>
  )
}
