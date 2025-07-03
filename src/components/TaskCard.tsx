import React from 'react';
import { Calendar, Edit, Trash2, Clock, CheckCircle, Circle, AlertCircle } from 'lucide-react';
import { Task } from '../types/task';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Task['status']) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && task.status !== 'completed';

  const getStatusIcon = () => {
    switch (task.status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-success-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-primary-500" />;
      default:
        return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getPriorityColor = () => {
    switch (task.priority) {
      case 'high':
        return 'text-error-600 bg-error-50';
      case 'medium':
        return 'text-warning-600 bg-warning-50';
      case 'low':
        return 'text-success-600 bg-success-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusColor = () => {
    switch (task.status) {
      case 'completed':
        return 'text-success-600 bg-success-50';
      case 'in-progress':
        return 'text-primary-600 bg-primary-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className={`task-card ${task.status === 'completed' ? 'opacity-75' : ''} priority-${task.priority}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3 flex-1">
          <button
            onClick={() => {
              const nextStatus = task.status === 'completed' ? 'pending' : 
                               task.status === 'pending' ? 'in-progress' : 'completed';
              onStatusChange(task.id, nextStatus);
            }}
            className="transition-transform duration-200 hover:scale-110"
          >
            {getStatusIcon()}
          </button>
          <div className="flex-1">
            <h3 className={`font-semibold text-gray-900 ${task.status === 'completed' ? 'line-through' : ''}`}>
              {task.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{task.description}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 ml-4">
          <button
            onClick={() => onEdit(task)}
            className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
            title="Edit task"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 text-gray-400 hover:text-error-600 hover:bg-error-50 rounded-lg transition-all duration-200"
            title="Delete task"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor()}`}>
            {task.priority}
          </span>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor()}`}>
            {task.status.replace('-', ' ')}
          </span>
          <span className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
            {task.category}
          </span>
        </div>

        {task.dueDate && (
          <div className={`flex items-center space-x-1 text-xs ${
            isOverdue ? 'text-error-600' : 'text-gray-500'
          }`}>
            {isOverdue && <AlertCircle className="w-3 h-3" />}
            <Calendar className="w-3 h-3" />
            <span>{formatDate(task.dueDate)}</span>
          </div>
        )}
      </div>
    </div>
  );
};