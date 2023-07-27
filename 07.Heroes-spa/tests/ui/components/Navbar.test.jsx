import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from '../../../src/ui/components/Navbar';
import { AuthContext } from '../../../src/auth/context';
import { MemoryRouter } from 'react-router-dom';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));

describe('Test on <Navbar />', () => { 

    test('should show the user name', () => { 

        const state = {
            logged: true,
            user: {
                id: 1,
                name: "Max Schne"
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ { state } }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect( screen.getByText( state.user.name ) ).toBeTruthy();


    })

    test('should call the logout function and navigate once the button is clicked', () => { 

        const state = {
            logged: true,
            user: {
                id: 1,
                name: "Max Schne"
            }
        }

        const setLogout = jest.fn();

        render(
            <MemoryRouter>
                <AuthContext.Provider value={ { state, setLogout } }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        const logout = screen.getByLabelText('logout');
        expect( logout ).toBeTruthy();
        fireEvent.click( logout );
        expect( setLogout ).toHaveBeenCalled();
        expect( mockedNavigate ).toHaveBeenCalledWith('/login', {
            replace: true
        });


    })

})