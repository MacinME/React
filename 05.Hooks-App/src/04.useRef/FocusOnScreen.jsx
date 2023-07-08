import { useRef } from 'react';

export const FocusOnScreen = () => {

    const inputRef = useRef();

    const onfocusInput = () => {
        // document.querySelector('input').select();
        // console.log(inputRef);
        inputRef.current.select();
    }

  return (
    <>
        <h1> Focus On Screen </h1>
        <hr />

        <input 
            type="text" 
            placeholder="Focus"
            className="form-control"
            ref={ inputRef }
        />

        <button
            className="btn btn-primary mt-2"
            onClick={ onfocusInput }
        >
            Set Focus
        </button>
    </>
  )
}
