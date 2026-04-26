import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onToggleStatus, onDelete, onUpdate, loading }) => {
  if (loading) return <div className="loading">Loading your tasks...</div>;
  if (tasks.length === 0) return <div className="empty-state">No tasks yet — add one above!</div>;

  const pending = tasks.filter(t => t.status !== 'completed');
  const completed = tasks.filter(t => t.status === 'completed');

  return (
    <div className="task-list-wrapper">
      {pending.length > 0 && (
        <>
          <div className="section-title">{pending.length} remaining</div>
          {pending.map(task => (
            <TaskCard key={task._id} task={task} onToggleStatus={onToggleStatus} onDelete={onDelete} onUpdate={onUpdate} />
          ))}
        </>
      )}
      {completed.length > 0 && (
        <>
          <div className="section-title" style={{ marginTop: '1.25rem' }}>Completed · {completed.length}</div>
          {completed.map(task => (
            <TaskCard key={task._id} task={task} onToggleStatus={onToggleStatus} onDelete={onDelete} onUpdate={onUpdate} />
          ))}
        </>
      )}
    </div>
  );
};

export default TaskList;
