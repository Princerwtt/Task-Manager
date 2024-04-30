

import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTasks = [...tasks, { ...task, id: Date.now() }];
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

const editTaskHandler = (task) => {
  setEditTask(task);
};

const updateTask = (updatedTask) => {
  const updatedTasks = tasks.map((task) =>
    task.id === updatedTask.id ? updatedTask : task
  );
  setTasks(updatedTasks);
  setEditTask(null);
console.log(tasks)

};
  return (
    <div className="container">
      <h1>Task Manager</h1>
      {/* <Home /> This will render the Home component */}
      <div className="task-form">
        <TaskForm onSubmit={editTask ? updateTask : addTask} />
      </div>
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTaskHandler}
      />
    </div>
  );
};

export default Home;