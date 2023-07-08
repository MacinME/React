import { useState } from 'react';

export const CounterApp = () => {

    const [{ counter1, counter2, counter3 }, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const onIncreaseCounter = () => {
        setCounter( c => ({
            ...c,
            counter1: counter1 + 1
        }));
    }

  return (
    <>
        <h1> Counter: { counter1 }</h1>
        <h1> Counter: { counter2 }</h1>
        <h1> Counter: { counter3 }</h1>

        <hr />

        <button
            onClick={ onIncreaseCounter }
            className="btn btn-primary"
        >
            +1
        </button>
    </>
  )
}
