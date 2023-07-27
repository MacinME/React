import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth/context';
import { AppRouter } from '../../src/router/AppRouter';

describe('Test on <AppRouter />', () => { 

    test('should display the login page if it does not exist', () => { 

        const state = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={{ state }}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

    })

    test('Must display the marvel page if the user exists', () => { 

        const state = {
            logged: true,
            user: {
                id: 1, 
                name: "Macin"
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={{ state }}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        const cards = screen.getAllByLabelText('heroCard');
        expect( screen.getByText(state.user.name) ).toBeTruthy();
        expect( cards.length ).toBeGreaterThan(0);


    })

})