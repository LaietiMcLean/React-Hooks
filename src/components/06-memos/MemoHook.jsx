import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../02-useEffect/effects.css';

export const MemoHook = () => {

  const {counter, increment} = useCounter(100);
  const [show, setShow] = useState(true)

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
  //Syntax: useMemo(() => callback, [inputNewResult])

  return (
    <>
        <p>We tell React not to process everything but those elements that have changed</p> 
        <p className="text-warning"> Counter: {counter} </p>

        <p>{memoProcesoPesado}</p>

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
