import { render, screen } from '@testing-library/react';
import { AboutPage } from '../../src/09-useContext/AboutPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Test on <AboutPage />', () => { 

    const user = {
        id: 1,
        name: 'Drake'
    }

    test('should display the component without user', () => { 

        render(
            <UserContext.Provider value={{ user: null}}>
                <AboutPage />
            </UserContext.Provider>
        )

        const pre = screen.getByLabelText('pre');
        expect( pre.innerHTML ).toBe('null')

    })

    test('should display the component with user', () => { 

        render(
            <UserContext.Provider value={{ user }}>
                <AboutPage />
            </UserContext.Provider>
        )

        const pre = screen.getByLabelText('pre');
        expect( JSON.parse( pre.innerHTML ) ).toEqual( user );

        screen.debug();

    })

})