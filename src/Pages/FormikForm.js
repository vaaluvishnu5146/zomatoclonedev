import React, { useState } from "react";
import { Formik } from "formik";
import TaskCard from "../Elements/Card/TaskCard";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [mode, setMode] = useState("create");
  function handleEdit(data = {}) {
    setMode("edit");
    setTask(data);
  }
  function renderCards(data = []) {
    return data.map((d, i) => (
      <TaskCard data={d} key={`${d.title}-${i}`} handleEdit={handleEdit} />
    ));
  }

  return (
    <div>
      <h1>FORMIK INTEGRATION</h1>
      <Formik
        initialValues={
          mode === "create" ? { title: "", description: "" } : task
        }
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Title is empty";
          } else if (!values.description) {
            errors.description = "Description is empty";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          let tasksCopy = [...tasks];
          tasksCopy.push(values);
          setTasks(tasksCopy);
          setSubmitting(false);
          resetForm({ title: "", description: "" });
          setTask({});
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter Title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              id="title"
              name="title"
            />
            {errors.title}
            <input
              placeholder="Enter Description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              id="description"
              name="description"
            />
            {errors.description}
            <button type="submit">
              {mode === "create" ? "ADD" : "Update"}
            </button>
          </form>
        )}
      </Formik>
      {renderCards(tasks)}
    </div>
  );
}

export default Task;
