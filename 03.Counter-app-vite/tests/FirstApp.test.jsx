import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Test on <FirstApp />', () => { 
    test('Must be match with the snapshot', () => {
        const title = 'Hi I am Goku!';
        const total = 23;
        const { container } = render( <FirstApp title={ title } total={ total }  /> );
        
        expect( container ).toMatchSnapshot();


    });

    test('Must return the title within tag h1', () => {
        const title = 'Hi, I am goku';
        const total = 23;
        const { getByText, getByTestId } = render( 
            <FirstApp 
                title={ title } 
                total={ total }  
            />
        );

        expect( getByText( 529 ) ).toBeTruthy();

        expect( getByTestId('test-title').innerHTML ).toContain(title);

        // const h1 = container.querySelector('h1');
        // expect( h1.textContent ).toContain( title );
        
    })
 })