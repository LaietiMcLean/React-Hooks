import React from 'react'
import { useFetch } from '../../hooks/useFetch'

import '../02-useEffect/effects.css'

    export const MultipleCustomHooks = () => {

        const {loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);

        return (
            <div> 
                <p>Breaking Bad Quotes</p>

                {loading ? 
                    (
                        <div className='alert alert-info text-center'>
                            Loading... 
                        </div>
                    ) 
                :
                    (
                        <blockquote className='blockquote text-right'>
                            <p className='mb-3'>Hola Mundo</p>
                            <footer className='blockquote-footer'>Footer</footer>
                        </blockquote>

                    )
                }
                
            </div>
        )
    }
