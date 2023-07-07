import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test on <GifGrid />', () => { 

    const category = 'One Punch';

    test('should initialize with the Loading', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(
            <GifGrid category={ category } />
        )

        expect( screen.getByText('Loading...') );
        expect( screen.getByText( category) );
    })

    test('Should initialize with the gifs', () => {

        const gifs = [
            {
                id: '123',
                title: 'Saitama',
                image: 'https://goImage/saitama.png'
            },
            {
                id: '456',
                title: 'Goku',
                image: 'https://goImage/goku.png'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(
            <GifGrid category={ category } />
        )

        expect( screen.getAllByRole('img').length ).toBeLessThan(3)
    })
})