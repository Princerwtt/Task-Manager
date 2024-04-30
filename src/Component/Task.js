
import React from "react";

const Task = ({ task, onDelete, onEdit }) => {
  return (
    <div className="task">
      <span>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onEdit(task)}>Edit</button>
    </div>
  );
};

export default Task;
