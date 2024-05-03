import React from "react";
import Task from "./Task";

// TaskList component renders a list of tasks
const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div>
      {/* Map over the tasks array and render each task */}
      {tasks.map((task) => (
        // Task component is rendered for each task
        <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TaskList;
