import { types } from '../../../src/types/types';

describe('Test on types.js', () => { 

    test('should return the next values', () => { 

        expect( types ).toEqual({
            login:  '[Auth] Login',
            logout: '[Auth] Logout'
        })

    })

})