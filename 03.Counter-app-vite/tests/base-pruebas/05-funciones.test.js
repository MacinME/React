import { getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones';

describe('Test on 05-funciones', () => {
    test('getUser must return an object', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( testUser ).toEqual( user );
    
    });

    test('getUsuarioActivo must return an object', () => {
        const name = 'Macin';
        const activeUser = getUsuarioActivo( name );

        expect( activeUser ).toEqual( {
            uid: 'ABC567',
            username: 'Macin'.toUpperCase()
        } );

    })
});
