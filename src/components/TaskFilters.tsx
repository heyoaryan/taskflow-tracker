import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { TaskFilter } from '../types/task';

interface TaskFiltersProps {
  filter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
  categories: string[];
}

export const TaskFilters: React.FC<TaskFiltersProps> = ({
  filter,
  onFilterChange,
  categories,
}) => {
  const hasActiveFilters = filter.status || filter.priority || filter.category;

  const clearFilters = () => {
    onFilterChange({ search: filter.search });
  };

  return (
    <div className="card mb-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-medium text-gray-900">Filters</h3>
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
              <span>Clear filters</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={filter.search || ''}
                onChange={(e) => onFilterChange({ ...filter, search: e.target.value })}
                className="input pl-10"
                placeholder="Search tasks..."
              />
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={filter.status || ''}
              onChange={(e) => onFilterChange({ 
                ...filter, 
                status: e.target.value as any || undefined 
              })}
              className="input"
            >
              <option value="">All statuses</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Priority Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority
            </label>
            <select
              value={filter.priority || ''}
              onChange={(e) => onFilterChange({ 
                ...filter, 
                priority: e.target.value as any || undefined 
              })}
              className="input"
            >
              <option value="">All priorities</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={filter.category || ''}
              onChange={(e) => onFilterChange({ 
                ...filter, 
                category: e.target.value || undefined 
              })}
              className="input"
            >
              <option value="">All categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};