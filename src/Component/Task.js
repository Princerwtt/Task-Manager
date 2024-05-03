import React from "react";

// Task component renders an individual task
const Task = ({ task, onDelete, onEdit }) => {
  return (
    <div className="task">
      {/* Display the title of the task */}
      <span>{task.title}</span>
      
      {/* Button to delete the task, onClick event triggers onDelete function */}
      <button onClick={() => onDelete(task.id)}>Delete</button>
      
      {/* Button to edit the task, onClick event triggers onEdit function */}
      <button onClick={() => onEdit(task)}>Edit</button>
    </div>
  );
};

export default Task;
