import { TodoLists } from './TodoLists';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks/useTodo';

export const TasksReducer = () => {

  const { tasks, totalTodos, pendingTodos, onNewTodo, onDeleteTodo, onToggleTodo } = useTodo();

  return (
    <>
        <h1>Todo { totalTodos } <small>Pending: { pendingTodos}</small></h1>
        <hr />

        <div className="row">
          <div className='col-7'>
              <TodoLists tasks={ tasks } onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToggleTodo } />
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
