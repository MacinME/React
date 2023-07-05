import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem';

describe('Test on <GifItem />', () => { 

    const title = "One Punch";
    const image = "https://onepunch/saitama.png";

    test('Must match with snapshot', () => { 
        const { container } = render(
            <GifItem title={ title} image={ image } />
        )    
        
        expect( container ).toMatchSnapshot();
    })

    test('Must display the image with indicated url', () => {
        render(
            <GifItem title={ title } image={ image } />
        );

        // expect(screen.getByRole('img').src ).toBe( image );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const { src, alt} = screen.getByRole('img');
        expect( src ).toBe( image );
        expect( alt ).toBe( title );
    })

    test('Must display the title in the component', () => {
        render(
            <GifItem title={ title } image={ image } />
        );

        expect( screen.getByText( title ) ).toBeTruthy();
    })
 })