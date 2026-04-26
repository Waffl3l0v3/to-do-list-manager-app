import React, { useState } from 'react';
import { format } from 'date-fns';
import { FiTrash2, FiEdit2, FiCheck, FiX } from 'react-icons/fi';

const TaskCard = ({ task, onToggleStatus, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const isCompleted = task.status === 'completed';

  const handleToggle = () => {
    onToggleStatus(task._id, isCompleted ? 'pending' : 'completed');
  };

  const handleSaveEdit = () => {
    if (!editTitle.trim()) return;
    onUpdate(task._id, { title: editTitle });
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setEditTitle(task.title);
    setEditing(false);
  };

  return (
    <div className={`task-item ${isCompleted ? 'completed' : ''}`}>
      {/* Checkbox */}
      <input
        type="checkbox"
        className="task-checkbox"
        checked={isCompleted}
        onChange={handleToggle}
      />

      {/* Body */}
      <div className="task-body">
        {editing ? (
          <input
            className="task-edit-input"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSaveEdit();
              if (e.key === 'Escape') handleCancelEdit();
            }}
            autoFocus
          />
        ) : (
          <div className="task-title">{task.title}</div>
        )}

        {task.description && !editing && (
          <div className="task-desc">{task.description}</div>
        )}

        <div className="task-badges">
          <span className={`badge ${task.priority}`}>{task.priority}</span>
          {task.dueDate && (
            <span className="badge due">Due {format(new Date(task.dueDate), 'MMM d')}</span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="task-actions">
        {editing ? (
          <>
            <button className="btn-icon save" onClick={handleSaveEdit} title="Save">
              <FiCheck size={16} />
            </button>
            <button className="btn-icon" onClick={handleCancelEdit} title="Cancel">
              <FiX size={16} />
            </button>
          </>
        ) : (
          <>
            <button className="btn-icon" onClick={() => setEditing(true)} title="Edit">
              <FiEdit2 size={15} />
            </button>
            <button className="btn-icon delete" onClick={() => onDelete(task._id)} title="Delete">
              <FiTrash2 size={15} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
