import React, { useEffect, useState } from "react";
import './ToDo.css'


const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() =>{
    document.title = `You have ${tasks.length} Pending Task`;
  },[])

  const handleInputChanges = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
      if(newTask.trim() !== ''){
        setTasks(t => [...t,newTask]);
        setNewTask('')
      }; 
  };

  const deleteTask = (index) => {
    const updateTasks = tasks.filter((_, i) => i !== index)
    setTasks(updateTasks)
  };

  const MoveTaskUp = (index) => {
    console.log(index)
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
      setTasks(updatedTasks)      
    }
  };

  const MoveTaskDown = (index) => {
    console.log(index,tasks.length);
    if(index < tasks.length-1){
      const updatedTask = [...tasks];
      [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]];
      setTasks(updatedTask)
    }
  };

 


  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <input value={newTask} onChange={handleInputChanges} type="text" placeholder="Add Your Task" />
      <button className="add-button" onClick={addTask}>Add</button><br />
      <ol>
        {tasks.map((task,index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
            <button className="move-button" onClick={() => MoveTaskUp(index)}>👆</button>
            <button className="move-button" onClick={() => MoveTaskDown(index)} >👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
