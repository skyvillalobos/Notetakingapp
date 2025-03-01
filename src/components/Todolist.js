import React, { useState, useEffect } from "react";

function TodoList() {
  // Inicializa el estado con los datos del localStorage si existen
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [newTask, setNewTask] = useState("");

  // Guardar tareas en localStorage cada vez que cambian
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="todo-container note">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
