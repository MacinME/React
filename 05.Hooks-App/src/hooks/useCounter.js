import { useState } from 'react';

export const useCounter = ( initialValue = 10) => {

    const [counter, setCounter] = useState( initialValue );

    const onIncrease = (value = 1) => {
        setCounter( (cValue) => cValue + value);
    }

    const onDecrease = (value = 1) => {
        setCounter( (cValue) => cValue - value);
    }

    const onReset = () => {
        setCounter( initialValue );
    }

  return {
    counter,
    onIncrease,
    onDecrease,
    onReset
  }
}
