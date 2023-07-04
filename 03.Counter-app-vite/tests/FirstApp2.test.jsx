import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Test on <FirstApp2 />', () => { 

    const title = 'Hi, I am Goku';
    const total = 23

    test('Must match with snapshot', () => {
        const { container } = render(
            <FirstApp 
                title={ title }
                total={ total }
            />
        )

        expect( container ).toMatchSnapshot();
    });

    test('Must display the message of title', () => {
        render(
            <FirstApp 
                title={ title }
                total={ total }
            />
        )
        expect( screen.getByText( title ).innerHTML ).toContain('Hi, I am Goku');
        // screen.debug()
    })

    test('Must display the title within h1 tag', () => {
        render(
            <FirstApp 
                title={ title }
                total={ total }
            />
        )
        
        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain( title );
        // screen.debug();
    })

    test('Must display the total sent by props at render', () => {
        render(
            <FirstApp 
                title={ title }
                total={ total }
            />
        )
        
        expect( screen.getAllByText( 529 ).length ).toBe(2)
    
    })
 })