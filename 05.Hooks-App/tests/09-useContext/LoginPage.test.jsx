import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Test on <LoginPage />', () => { 

    test('should display the component without user', () => { 

        render(
            <UserContext.Provider value={{ user: null }} >
                <LoginPage />
            </UserContext.Provider>
        )
        
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
    })

    test('should call the setUser function with the user when the button be clicked', () => { 

        const setUser = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser }} >
                <LoginPage />
            </UserContext.Provider>
        )

        const button = screen.getByRole('button');
        fireEvent.click( button );

        expect( setUser ).toHaveBeenCalled();
        expect( setUser ).toHaveBeenCalledWith({id: 12, name: 'Drake', email: 'drake@amazon.mx'})
        screen.debug();

    })

})