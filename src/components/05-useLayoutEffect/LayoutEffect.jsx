import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import './layoutEffect.css'

    export const LayoutEffect = () => {

        const {counter, increment} = useCounter(1)
        const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
        const {quote} = !!data && data[0]

        const pTag = useRef();

        useLayoutEffect(() => {
            console.log(pTag.current.getBoundingClientRect())
        }, [quote])

        return (
            <div> 
            <p>Useful Hook to make box measurements once the DOM is rendered</p>
            <p>Open the console to see the layoutEffect</p>
                <blockquote className='blockquote1 text-right'>
                    <p 
                        className='mb-0 text-warning'
                        ref={pTag}
                    >{quote}</p>
                </blockquote> 
                <button 
                    className='btn btn-primary'
                    onClick={increment}
                >
                    Next quote
                </button>
            </div>
        )
    }
