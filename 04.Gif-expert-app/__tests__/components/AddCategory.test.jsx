
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Test on <AddCategory />', () => { 
    test('Should change the value of textbox', () => { 

        render(
            <AddCategory onNewCategory={ () => {} } />
        )

        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: "Saitama" } });

        expect( input.value ).toBe("Saitama");
    })

    test('Should call the onNewCategory function if the input has a value', () => { 
        const newValue = "Goku";

        // Mock Funtion
        const onNewCategory = jest.fn();

        render(
            <AddCategory onNewCategory={ onNewCategory } />
        )

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: newValue } } );
        fireEvent.submit( form );
        expect( input.value ).toBe('');
        
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( newValue );
    })

    test('Should not call the onNewCategory function if the input value is empty', () => {
        
        const onNewCategory = jest.fn();

        render(
            <AddCategory onNewCategory={ onNewCategory } />
        )

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, { target: { value: "a"} });
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
    });
})