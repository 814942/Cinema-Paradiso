import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('system');
  const [isDark, setIsDark] = useState(false);

  // Efecto para cargar el tema guardado
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Usar la preferencia del sistema por defecto
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Efecto para aplicar el tema
  useEffect(() => {
    const root = window.document.documentElement;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Eliminar clases previas
    root.classList.remove('light', 'dark');
    
    // Aplicar el tema seleccionado
    if (theme === 'system') {
      const systemTheme = systemDark ? 'dark' : 'light';
      root.classList.add(systemTheme);
      setIsDark(systemDark);
    } else {
      root.classList.add(theme);
      setIsDark(theme === 'dark');
    }
    
    // Guardar preferencia
    if (theme !== 'system') {
      localStorage.setItem('theme', theme);
    } else {
      localStorage.removeItem('theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};
