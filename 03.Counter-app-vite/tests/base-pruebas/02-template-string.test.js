import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Test on 02-template-string', () => {
    
    test('getSaludo must have a result like "Hello Macin"', () => {
        const name = 'Macin';
        const greet = getSaludo( name );
        
        expect( greet ).toBe(`Hello ${ name }`)
    })
});