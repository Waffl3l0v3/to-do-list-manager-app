import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (taskData) => {
    try {
      const response = await axios.post('/api/tasks', taskData);
      setTasks([response.data, ...tasks]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleToggleStatus = async (id, status) => {
    try {
      const response = await axios.put(`/api/tasks/${id}`, { status });
      setTasks(tasks.map(t => t._id === id ? response.data : t));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleUpdateTask = async (id, updates) => {
    try {
      const response = await axios.put(`/api/tasks/${id}`, updates);
      setTasks(tasks.map(t => t._id === id ? response.data : t));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      setTasks(tasks.filter(t => t._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <div className="app-header">
        <h1>My Tasks</h1>
        <p>{tasks.filter(t => t.status !== 'completed').length} tasks remaining</p>
      </div>

      <TaskForm onAdd={handleAddTask} />

      <TaskList
        tasks={tasks}
        onToggleStatus={handleToggleStatus}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
        loading={loading}
      />
    </div>
  );
}

export default App;
