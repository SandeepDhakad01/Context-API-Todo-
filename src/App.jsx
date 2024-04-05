import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { changeTheme } from "./features/todo_features/themeSlice"
import { useDispatch,useSelector } from "react-redux"

function App() {

 const dipatch=useDispatch();
 const  theme=useSelector((state)=>state.theme)
 


  useEffect(
    ()=>{
      document.querySelector('html').classList.toggle("dark")
    },[theme]
  )
  return (
    <>

    <div className=" flex justify-end  dark:bg-black bg-slate-400 ">
    <button
       onClick={()=>{
        dipatch(changeTheme())
      
       }}
       className="bg-blue-800 dark:bg-white dark:text-black rounded-md p-2 text-white m-4"
       >changeTheme</button>
    </div>
    <div className="w-screen min-h-screen dark:bg-black bg-slate-400  flex justify-center dark:text-white">
     

      <div className="min-w-[50%] h-full flex flex-col items-center ">
     <h1 className="m-4">Learn about redux toolkit</h1>
       
       <TodoForm/>
       <TodoItem/>
       
       
      </div>
    </div>
    </>
  )
}

export default App
