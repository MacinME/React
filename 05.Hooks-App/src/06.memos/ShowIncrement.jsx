import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('button component');
  return (
    <button
        className="btn btn-primary"
        onClick={ () => {
            increment( 10 );
        }}
    >
        Increment
    </button>
  )
})
