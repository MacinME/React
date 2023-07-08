import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const onIncrement = useCallback(
      ( number ) => {
        setCounter( (value) => value + number);
      },
      [],
    )  

    // const onIncrement = () => {
    //     setCounter( counter + 1);
    // }

  return (
    <>
        <h1>useCallback Hook : { counter }</h1>
        <hr />

        <ShowIncrement increment={ onIncrement }/>
    </>
  )
}
