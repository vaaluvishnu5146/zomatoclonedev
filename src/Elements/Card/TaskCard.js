import React from "react";

export default function TaskCard({
  data = {},
  handleEdit = (e) => {},
  handleDeleteTodo = (e) => {},
}) {
  return (
    <div className="col-md-3">
      <div class="card">
        <div class="card-body">
          <div className="row">
            <h4>Title: {data.title}</h4>
            <p>Description: {data.description}</p>
            <p>Status: {data.status}</p>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                class="btn btn-info"
                id="editButton"
                onClick={() => handleEdit(data)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => handleDeleteTodo(data.title)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
