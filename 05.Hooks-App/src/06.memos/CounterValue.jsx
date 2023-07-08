import { memo } from 'react';

export const CounterValue = memo(( { value } ) => {

    console.log('counter value changed');

  return (
    <div> { value } </div>
  )
})
