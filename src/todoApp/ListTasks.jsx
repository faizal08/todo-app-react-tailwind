//import React from 'react'

function ListTasks({ tasks, deleteTask }) {
    return (
      <ul className="list-disc mt-4 ">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between border-4  border-white w-80 px-2 py-2 my-4 rounded-lg max-w-md">
            <span className="text-white font-bold">{task.currentTask}</span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );git add .

  }

export default ListTasks