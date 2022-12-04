import './style.css';
import { Todo } from '../model';
import TodoCard from './TodoCard';
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todos'>
            {todos && todos.map(todo =>
                <TodoCard
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                />)}
        </div>
    )
}

export default TodoList