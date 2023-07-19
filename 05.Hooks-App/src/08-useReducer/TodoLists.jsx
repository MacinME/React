import { TodoItem } from './TodoItem';

export const TodoLists = ({ tasks }) => {
  return (
    <ul className='list-group'>
        {
            tasks.map(( t ) => (
                <TodoItem 
                    key={ t.id }
                    todo={ t } 
                />
            ))
        }
    </ul>
  )
}
