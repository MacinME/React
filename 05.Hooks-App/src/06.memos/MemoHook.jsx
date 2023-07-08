import { useCounter } from '../hooks/useCounter';
import { useMemo, useState } from 'react';

const heavyStuff = ( iterationNumbers = 100) => {
    for(let i =0; i < iterationNumbers; i++){
        console.log('There we go...');
    }

    return `${ iterationNumbers } done!`;
}


export const MemoHook = () => {

    const [first, setFirst] = useState(true);
    const { counter, onIncrease } =useCounter(5000);

    const memorizedValue = useMemo(() => heavyStuff( counter ), [counter]);

  return (
    <>
        <h1> Counter: <small>{ counter }</small> </h1>
        <hr />

        <h4>{ memorizedValue }</h4>

        <button
            className="btn btn-primary"
            onClick={ () => onIncrease() }
        >
            +1
        </button>

        <button
            className='btn btn-outline-primary'
            onClick={ () => setFirst(!first) }
        >
            set Boolean / { JSON.stringify( first ) }
        </button>
    </>
  )
}
