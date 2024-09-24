import { useState } from "react"


const AddTask = ({addTask}) => {
   const[value,setValue] = useState("");

   const addValue = () =>{
    addTask(value)
    setValue("")
   }

  return (
    <>
        <div className="flex items-center">
  <input type="text"className="border border-gray-300 rounded-lg px-10 py-2 w-full mr-2"
    placeholder="Enter your task"
        value={value}
        onChange={(e)=>{setValue(e.target.value)}}
    />
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  onClick={addValue}
  > Add</button>
</div>
    </>
  )
}

export default AddTask