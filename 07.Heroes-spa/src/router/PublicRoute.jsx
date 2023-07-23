import { useContext } from 'react';
import { AuthContext } from '../auth/context';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {

    const { state } = useContext( AuthContext );

  return (state.logged)
    ? <Navigate to="/marvel" />
    : children
}
