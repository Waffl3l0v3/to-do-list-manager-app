import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [showExtras, setShowExtras] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      title: title.trim(),
      description: description.trim(),
      priority,
      dueDate: dueDate ? new Date(dueDate).toISOString() : null,
    });

    setTitle('');
    setDescription('');
    setPriority('medium');
    setDueDate('');
    setShowExtras(false);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="add-form-row">
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn-add">Add</button>
      </div>

      <div className="add-form-extras">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">🟢 Low</option>
          <option value="medium">🟡 Medium</option>
          <option value="high">🔴 High</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        {description === '' && (
          <input
            type="text"
            placeholder="Note (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ flex: 1, border: '1px solid #e0dbd3', borderRadius: '8px', padding: '0.5rem 0.75rem', fontSize: '0.85rem', background: '#faf9f7', color: '#555', outline: 'none', fontFamily: 'Inter, sans-serif' }}
          />
        )}
        {description !== '' && (
          <input
            type="text"
            placeholder="Note (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ flex: 1, border: '1px solid #c8b99a', borderRadius: '8px', padding: '0.5rem 0.75rem', fontSize: '0.85rem', background: '#fff', color: '#2c2c2c', outline: 'none', fontFamily: 'Inter, sans-serif' }}
          />
        )}
      </div>
    </form>
  );
};

export default TaskForm;
