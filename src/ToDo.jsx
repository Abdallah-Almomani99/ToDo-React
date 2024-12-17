import React, { useState } from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    setTasks([...tasks, newTask]);
    setNewTask("");
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button className="add-button" onClick={addTask}>
        Add Task
      </button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Move Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Move Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDo;
