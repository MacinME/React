import { act, fireEvent, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm";

describe('Test on useForm Hook', () => {

    const initialForm = {
        name: 'Max',
        email: 'maxo@google.com'    
    }

    test('Should return the default values', () => { 
        const { result } = renderHook( () => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            simpleForm: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        })
    })

    test('Should change the form name', () => {

        const newValue = {
            target: {
                name: 'name',
                value: 'Drake'
            }
        }

        const { result } = renderHook( () => useForm(initialForm));
        const { onInputChange } = result.current;

       act( () => {
        onInputChange( newValue );
       })

        expect( result.current.name ).toBe( newValue.target.value );
        expect( result.current.simpleForm.name ).toBe( 'Drake' );
    })

    test('Should reset the form state', () => {

        const newValue = {
            target: {
                name: 'name',
                value: 'Drake'
            }
        }

        const { result } = renderHook( () => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

       act( () => {
        onInputChange( newValue );
        onResetForm();
       })

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.simpleForm.name ).toBe( initialForm.name );
    })
})