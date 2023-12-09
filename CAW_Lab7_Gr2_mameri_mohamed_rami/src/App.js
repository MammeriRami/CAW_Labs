import React, { useState } from 'react';
import './index.css'; 

import TaskList from './components/taskList';
import NewTaskForm from './components/NewTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const deleteTask = (taskToDelete) => {
    
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
  };


  return (
    <div className="container"> 
      <div id="newtask">
        <h2>New Task:</h2>
        <NewTaskForm onTaskSubmit={addTask} />

      </div>
      <div id="tasks">
        <h2>Task List:</h2>
        <TaskList tasks={tasks} onDeleteClick={deleteTask} />
      </div>
    </div>
  );
};

export default App;