import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { IoIosDoneAll } from 'react-icons/io';
import { useState, useRef, useEffect } from 'react';

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const todoRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        todoRef.current?.focus();
    }, [edit]);


    const handleDone = (id: number) => setTodos(todos.map(t => t.id === id ? { ...t, isDone: !t.isDone } : t));
    const handleDelete = (id: number) => setTodos(todos.filter(t => t.id !== id));
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map(t => t.id === id ? { ...t, todo: editTodo } : t));
        setEdit(false);
    };


    return (
        <form className='todoCard' onSubmit={e => handleEdit(e, todo.id)}>
            {
                edit ?
                    (<input ref={todoRef} value={editTodo} onChange={e => setEditTodo(e.target.value)} className='todo_text' />) :
                    (
                        todo.isDone ?
                            (<s className='todo_text'>{todo.todo}</s>) :
                            (<span className='todo_text'>{todo.todo}</span>)
                    )
            }

            <div>
                <span className="icon" onClick={() => {
                    console.log(!todo.isDone && edit);

                    if (!todo.isDone && !edit) {
                        setEdit(!edit)
                    }
                }}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <IoIosDoneAll />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
            </div>
        </form>
    )
}

export default TodoCard;