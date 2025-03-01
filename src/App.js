import React from "react";
import TodoList from "./todolist";
import "./styles.css";

export default function App() {
  return (
    <div className="app-container">
      <h1>React To-Do List</h1>
      <TodoList />
    </div>
  );
}