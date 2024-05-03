import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const Home = () => {
  // State for storing tasks and the task being edited
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  // useEffect to load tasks from localStorage when component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // useEffect to update localStorage when tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add or update a task
  const addOrUpdateTask = (task) => {
    const updatedTasks = editTask
      ? tasks.map((t) => (t.id === editTask.id ? task : t))
      : [...tasks, { ...task, id: Date.now() }];
    setTasks(updatedTasks);
    setEditTask(null); // Clear editTask after adding or updating
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function to handle editing a task
  const editTaskHandler = (task) => {
    setEditTask(task);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      {/* TaskForm component for adding or editing tasks */}
      <div className="task-form">
        <TaskForm onSubmit={addOrUpdateTask} editTask={editTask} />
      </div>
      {/* TaskList component for displaying tasks */}
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTaskHandler} />
    </div>
  );
};

export default Home;
