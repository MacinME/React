import { useEffect, useReducer } from 'react';
import { reducer } from '../08-useReducer/todoReducer';

const init = () =>{
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [tasks, dispatch] = useReducer( reducer, [], init );

    const onNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const onDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const onToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( tasks ));
    }, [tasks])

    return {
        tasks,
        onNewTodo,
        onDeleteTodo,
        onToggleTodo,
        totalTodos: tasks.length,
        pendingTodos: tasks.filter( t => !t.done ).length,
    }
}
