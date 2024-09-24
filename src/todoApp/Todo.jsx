import { useEffect, useState } from 'react'
import AddTask from './AddTask'
import ListTasks from './ListTasks'

function Todo() {
const[tasks,setTasks]= useState([]);

useEffect(()=>{
    document.title=`you have ${tasks.length} pending tasks`
});

const addTask = (currentTask)=>{
     const newTask =[...tasks,{currentTask}]
     setTasks(newTask)
}

const deleteTask = (index) =>{
      const newTask=[...tasks]
      newTask.splice(index,1)
      setTasks(newTask)
}

  return (
    <div className="bg-white w-full h-screen flex justify-center items-center bg-[url('https://c0.wallpaperflare.com/preview/686/602/500/aerial-communication-computer-connection.jpg')] bg-cover bg-no-repeat">
      <div className="bg-transperent border-4 border-white w-96 p-4 rounded-lg max-w-md">
        <h1 className="text-2xl font-bold text-center text-white">TODO LIST</h1>
        <div className="flex mt-4">
        <AddTask addTask={addTask}/>
        </div>
        <div className="flex mt-4">
        <ListTasks tasks={tasks} deleteTask={deleteTask}/>
        </div>
      </div>
    </div>
  )
}

export default Todo