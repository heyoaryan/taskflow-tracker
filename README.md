# TaskFlow - Personal Task Tracker

A modern, responsive personal task tracker application built for the intern pre-hire assignment. This application demonstrates clean code architecture, modern UI/UX design, and comprehensive task management capabilities.

## 🚀 Live Demo

You can view the live application at: [TaskFlow Demo](https://taskflow-intern-demo.netlify.app)

## 📋 Features

### Core Functionality
- **User Authentication**: Simple email/password login system
- **Task Management**: Complete CRUD operations (Create, Read, Update, Delete)
- **Task Organization**: Categorize tasks with custom categories
- **Status Tracking**: Track tasks through pending, in-progress, and completed states
- **Priority Levels**: Set task priorities (low, medium, high)
- **Due Date Management**: Set and track due dates with overdue indicators
- **Advanced Filtering**: Filter tasks by status, priority, category, and search terms
- **Data Persistence**: All data is saved locally using localStorage

### User Experience
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Real-time Updates**: Instant visual feedback for all actions
- **Task Statistics**: Dashboard with completion rates and task overview
- **Intuitive Navigation**: Easy-to-use interface with clear visual hierarchy

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for responsive design and consistent theming
- **Icons**: Lucide React for modern, consistent iconography
- **State Management**: React hooks with custom state management
- **Data Storage**: localStorage for client-side persistence

## 📦 Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx    # Main dashboard component
│   ├── Layout.tsx       # App layout wrapper
│   ├── LoginForm.tsx    # Authentication form
│   ├── TaskCard.tsx     # Individual task display
│   ├── TaskFilters.tsx  # Task filtering interface
│   ├── TaskForm.tsx     # Task creation/editing form
│   ├── TaskList.tsx     # Task list container
│   └── TaskStats.tsx    # Statistics dashboard
├── hooks/               # Custom React hooks
│   ├── useAuth.ts       # Authentication logic
│   └── useTasks.ts      # Task management logic
├── types/               # TypeScript type definitions
│   └── task.ts          # Task and user types
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/heyoaryan/taskflow-tracker
   cd taskflow-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎯 Demo Account

For testing purposes, you can use any email address with a password of at least 6 characters:

- **Email**: demo@taskflow.com
- **Password**: demo123

## 🎨 Design Philosophy

The application follows modern design principles:

- **Clean & Minimal**: Focused on functionality without visual clutter
- **Responsive First**: Mobile-optimized with progressive enhancement
- **Consistent Theming**: Cohesive color system and typography
- **Accessible**: High contrast ratios and keyboard navigation support
- **Performance**: Optimized for fast loading and smooth interactions

## ✨ Key Features Demonstrated

### Technical Skills
- **React & TypeScript**: Modern frontend development with type safety
- **Custom Hooks**: Reusable logic for authentication and task management
- **Component Architecture**: Well-organized, maintainable component structure
- **State Management**: Efficient local state handling with persistence
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### UX/UI Design
- **Intuitive Interface**: Clear visual hierarchy and user flow
- **Micro-interactions**: Smooth animations and hover effects
- **Progressive Disclosure**: Advanced features accessible without overwhelming basic users
- **Error Handling**: User-friendly error messages and validation
- **Loading States**: Clear feedback during async operations

## 🔄 Data Flow

1. **Authentication**: Users log in through the LoginForm component
2. **Task Loading**: Tasks are loaded from localStorage on app initialization
3. **CRUD Operations**: All task operations update both state and localStorage
4. **Filtering**: Real-time filtering without backend API calls
5. **Persistence**: All changes are automatically saved locally

## 🧪 Sample Data

The application includes sample tasks to demonstrate functionality:
- Work tasks with different priorities and deadlines
- Personal tasks with various categories
- Completed tasks to show statistics and filtering

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (optimized touch targets, stacked layout)
- **Tablet**: 768px - 1024px (adaptive grid, medium spacing)
- **Desktop**: > 1024px (full feature layout, hover states)

## 🔧 Configuration

The application uses Tailwind CSS with a custom configuration for:
- Extended color palette (primary, secondary, accent, success, warning, error)
- Custom animations (fade-in, slide-up, bounce-subtle)
- Consistent spacing system (8px grid)
- Typography scale optimized for readability

## 🚀 Deployment

The application is optimized for deployment on:
- **Netlify**: Automatic deployment from Git repository
- **Vercel**: Zero-configuration deployment
- **GitHub Pages**: Static site hosting
- **Any static hosting service**: Standard HTML/CSS/JS output

## 📈 Performance Optimizations

- **Code Splitting**: Vite's automatic code splitting for optimal loading
- **Tree Shaking**: Unused code elimination in production builds
- **Asset Optimization**: Compressed images and minified assets
- **Lazy Loading**: Components loaded on demand
- **Efficient Rendering**: Optimized React rendering with proper key usage

## 🔐 Security Considerations

- **Client-side only**: No sensitive server-side operations
- **Input Validation**: All form inputs are validated
- **XSS Prevention**: React's built-in XSS protection
- **Local Storage**: Safe for demo purposes, would use secure backend in production

## 🎯 Assignment Requirements Met

✅ **Simple Login**: Email/password authentication system  
✅ **Task Management**: Full CRUD operations implemented  
✅ **Task Display**: Clean, organized task visualization  
✅ **Task Filtering**: Multiple filter options available  
✅ **Data Persistence**: localStorage implementation  
✅ **Modern Technologies**: React, TypeScript, Tailwind CSS  
✅ **Responsive Design**: Mobile-first responsive layout  
✅ **Clean Code**: Well-organized, documented codebase  
✅ **GitHub Repository**: Complete with documentation  
✅ **Live Demo**: Deployed and accessible online  

## 🏆 Bonus Features Implemented

✅ **Advanced Filtering**: Search, multiple filter combinations  
✅ **Task Statistics**: Completion rates and analytics  
✅ **Categories**: Custom task categorization  
✅ **Due Dates**: Date tracking with overdue indicators  
✅ **Priority Levels**: Visual priority indicators  
✅ **Smooth Animations**: Enhanced user experience  
✅ **Dark Mode Ready**: Prepared for theme switching  
✅ **Accessibility**: Keyboard navigation and screen reader support  

## 📞 Contact

For any questions about this implementation, please reach out:

- **Email**: iamaryan721@gmail.com
- **LinkedIn**: [heyoaryan]([url](https://github.com/heyoaryan))
- **GitHub**:   [heyoaryan](https://www.linkedin.com/in/aryan-singh-thakur-12a422281/)

---

**Built with ❤️ for the TaskFlow Intern Assignment**
