import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Test on <CounterApp />', () => { 

    const value = 100;

    test('Must match with snapshot', () => {
        
        const { container } = render(
            <CounterApp 
                value={ value }
            />
        )
        expect( container ).toMatchSnapshot();
    })

    test('Must display the value 100', () => {
        render(
            <CounterApp 
                value={ value }
            />
        )
        expect( screen.getByText( value ).innerHTML ).toBe( value.toString() );
    });

    test('Must increase the value with button +1 element', () => {
        render(
            <CounterApp 
                value={ value }
            />
        )
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText(101) ).toBeTruthy();

    })

    test('Must decrease the value with button -1 element', () => {
        render(
            <CounterApp 
                value={ value }
            />
        )
        fireEvent.click( screen.getByText('-1') );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText(98) ).toBeTruthy();

    })

    test('Must return the reset button', () => {
        render(
            <CounterApp 
                value={ value }
            />
        )
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}));

        expect( screen.getByText(value) ).toBeTruthy();
        
        screen.debug();

    })
 })