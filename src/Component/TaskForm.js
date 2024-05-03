import React, { useState } from "react";

// TaskForm component for adding new tasks
const TaskForm = ({ onSubmit }) => {
  // State for input values (title and category)
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Personal");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // If title is empty or contains only whitespace, return (do nothing)
    if (!title.trim()) return;
    // Call the onSubmit prop function with the new task data
    onSubmit({ title, category });
    // Clear the input field after submission
    setTitle("");
  };

  return (
    // Form for adding a new task
    <form className="form-container" onSubmit={handleSubmit}>
      {/* Input field for task title */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* Dropdown select for task category */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Study">Study</option>
      </select>
      {/* Submit button */}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
