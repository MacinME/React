import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {


    const { counter, onIncrease, onDecrease, onReset } = useCounter();

  return (
    <>
        <h1>Counter - Custom Hook: { counter } </h1>
        <hr />

        <button 
            className="btn btn-primary"
            onClick={ () => onIncrease(2) }
        >+1</button>
        <button 
            className="btn btn-primary"
            onClick={ onReset }
        >Reset</button>
        <button 
            className="btn btn-primary"
            onClick={ () => onDecrease(2) }
        >-1</button>

    </>
  )
}
