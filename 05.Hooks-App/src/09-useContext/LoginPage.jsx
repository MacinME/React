import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    <>
        <h1>Login Page</h1>
        <hr />

        <pre>
          { JSON.stringify( user, null, 5) }
        </pre>

        <button 
          onClick={ () => setUser({id: 12, name: 'Drake', email: 'drake@amazon.mx'}) }
          className='btn btn-primary'
        >
          Set user
        </button>
    </>
  )
}
