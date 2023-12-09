
import React, { useState } from 'react';
import './NewTaskForm.css';

const NewTaskForm = ({ onTaskSubmit }) => {
  const [task, setTask] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      onTaskSubmit({ task, subtasks: [] }); // Pass an empty array for subtasks
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        New Task:
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter a new task"
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;

