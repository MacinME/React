import { useCounter, useFetch } from '../hooks';
import { Quote, QuoteLoading } from './';

export const MultipleCustomHook = () => {
    
    const { counter, onIncrease } = useCounter(1);
    const { data, isLoading } = useFetch(`https://dummyjson.com/quotes/${ counter }`);
    const { author, quote } = !!data && data;

  return (
    <>
        <h1>Custom Hook with Fetch API</h1>
        <hr />

        {
            isLoading ? ( <QuoteLoading /> ) : ( <Quote quote={ quote } author={ author } /> )
        }

        <button
            onClick={ () => onIncrease() }
            className='btn btn-primary'
            disabled={ isLoading }
        >
            Next quote
        </button>
    </>
  )
}
