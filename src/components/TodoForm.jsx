import React from 'react'
import { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { addTodo } from '../features/todo_features/todoSlice';



const TodoForm = () => {
    const [msg,setMsg]=useState("");
   const dispatch= useDispatch();

   const v=useSelector((state)=>state)



    const add=(e)=>{
      e.preventDefault()
      dispatch(addTodo(msg))
    setMsg('')
  console.log(v)}

  return (
       <> 
       <div className="w-full flex justify-center ">
        <form  onSubmit={add} className='min-w-[80%] flex justify-center '>
        <input type="text" 
        value={msg}
        onChange={(e)=>setMsg(e.target.value)}
        placeholder='write todo...'
        className=' p-2 m-2 rounded w-[70%]  dark:bg-slate-300'/>
        <button type='submit'
        className='p-2 bg-green-600
        rounded-md m-2 text-white dark:bg-blue-700 '
        >Add Todo</button>
        </form>
       </div>
       </>
  )
}

export default TodoForm