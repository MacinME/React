import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../../types/types';
import { useNavigate } from 'react-router-dom';

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );

  return {
    logged: !!user,
    user: user
  }
}

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer( authReducer, {}, init );

    const setLogin = ( name = '') => {

      const user = { id: 123, name}

      const action = {
        type: types.login,
        payload: user
      }

      localStorage.setItem('user', JSON.stringify( user ));

      dispatch( action );

    }

    const setLogout = () => {
      localStorage.removeItem('user');

      const action = {
        type: types.logout,
      }

      dispatch( action );

    }

  return (
    <AuthContext.Provider value={{ state, setLogin, setLogout }}>
        { children }
    </AuthContext.Provider>    
  )
}
