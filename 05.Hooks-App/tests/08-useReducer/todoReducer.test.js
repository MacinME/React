import { reducer } from '../../src/08-useReducer/todoReducer';

describe('Test on todoReducer', () => { 

    const initialState = [
        {
            id: 12,
            task: 'Task #1',
            done: false
        }
    ]

    test('should return the default initial state', () => {

        const todoReducer = reducer( initialState, {});
        expect( todoReducer ).toBe( initialState );
    })

    test('Test on add new Task', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 13,
                task: 'Task #2',
                done: false
            }
        }

        const todoReducer = reducer( initialState, action);
        expect( todoReducer.length ).toBe(2);
        expect( todoReducer ).toContain( action.payload );

    })

    test('Test on delete a task', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: initialState[0].id
        }

        const todoReducer = reducer( initialState, action );
        expect( todoReducer.length ).toBe(0);

    })

    test('Needs to change the done value when toggle', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: initialState[0].id
        }
        
        const todoReducer = reducer( initialState, action );
        expect( todoReducer[0].done ).toBeTruthy();

    })

})