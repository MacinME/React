import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Test on useCounter Hook', () => { 
    
    test('must return the defaults values', () => {

        const { result } = renderHook( () => useCounter());
        const { counter, onDecrease, onIncrease, onReset } = result.current;

        expect( counter ).toBe(10);
        expect( onDecrease ).toEqual( expect.any( Function ) );
        expect( onIncrease ).toEqual( expect.any( Function ) );
        expect( onReset ).toEqual( expect.any( Function ) );
    })

    test('should return the 100 of the counter value', () => {
        const { result } = renderHook( () => useCounter(100));
        const { counter } =result.current;
        expect( counter ).toBe(100);
    })
    
    test('must increase the value counter', () => {
        const { result } = renderHook( () => useCounter(100));
        const { counter, onIncrease } = result.current;

        act(() => {
            onIncrease(5);
            onIncrease(1);
        })

        expect( result.current.counter ).toBe(106);

    })
        
    test('must decrease the value counter', () => {
        const { result } = renderHook( () => useCounter(100));
        const { counter, onDecrease } = result.current;

        act(() => {
            onDecrease(5);
            onDecrease(1);
        })

        expect( result.current.counter ).toBe(94);

    })

    test('reseting the value counter', () => {
        const { result } = renderHook( () => useCounter(100));
        const { onDecrease, onReset } = result.current;

        act(() => {
            onDecrease(5);
            onReset();
        })

        expect( result.current.counter ).toBe(100);

    })
})