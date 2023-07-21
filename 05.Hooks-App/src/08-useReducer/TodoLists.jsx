import { TodoItem } from './TodoItem';

export const TodoLists = ({ tasks, onDeleteTodo, onToggleTodo}) => {
  return (
    <ul className='list-group'>
        {
            tasks.map(( t ) => (
                <TodoItem 
                    key={ t.id }
                    todo={ t }
                    onDeleteTodo={ onDeleteTodo } 
                    onToggleTodo={ onToggleTodo }
                />
            ))
        }
    </ul>
  )
}
