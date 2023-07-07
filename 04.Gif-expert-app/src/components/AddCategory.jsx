import { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form onSubmit={ onSubmit } aria-label='form'>
        <input 
            type="text" 
            placeholder="Search Gifs"    
            value={ inputValue }
            onChange={ onInputValue }
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}

