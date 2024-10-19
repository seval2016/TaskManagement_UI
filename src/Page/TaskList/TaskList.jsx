import React from 'react';
import TaskCard from '../Task/TaskCard/TaskCard';

const TaskList = () => {
  return (
    <div className="space-y-5">
      {[1, 1, 1, 1].map((item, index) => (
        <TaskCard key={index} />
      ))}
    </div>
  );
};

export default TaskList;