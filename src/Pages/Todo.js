import React, { useState, useEffect, useRef, useReducer } from "react";
import TextInput from "../Elements/TextInput/TextInput";
import BasicDropdown from "../Elements/Dropdowns/BasicDropdown";
import TaskCard from "../Elements/Card/TaskCard";

const initialTodoState = {
  title: "",
  description: "",
  status: false,
};

const initialState = {
  todos: [],
  todo: Object.assign({}, initialTodoState),
  mode: "create",
  filter: "all",
};

const status = [
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Not Completed",
    value: "not completed",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todo: action.payload,
      };
    case "UPDATE_MODE":
      return {
        ...state,
        mode: action.payload,
      };
    case "UPDATE_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      console.log("GREET");
      break;
  }
}

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const todoTitleInput = useRef(null);

  useEffect(() => {
    if (todoTitleInput) {
      todoTitleInput.current.focus();
      // todoTitleInput.current.style.backgroundColor = "red";
    }
    return () => {};
  }, []);

  function handleTodo() {
    const todosCopy = [...state.todos];
    todosCopy.push(state.todo);
    dispatch({ type: "UPDATE_TODO", payload: initialTodoState });
    dispatch({ type: "UPDATE_TODOS", payload: todosCopy });
  }

  function handleInput(e) {
    console.log(e.target.value);
    let todoCopy = {
      ...state.todo,
      status: "not completed",
    };
    todoCopy[e.target.id] = e.target.value;
    dispatch({ type: "UPDATE_TODO", payload: todoCopy });
  }

  function handleEdit(data = {}) {
    dispatch({ type: "UPDATE_MODE", payload: "edit" });
    dispatch({ type: "UPDATE_TODO", payload: data });
  }

  function handleUpdateTodo(e) {
    if (state.mode === "edit") {
      let todosCopy = [...state.todos];
      let matchedData = todosCopy.filter((d) => d.title !== state.todo.title);
      matchedData.push(state.todo);
      dispatch({ type: "UPDATE_TODOS", payload: matchedData });
      dispatch({ type: "UPDATE_TODO", payload: initialTodoState });
      dispatch({ type: "UPDATE_MODE", payload: "create" });
    }
  }

  function handleDeleteTodo(title = "") {
    let todosCopy = [...state.todos];
    let matchedData = todosCopy.filter((d) => d.title !== title);
    dispatch({ type: "UPDATE_TODOS", payload: matchedData });
  }

  function renderCards(data = [], filterType = "all") {
    const _d =
      filterType === "all"
        ? data
        : state.todos.filter((d) => d.status === state.filter);
    return _d.map((d, i) => (
      <TaskCard
        data={d}
        key={`${d.title}-${i}`}
        handleEdit={handleEdit}
        handleDeleteTodo={handleDeleteTodo}
      />
    ));
  }

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <TextInput
                  label="Title"
                  placeholder="Enter Task title here"
                  id="title"
                  value={state.todo["title"]}
                  onChange={handleInput}
                  disabled={state.mode === "edit"}
                  ref={todoTitleInput}
                />
              </div>
              <div className="col-4">
                <TextInput
                  label="Description"
                  placeholder="Enter Task Description here"
                  id="description"
                  value={state.todo["description"]}
                  onChange={handleInput}
                />
              </div>
              <div className="col-4">
                <BasicDropdown
                  label="Status"
                  id="status"
                  options={status}
                  onSelect={handleInput}
                  value={state.todo["status"]}
                />
              </div>
            </div>
            <div className="row">
              <button
                type="button"
                class="btn btn-primary"
                onClick={
                  state.mode === "create" ? handleTodo : handleUpdateTodo
                }
              >
                {state.mode === "create" ? "Create Task" : "Edit Task"}
              </button>
            </div>
          </div>
        </div>
        <div className="row d-flex flex-row-reverse mb-3">
          <div className="col-2">
            <BasicDropdown
              label="Filter"
              id="filter"
              options={[{ label: "All", value: "all" }, ...status]}
              onSelect={(e) =>
                dispatch({ type: "UPDATE_FILTER", payload: e.target.value })
              }
              value={state.filter}
            />
          </div>
        </div>
        <div className="row">{renderCards(state.todos, state.filter)}</div>
      </div>
    </div>
  );
}
