import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Test 06-deses-obj', () => { 
    test('Must return an object with stric types', () => {
        const newUser = {
            name: 'Drake',
            age: 23,
            key: 'ASD123'
        }
        
        const getNewUser = usContext( newUser );

        expect( getNewUser.age ).toBeGreaterThan( 22 );
    });
})