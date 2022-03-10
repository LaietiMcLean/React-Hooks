import React from 'react'

export const Small = React.memo(({value}) => {

  console.log('Me he vuelto a llamar')

  return (
    <small>
        {value}
    </small>
  )
})
