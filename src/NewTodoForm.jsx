import React, { useState } from "react";

export default function NewTodoForm({ onSubmit }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask === "") return;
    onSubmit(newTask);
    setNewTask("");
  };
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New item</label>
        <input
          id="item"
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
      </div>
      <button className="btn">ADD Todo</button>
    </form>
  );
}
