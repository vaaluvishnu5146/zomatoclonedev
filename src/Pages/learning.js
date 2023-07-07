import React, { useState, useRef } from "react";

export default function Learning() {
  const todoElementRef = useRef(null);
  const [items, setItem] = useState([
    "Create Component",
    "Use component",
    "Create State",
    "Use State",
  ]);
  function handleTodoChange(e) {
    if (e) {
      const itemsCopy = [...items];
      itemsCopy.push(todoElementRef.current.value);
      todoElementRef.current.value = "";
      setItem(itemsCopy);
    }
  }
  return (
    <div>
      <input ref={todoElementRef} placeholder="Enter your task" />
      <button onClick={handleTodoChange}>Add</button>
      <ul>
        {items.map((_d, i) => (
          <li key={`todo-list-item-${i}`}>{_d}</li>
        ))}
      </ul>
    </div>
  );
}
