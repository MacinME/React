import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [simpleForm, setSimpleForm] = useState({
        username: 'Macin',
        email: 'macin@google.com'
    })

    const { email, username } = simpleForm;

    const onInputChange = (e) => {
        const { name, value }= e.target;

        setSimpleForm({
            ...simpleForm,
            [name]: value
        })
    }

    useEffect(
        () => {
            // console.log('useEffect called');
        }
    );

  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="username"
            name="username" 
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type="text" 
            className="form-control mt-2" 
            placeholder="email"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        {
            (username === 'Macin2') && <Message />
        }
    
    </>
  )
}
