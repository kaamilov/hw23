import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../slices/todSlice'
const TodoForm = () => {
const [value,setValue] = useState('')
  const dispatch = useDispatch()
const adTodoHandler =()=>{
  const todo = {
    id:Math.round(Math.random()*100),
    text:value,
    completed:false
  }
  dispatch(addTodo(todo))
  setValue('')
}
  return (
   <form onSubmit={(e)=>e.preventDefault()}>
    <input type="text" onChange={(e)=>setValue(e.target.value)} value={value}/>
    <button onClick={()=>adTodoHandler()}>submit</button>
   </form>
  )
}

export default TodoForm