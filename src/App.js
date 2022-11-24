
import { useSelector } from 'react-redux';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  const todos = useSelector((state)=>state.todo.todos)
  return (
    <div className="App">
     <TodoForm/>
     {
      todos?.map(todo=>(
        <TodoList key={todo.id} todo={todo}/>
      ))
     }
     
    </div>
  );
}

export default App;
