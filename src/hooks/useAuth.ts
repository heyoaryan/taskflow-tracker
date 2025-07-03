import { useState, useEffect } from 'react';
import { User, AuthState } from '../types/task';

const STORAGE_KEY = 'tasktracker_auth';

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    // Load auth state from localStorage on app start
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsedAuth = JSON.parse(stored);
        setAuthState(parsedAuth);
      } catch (error) {
        console.error('Failed to parse stored auth state:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple demo authentication - in real app, this would call an API
    if (email && password.length >= 6) {
      const user: User = {
        id: '1',
        email,
        name: email.split('@')[0],
      };
      
      const newAuthState = {
        user,
        isAuthenticated: true,
      };
      
      setAuthState(newAuthState);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newAuthState));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
    });
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    ...authState,
    login,
    logout,
  };
};