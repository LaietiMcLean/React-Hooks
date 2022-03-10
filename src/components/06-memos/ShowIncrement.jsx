import React from 'react'

export const ShowIncrement = React.memo(({increment})  => {

  console.log('Me vuelvo a generar');

  return (
    <>
        <button
            className="btn btn-primary"
            onClick={() => {
                increment(5);
            }}
        >
        Increment
        </button>
    </>
  )
})
