import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks, onDeleteClick }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index} className="task-container">
          <Task task={task} onDeleteClick={onDeleteClick} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
