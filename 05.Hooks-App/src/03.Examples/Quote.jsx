import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author}) => {

  const contentRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0
  })

  useLayoutEffect(() => {
    const { width, height } = contentRef.current.getBoundingClientRect();
    setBoxSize({
      width, height
    })
  }, [quote])

  return (
    <>
      <blockquote 
        className='blockquote text-end'
        style={ { display: 'flex' } }
      >
          <p ref={ contentRef } className='mb-1'>{ quote }</p>
          <footer className='blockquote-footer'> { author } </footer>
      </blockquote>
      <code>{ JSON.stringify( boxSize) }</code>
    </>
  )
}
