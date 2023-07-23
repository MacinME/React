import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {

  const { setLogin } = useContext( AuthContext );

  const navigate = useNavigate();

  const onLogin = () => {

    setLogin('Max Shchew');

    const lastPath = localStorage.getItem('lastPath') || '/marvel'

    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        onClick={ onLogin }
        className="btn btn-primary"
      >
        Login
      </button>
    </div>
  )
}
