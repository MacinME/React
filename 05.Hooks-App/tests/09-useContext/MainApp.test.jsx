import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Test on <MainApp />', () => { 

    test('should display the Login Page', () => { 

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )

        expect( screen.getByText('Login Page') ).toBeTruthy();
    })

    test('should display the about page', () => { 

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        )

        expect(screen.getByText('About Page') ).toBeTruthy();

    })

})