import { fireEvent, render, screen} from '@testing-library/react';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';
import { MemoryRouter } from 'react-router-dom';

const mockedFunction = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedFunction
}))

describe('Test on <SearchPage />', () => { 

    
    test('should display the default state', () => { 

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        expect( container ).toMatchSnapshot();

    })

    test('should return the SpiderMan hero card', () => { 


        render(
            <MemoryRouter initialEntries={['/search?q=spider']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('spider');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/marvel-spider.jpg');

        const alert = screen.getByLabelText('alert');
        expect( alert.style.display ).toContain("none");

    })

    test('should return error when hero does not exist', () => { 


        render(
            <MemoryRouter initialEntries={['/search?q=spiderman']}>
                <SearchPage />
            </MemoryRouter>
        )

        const alert = screen.getByLabelText('alert');
        expect( alert.style.display ).not.toBe("none");

    })

    test('should call the navigate custom hook when the form is hit', () => { 

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { name: "searchHero", value: "spiderman" } } );

        const form = screen.getByLabelText('form');
        fireEvent.submit( form );
        expect( mockedFunction ).toHaveBeenCalledWith("?q=spiderman");


    })

})