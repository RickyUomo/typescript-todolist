import './style.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const Input = ({ todo, setTodo, handleAdd }: Props) => {
    return (
        <form className="input" onSubmit={handleAdd}>
            <input className="input_box"
                type='text'
                placeholder='type your task...'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className="input_submit">Go!</button>
        </form>
    )
}

export default Input