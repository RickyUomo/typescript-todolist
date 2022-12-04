import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';
import { useState } from 'react';
import { Todo } from './model';

let id: number = 1;

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {
        id: id++,
        todo,
        isDone: false
      }]);

      setTodo('');
    }
  };

  return (
    <div className="App">
      <span className="heading">DO IT</span>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList />
    </div>
  );
}

export default App;
