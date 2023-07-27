import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/types/types';

describe('Test on authReducer', () => { 
    
    const state = {
        logged: false,
        user: false
    };

    const user = {
        id: 1,
        name: "Drake"
    }

    test('should return the default state', () => { 
        const initialState = authReducer(state, {});
        expect( initialState ).toBe( state );
    })

    test('Call the login action and set the user', () => { 

        const action = {
            type: types.login,
            payload: user
        }

        const login = authReducer( state, action );
        expect( login.user ).toEqual( user );
    })

    test('Logout must delete the user and set the logged property false', () => { 
        const state = { logged: true, user: { id: 1, name: 'Max' } }
        const action = { type: types.logout }
        const logout = authReducer( state , action );
        expect( logout ).toEqual({
            logged: false
        })

    })
    
})