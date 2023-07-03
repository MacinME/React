import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Test on 08-imp-exp', () => { 

    test('getHeroeById must return a new hero by ID', () => {
        const id= 2;
        const getHero = getHeroeById( id );

        expect( getHero ).toEqual({
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        });
    });
    
    test('getHeroeById must return an undefined if don not exist', () => {
        const id = 100;
        const getHero = getHeroeById( id );

        expect( getHero ).toBeFalsy();
    });

    test('getHeroesByOwner must return DC Heroes', () => {
        // 1. Must return the DC Heros
        const owner = 'DC';
        const getHeros = getHeroesByOwner( owner );

        // 2. Must return the length value
        expect( getHeros.length ).toBe(3);

        // 3. toEqual to the filtered array
        expect( getHeros ).toEqual(     
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        );
    });

    test('getHeroesByOwner must return Marvel Heroes', () => {
        // 1. Must return the DC Heros
        const owner = 'Marvel';
        const getHeros = getHeroesByOwner( owner );
        

        // 2. Must return the length value
        expect( getHeros.length ).toBe(2);

        // 3. toEqual to the filtered array
        expect( getHeros ).toEqual(     
            [
                { id: 2, name: 'Spiderman', owner: 'Marvel' },
                { id: 5, name: 'Wolverine', owner: 'Marvel' }
            ]
        );
    });
 })