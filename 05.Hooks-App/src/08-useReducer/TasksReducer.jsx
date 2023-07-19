import { useReducer } from 'react';
import { reducer } from './todoReducer';
import { TodoLists } from './TodoLists';
import { TodoAdd } from './TodoAdd';

const initialArg = [
  {
      id: 1,
      task: 'This is the first task',
      done: false
  },
  {
      id: 2,
      task: 'This is the second task',
      done: false
  }
];

export const TasksReducer = () => {

    const [tasks, dispatch] = useReducer( reducer, initialArg );

    const onNewTodo = (todo) => {
      console.log( todo );
    }

  return (
    <>
        <h1>Todo (10) <small>Pending: 5</small></h1>
        <hr />

        <div className="row">
          <div className='col-7'>
              <TodoLists tasks={ tasks } />
          </div>
          <div className='col-5'>
            <h2>Add new TODO</h2>
            <hr />
            <TodoAdd onNewTodo={ onNewTodo }  />
          </div>
        </div>

    </>
  )
}
