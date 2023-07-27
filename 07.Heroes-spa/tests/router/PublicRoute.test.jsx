import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Test on <PublicRoute />', () => { 

    test('should return the login if it does not logged', () => { 

        const state = { logged: false }

        render(
            <AuthContext.Provider value={ { state } }>
                <PublicRoute>
                    <h1>Login</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Login') ).toBeTruthy()
    })

    test('If the user exists should return the at marvel page', () => { 
        
        const state = { logged: true, user: {id: 2, name: "Max"} }

        render(
            <AuthContext.Provider value={ { state } }>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Login</h1>
                            </PublicRoute>
                        } />

                        <Route path="marvel" element={ <h1> Marvel Page </h1> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Marvel Page') ).toBeTruthy();
    })

})