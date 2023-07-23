import { render, screen } from '@testing-library/react';
import { TasksReducer } from '../../src/08-useReducer/TasksReducer';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');

describe('Test on <TasksReducer />', () => { 

    useTodo.mockReturnValue({
        tasks: [
            { id: 1, task: 'Task #1', done: false },
            { id: 2, task: 'Task #2', done: true }
        ],
        onNewTodo: jest.fn(),
        onDeleteTodo: jest.fn(),
        onToggleTodo: jest.fn(),
        totalTodos: 2,
        pendingTodos: 1,
    })

    test('should return the default state', () => { 
        
        render(
            <TasksReducer />
        )

        expect( screen.getByText('Task #1') ).toBeTruthy();
        expect( screen.getByText('Task #2') ).toBeTruthy();
        expect( screen.getByRole('textbox').name ).toBe('task')
    })

})