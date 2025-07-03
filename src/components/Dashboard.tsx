import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Layout } from './Layout';
import { TaskStats } from './TaskStats';
import { TaskFilters } from './TaskFilters';
import { TaskList } from './TaskList';
import { TaskForm } from './TaskForm';
import { useTasks } from '../hooks/useTasks';
import { Task, TaskFilter } from '../types/task';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const {
    tasks,
    isLoading,
    addTask,
    updateTask,
    deleteTask,
    filterTasks,
    getCategories,
    getTaskStats,
  } = useTasks();

  const { logout } = useAuth();
  const navigate = useNavigate();

  const [filter, setFilter] = useState<TaskFilter>({});
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>();

  const filteredTasks = filterTasks(filter);
  const categories = getCategories();
  const stats = getTaskStats();

  const handleCreateTask = () => {
    setEditingTask(undefined);
    setIsTaskFormOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsTaskFormOpen(true);
  };

  const handleTaskSubmit = (taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (editingTask) {
      updateTask(editingTask.id, taskData);
    } else {
      addTask(taskData);
    }
  };

  const handleDeleteTask = (id: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(id);
    }
  };

  const handleStatusChange = (id: string, status: Task['status']) => {
    updateTask(id, { status });
  };

  const handleLogout = async () => {
    await logout();
    navigate('/'); // Redirect to login page after logout
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-gray-600">Loading tasks...</span>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Task Dashboard</h2>
            <p className="text-gray-600 mt-1">Manage your personal tasks efficiently</p>
          </div>
          <button
            onClick={handleCreateTask}
            className="btn-primary"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Task
          </button>
        </div>

        <TaskStats stats={stats} />
        
        <TaskFilters
          filter={filter}
          onFilterChange={setFilter}
          categories={categories}
        />

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Tasks ({filteredTasks.length})
            </h3>
          </div>
          
          <TaskList
            tasks={filteredTasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onStatusChange={handleStatusChange}
          />
        </div>

        <TaskForm
          task={editingTask}
          isOpen={isTaskFormOpen}
          onClose={() => setIsTaskFormOpen(false)}
          onSubmit={handleTaskSubmit}
          categories={categories}
        />
      </div>
    </Layout>
  );
};