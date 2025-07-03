import React from 'react';
import { CheckCircle, Clock, AlertCircle, Calendar } from 'lucide-react';

interface TaskStatsProps {
  stats: {
    total: number;
    completed: number;
    inProgress: number;
    pending: number;
    overdue: number;
  };
}

export const TaskStats: React.FC<TaskStatsProps> = ({ stats }) => {
  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  const statCards = [
    {
      title: 'Total Tasks',
      value: stats.total,
      icon: Calendar,
      color: 'text-gray-600',
      bgColor: 'bg-gray-100',
    },
    {
      title: 'Completed',
      value: stats.completed,
      icon: CheckCircle,
      color: 'text-success-600',
      bgColor: 'bg-success-100',
    },
    {
      title: 'In Progress',
      value: stats.inProgress,
      icon: Clock,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
    {
      title: 'Overdue',
      value: stats.overdue,
      icon: AlertCircle,
      color: 'text-error-600',
      bgColor: 'bg-error-100',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statCards.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.title} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                {stat.title === 'Completed' && stats.total > 0 && (
                  <p className="text-xs text-gray-500 mt-1">{completionRate}% complete</p>
                )}
              </div>
              <div className={`p-3 ${stat.bgColor} rounded-lg`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};