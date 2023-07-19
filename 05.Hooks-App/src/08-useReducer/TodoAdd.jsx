import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    const { task, onInputChange, onResetForm } = useForm({
        task: '',
    });

    const handleNewTodo = (evt) => {
        evt.preventDefault();
        if( task.length <= 1 ) return;

        const newTodo ={
            id: Date.now(),
            task,
            done: false
        }
        onNewTodo( newTodo );
        onResetForm();
    }
  

  return (
    <form onSubmit={ handleNewTodo } >
        <input 
            type="text" 
            placeholder='What do we are going to do?'
            className='form-control'
            onChange={ onInputChange }
            name="task"
            value={ task }
        />
        <button
            type="submit"
            className="btn btn-outline-primary mt-2"
        >
            Add task
        </button>
    </form>
  )
}
