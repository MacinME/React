import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context';

export const PrivateRoute = ({ children }) => {

    const { state } = useContext( AuthContext );

    const { pathname, search } = useLocation();
    localStorage.setItem('lastPath', pathname + search);

  return (state.logged)
    ? children 
    : <Navigate to="/login" />

}
