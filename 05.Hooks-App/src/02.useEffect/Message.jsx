import { useEffect, useState } from 'react';

export const Message = () => {

  const [coords, setCoords] = useState({x: 0, y: 0})

    useEffect(() => {

      const onMouseMove = (evt) => {
        const { x, y} = evt;
        setCoords({x, y});
      }
      
      window.addEventListener('mousemove', onMouseMove);
    
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      }
    }, [])
    

  return (
    <>
        <h1>Message</h1>

        <code>{ JSON.stringify( coords ) }</code>
    </>
  )
}
