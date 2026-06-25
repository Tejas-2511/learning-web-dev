import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask.trim()]);
      setNewTask("");
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = 
        [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
        [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className="text">{task}</span>
            <div className="button-group">
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
                aria-label="Delete task"
              >
                Delete
              </button>
              <button
                className="move-button up"
                onClick={() => moveTaskUp(index)}
                aria-label="Move task up"
                disabled={index === 0}
              >
                👆
              </button>
              <button
                className="move-button down"
                onClick={() => moveTaskDown(index)}
                aria-label="Move task down"
                disabled={index === tasks.length - 1}
              >
                👇
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
