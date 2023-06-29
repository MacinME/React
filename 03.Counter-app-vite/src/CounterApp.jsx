import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const handleIncrease = () => setCounter( counter + 1);
    const handleDecrease = () => setCounter( counter - 1);
    const handleReset = () => setCounter( value );

  return (
    <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        <button
            onClick={ handleIncrease }
        >
            +1
        </button>
        
        <button
            onClick={ handleDecrease }
        >
            -1
        </button>
        
        <button
            onClick={ handleReset }
        >
            Reset
        </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}