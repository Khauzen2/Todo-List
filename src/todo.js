import React, { useState } from "react";


function ToDoList(){

  const [tasks, setTask] = useState([]);
  const [newTask, setNewtask] = useState("");

  function handleInputChange(event){
    setNewtask(event.target.value);

  }

  function addTask(){
   if(newTask.trim() !==""){
    setTask(t => [...t, newTask]);
    setNewtask("");
    }

  }

  function deleteTask(index){
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTask(updatedTasks);

  }
  return(
   <div className= "Container">
    <div className="todo-list">

      <h1>To-Do List</h1>
        
          <div className = "InputField">
            <input 
                type="text"
                placeholder="Add your task"
                value={newTask}
                onChange={handleInputChange} />
                <button 
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
          </div>
          <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                  <span className="text">{task}</span>
                  <button className="delete-button"
                  onClick={() =>deleteTask(index)}>
                    ❌
                  </button>
                </li>
          )}
          </ol>

        </div>

  </div> )
}
export default ToDoList