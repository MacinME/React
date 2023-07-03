import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Test on 09-promesas', () => { 

    test('getHeroeByIdAsync must return a hero', (done) => {
        const id = 2;
        getHeroeByIdAsync( id )
            .then( hero => {
                
                expect( hero ).toEqual({
                    id: 2,
                    name: 'Spiderman',
                    owner: 'Marvel'
                });


                done();

            })
    });

    test('getHeroeByIdAsync must return an error if it does not exist', (done) => {
        const id = 100;
        getHeroeByIdAsync( id )
            .catch( error => {
                
                expect( error ).toBe(`No se pudo encontrar el héroe ${ id }`)

                done();
            })
    });
})

