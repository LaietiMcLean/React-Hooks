import React from 'react'
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
import { SimpleForm } from './components/02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks'
import { FocusScreen } from './components/04-useRef/FocusScreen'
import { RealExampleRef } from './components/04-useRef/RealExampleRef'
import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect'
import { CallbackHook } from './components/06-memos/CallbackHook'
import { MemoHook } from './components/06-memos/MemoHook'
import { Memorize } from './components/06-memos/Memorize'

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
    <hr />
    <h1>HTTP request with useFetch</h1>
    <MultipleCustomHooks />
    <hr />
    <h1>Focus Screen with useRef</h1>
    <FocusScreen />
    <hr />
    <h1>useRef: real example</h1>
    <RealExampleRef />
    <hr />
    <h1>useLayoutEffect</h1>
    <LayoutEffect />
    <hr />
    <h1>Memorize - React.memo()</h1>
    <Memorize />
    <hr />
    <h1>MemoHook - useMemo</h1>
    <MemoHook />
    <hr />
    <h1>useCallback Hook</h1>
    <CallbackHook />
    </>
  )
}
