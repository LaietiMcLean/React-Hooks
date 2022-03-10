import React from 'react'
import { useFetch } from '../../hooks/useFetch'

import '../02-useEffect/effects.css'

    export const MultipleCustomHooks = () => {

        const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
        const {author, quote} = !!data && data[0]
        console.log(author, quote);
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
                            <p className='mb-3'>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>
                    )
                } 
            </div>
        )
    }
