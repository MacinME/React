import { render, screen } from '@testing-library/react';
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { AuthContext } from '../../src/auth/context';
import { MemoryRouter } from 'react-router-dom';

describe('Test on <PrivateRoute />', () => { 

    test('should call the localstorage method', () => { 

        const state = { logged: true, user: { id: 1, name: "Max" } }

        Storage.prototype.setItem = jest.fn();

        render(
            <AuthContext.Provider value={ { state } }>
                <MemoryRouter initialEntries={['/search?q=spiderman']}>
                    <PrivateRoute>
                        <h1>Marvel Page</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( localStorage.setItem ).toHaveBeenCalled();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/search?q=spiderman");

    })

})