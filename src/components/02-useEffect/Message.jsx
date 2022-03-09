import React, { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {
    //Effect: Fase de >efecto
    console.log('Componente montado')
  
    return () => {
      //Cleanup: Fase de >limpieza  
      console.log('Componente desmontado')
    }
  }, []) //Input: Fase de >dependencias 
  

  return (
    <div>
        <p>Si name === '123', se mostrará este mensaje</p>
    </div>
  )
}
