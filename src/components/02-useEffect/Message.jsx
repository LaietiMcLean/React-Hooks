import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [coords, setCoords] = useState({x: 0, y: 0});
  const {x, y} = coords;

  useEffect(() => {

    const mouseMove = (e) => {
        const coords = {x: e.x, y: e.y};
        setCoords(coords);
    }
    
    window.addEventListener('mousemove', mouseMove)
  
    return () => {
      console.log('Componente desmontado')
    }
  }, [])  
  
  return (
    <div>
        <p>Si name === '123', se mostrará este mensaje</p>
        <p>Sólo si el párrafo anterior se cumple, veremos las coordenadas del mouse; si deja de cumplirse, dejaremos de verlas:</p>
        <p>x: {x}, y: {y}</p>
    </div>
  )
}
