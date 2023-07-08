import { CounterValue } from './CounterValue';
import { useCounter } from '../hooks/useCounter';
import { useState } from 'react';

export const Memorize = () => {

    const [first, setFirst] = useState(true);
    const { counter, onIncrease } =useCounter(10);

  return (
    <>
        <h1> Counter: <CounterValue value={ counter }  /> </h1>
        <hr />

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
