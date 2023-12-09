import React, { useState } from 'react';
import './Task.css'

const Subtask = ({ subtask, onDoneClick, onDeleteSubtask }) => {
  const handleDoneClick = () => {
    onDoneClick(subtask);
  };

  const handleDeleteClick = () => {
    onDeleteSubtask(subtask);
  };

  return (
    <div className='lol'>
      <p>{subtask.description}</p>
      {subtask.done ? (
        <span>✔️</span>
      ) : (
        <div className='lol1'>
          <button onClick={handleDoneClick}>Done</button>
          <button onClick={handleDeleteClick}>Delete Subtask</button>
        </div>
      )}
    </div>

  );
};

const Task = ({ task, onDeleteClick }) => {
  const [subtasks, setSubtasks] = useState([]);
  const [showSubtasks, setShowSubtasks] = useState(false);

  const addSubtask = (description) => {
    setSubtasks((prevSubtasks) => [...prevSubtasks, { description, done: false }]);
  };

  const handleDoneClick = (clickedSubtask) => {
    const updatedSubtasks = subtasks.map((subtask) =>
      subtask === clickedSubtask ? { ...subtask, done: true } : subtask
    );
    setSubtasks(updatedSubtasks);
  };

  const handleDeleteSubtask = (subtaskToDelete) => {
    const updatedSubtasks = subtasks.filter((subtask) => subtask !== subtaskToDelete);
    setSubtasks(updatedSubtasks);
  };

  const handleAddSubtask = () => {
    const description = prompt('Enter the name of the subtask:');
    if (description !== null && description.trim() !== '') {
      addSubtask(description);
    }
  };

  const handleDeleteTask = () => {
    onDeleteClick(task);
  };

  return (
    <div>
      <p>{task.task}</p>
      <button onClick={handleDeleteTask}>Delete Task</button>
      <div>
        {showSubtasks && (
          <>
            Sub-Tasks:
            {subtasks.map((subtask, index) => (
              <Subtask
                key={index}
                subtask={subtask}
                onDoneClick={handleDoneClick}
                onDeleteSubtask={handleDeleteSubtask}
              />
            ))}
          </>
        )}
      </div>
      <button onClick={() => setShowSubtasks(!showSubtasks)}>
        {showSubtasks ? 'Hide Subtasks' : 'See More'}
      </button>
      {showSubtasks && <button onClick={handleAddSubtask}>Add Subtask</button>}
    </div>
  );
};

export default Task;