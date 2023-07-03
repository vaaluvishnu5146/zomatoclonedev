import React, { useState, useEffect } from "react";
import TextInput from "../Components/TextInput/TextInput";

export function greet() {
  console.log("changed");
}

const initialTodoState = {
  title: "",
  description: "",
  status: false,
};

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: false,
  });
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    return () => {};
  }, []);

  function handleTodo() {
    const todosCopy = [...todos];
    todosCopy.push(todo);
    setTodo(initialTodoState);
    setTodos(todosCopy);
  }

  function handleInput(e) {
    let todoCopy = {
      ...todo,
    };
    todoCopy[e.target.id] = e.target.value;
    setTodo(todoCopy);
  }

  return (
    <div>
      <div className="task-form">
        <TextInput
          id="title"
          placeholder="Enter your task title"
          value={todo["title"]}
          onChange={handleInput}
        />
        <TextInput
          id="description"
          placeholder="Enter your task description"
          value={todo["description"]}
          onChange={handleInput}
        />
        <button onClick={handleTodo}>Add</button>
      </div>
      <div className="task-list">
        <ul>
          {todos.map((d, i) => (
            <li key={`todo-item-${i}`}>{d.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
