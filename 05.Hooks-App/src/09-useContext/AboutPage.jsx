import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const AboutPage = () => {

  const { user } = useContext(UserContext);

  return (
    <>
        <h1>About Page</h1>
        <hr />

        <pre aria-label="pre">
          {  JSON.stringify( user, null, 5 ) }
        </pre>
    </>
  )
}
