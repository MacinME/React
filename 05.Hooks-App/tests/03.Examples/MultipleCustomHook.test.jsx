import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../src/03.Examples';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Test on <MultipleCustomHook />', () => { 

    let incriment = jest.fn();
        
    useCounter.mockReturnValue({
        counter: 1,
        onIncrease: incriment,
        onDecrease: jest.fn(),
        onReset: jest.fn()
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should display the inital state', () => { 


        useFetch.mockReturnValue({
            datas: null,
            isLoading: true
        })

        render(
            <MultipleCustomHook />
        )

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        
        expect( screen.getByText('Loading...') ).toBeTruthy();
        expect( screen.getByText('Breaking Quotes')).toBeTruthy();
        expect( nextButton.disabled ).toBeTruthy();

        // screen.debug();
        
    })
    
    test('should display quote', () => { 

        useFetch.mockReturnValue({
            data: { author: 'Macin', quote: 'Can you start something on your own if you want'},
            isLoading: false
        })

        render(
            <MultipleCustomHook />
        )

        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        expect( screen.getByText('Can you start something on your own if you want') ).toBeTruthy();
        expect( screen.getByText('Macin') ).toBeTruthy();
        expect( nextButton.disabled ).toBeFalsy();


    })

    test('should calla the onIncrease Function', () => { 

        useFetch.mockReturnValue({
            data: { author: 'Macin', quote: 'Can you start something on your own if you want'},
            isLoading: false
        })

        render(
            <MultipleCustomHook />
        )

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click( nextButton );
        expect( incriment ).toHaveBeenCalled();

    })
})