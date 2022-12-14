import './style.css';
import { useRef } from 'react';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const Input = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur()
        }}>
            <input className="input_box"
                type='text'
                placeholder='type your task...'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                ref={inputRef}
            />
            <button className="input_submit">Go!</button>
        </form>
    )
}

export default Input