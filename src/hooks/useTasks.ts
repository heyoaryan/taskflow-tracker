import { useState, useEffect } from 'react';
import { Task, TaskFilter } from '../types/task';

const STORAGE_KEY = 'tasktracker_tasks';

// Sample tasks for demonstration
const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Complete project proposal',
    description: 'Finish the Q4 project proposal and submit to management',
    status: 'in-progress',
    priority: 'high',
    category: 'Work',
    dueDate: '2024-01-20',
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z',
  },
  {
    id: '2',
    title: 'Buy groceries',
    description: 'Weekly grocery shopping - milk, bread, fruits, vegetables',
    status: 'pending',
    priority: 'medium',
    category: 'Personal',
    dueDate: '2024-01-15',
    createdAt: '2024-01-10T11:00:00Z',
    updatedAt: '2024-01-10T11:00:00Z',
  },
  {
    id: '3',
    title: 'Review code changes',
    description: 'Review pull requests for the authentication module',
    status: 'completed',
    priority: 'medium',
    category: 'Work',
    createdAt: '2024-01-09T14:00:00Z',
    updatedAt: '2024-01-10T09:00:00Z',
  },
  {
    id: '4',
    title: 'Plan weekend trip',
    description: 'Research and book weekend getaway to the mountains',
    status: 'pending',
    priority: 'low',
    category: 'Personal',
    dueDate: '2024-01-25',
    createdAt: '2024-01-10T16:00:00Z',
    updatedAt: '2024-01-10T16:00:00Z',
  },
];

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load tasks from localStorage or use sample data
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setTasks(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to parse stored tasks:', error);
        setTasks(sampleTasks);
      }
    } else {
      setTasks(sampleTasks);
    }
    setIsLoading(false);
  }, []);

  const saveTasks = (newTasks: Task[]) => {
    setTasks(newTasks);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks));
  };

  const addTask = (taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    saveTasks([...tasks, newTask]);
    return newTask;
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    const updatedTasks = tasks.map(task =>
      task.id === id
        ? { ...task, ...updates, updatedAt: new Date().toISOString() }
        : task
    );
    
    saveTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    saveTasks(tasks.filter(task => task.id !== id));
  };

  const filterTasks = (filter: TaskFilter): Task[] => {
    return tasks.filter(task => {
      if (filter.status && task.status !== filter.status) return false;
      if (filter.priority && task.priority !== filter.priority) return false;
      if (filter.category && task.category !== filter.category) return false;
      if (filter.search) {
        const searchLower = filter.search.toLowerCase();
        if (!task.title.toLowerCase().includes(searchLower) &&
            !task.description.toLowerCase().includes(searchLower)) {
          return false;
        }
      }
      return true;
    });
  };

  const getCategories = (): string[] => {
    return Array.from(new Set(tasks.map(task => task.category)));
  };

  const getTaskStats = () => {
    return {
      total: tasks.length,
      completed: tasks.filter(t => t.status === 'completed').length,
      inProgress: tasks.filter(t => t.status === 'in-progress').length,
      pending: tasks.filter(t => t.status === 'pending').length,
      overdue: tasks.filter(t => 
        t.dueDate && new Date(t.dueDate) < new Date() && t.status !== 'completed'
      ).length,
    };
  };

  return {
    tasks,
    isLoading,
    addTask,
    updateTask,
    deleteTask,
    filterTasks,
    getCategories,
    getTaskStats,
  };
};