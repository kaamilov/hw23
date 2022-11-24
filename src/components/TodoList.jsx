import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCompletedTodo, removeTodo } from '../slices/todSlice'
const TodoList = ({todo}) => {
  console.log(todo.completed);
  const dispatch = useDispatch()

  const toggleTodoHandler =(id)=>{
    dispatch(toggleCompletedTodo(id))
  }
  const removeTodoHandler =(id)=>{
    dispatch(removeTodo(id))
  }
  return (
    <div>
      <span className={`${todo.completed ? "list" : ''}`}>
        {todo.text}
      </span>
      
      <input type="checkbox" onClick={()=>toggleTodoHandler(todo.id)} />
      <button onClick={()=>removeTodoHandler(todo.id)}>Удалить</button>
    </div>
  )
}

export default TodoList