import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TodoList from "./Todolist";

function App() {
  return (
    <div>
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
