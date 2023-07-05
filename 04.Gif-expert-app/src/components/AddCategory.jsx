import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputValue = (evt) => {
        setInputValue(evt.target.value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        if(inputValue.trim().length <= 1 ) return;
        onNewCategory( inputValue );
        // setCategories((values) => [...values, inputValue]);
        setInputValue('')
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Search Gifs"    
            value={ inputValue }
            onChange={ onInputValue }
        />
    </form>
  )
}
