import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar';
import ErrorBoundary from './components/organisms/ErrorBoundary/ErrorBoundary';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function ThemedApp() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="relative animate-pulse">
          <div className="absolute inset-0 rounded-full animate-ping bg-red-500 opacity-30"></div>
          <img
            src={'/cinema_paradiso.png'}
            alt="Cinema Paradiso"
            loading='eager'
            className="relative z-10 h-64 w-auto object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-black text-white' 
        : 'bg-black text-gray-900'
    }`}>
      <Navbar />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <ThemedApp />
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
