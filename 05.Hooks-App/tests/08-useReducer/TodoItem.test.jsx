import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Test on <TodoItem />', () => { 

    const todo = {
        id: 1,
        task: 'This is the #1 task',
        done: false
    }
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should display the initial state of component', () => { 
        render(
            <TodoItem 
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        )

        const listItem = screen.getByRole('listitem');
        expect( listItem.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');
    })

    test('should return the completed task', () => { 

        todo.done = true;

        render(
            <TodoItem 
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        )

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');

    })

    test('should call the onToggleTodo function', () => { 

        render(
            <TodoItem 
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        )

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );
        expect( onToggleTodoMock ).toHaveBeenCalledWith(1);

    })

    test('should call the onDeleteTodo function', () => { 

        render(
            <TodoItem 
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        )

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect( onDeleteTodoMock ).toHaveBeenCalledWith(1);

    })
})