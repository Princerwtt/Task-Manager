import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addOrUpdateTask = (task) => {
    const updatedTasks = editTask
      ? tasks.map((t) => (t.id === editTask.id ? task : t))
      : [...tasks, { ...task, id: Date.now() }];
    setTasks(updatedTasks);
    setEditTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTaskHandler = (task) => {
    setEditTask(task);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <div className="task-form">
        <TaskForm onSubmit={addOrUpdateTask} editTask={editTask} />
      </div>
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTaskHandler} />
    </div>
  );
};

export default Home;
