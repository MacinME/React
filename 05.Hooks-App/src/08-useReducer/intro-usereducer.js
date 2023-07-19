
const initialState = [{
    id: 1,
    task: 'This is the first task',
    done: false
}];

const todoReducer = (state = initialState, action = {}) => {

    // console.log( action );
    
    if( action.type == 'Add TODO'){
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    task: 'This is the second task',
    done: false
}

const action = {
    type: 'Add TODO',
    payload: newTodo
}

todos = todoReducer( todos, action );

console.log(todos);