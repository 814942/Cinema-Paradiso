import { createContext, useContext, type ReactNode, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  // login: (email: string, password: string) => Promise<void>;
  // register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Verificar autenticación al cargar
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Aquí iría la lógica para verificar el token de autenticación
        // Por ahora simulamos una carga
        const token = localStorage.getItem('authToken');
        if (token) {
          // Simular obtención de datos del usuario
          setUser({
            id: '1',
            name: 'Usuario Demo',
            email: 'demo@example.com'
          });
        }
      } catch (error) {
        console.error('Error al verificar autenticación:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // const login = async (email: string, password: string) => {
  //   try {
  //     setIsLoading(true);
  //     // Aquí iría la llamada a la API para hacer login
  //     // Simulamos una llamada a la API
  //     await new Promise(resolve => setTimeout(resolve, 1000));
      
  //     // Simulamos una respuesta exitosa
  //     const mockUser = {
  //       id: '1',
  //       name: 'Usuario Demo',
  //       email
  //     };
      
  //     setUser(mockUser);
  //     localStorage.setItem('authToken', 'dummy-token');
  //     navigate('/');
  //   } catch (error) {
  //     console.error('Error en login:', error);
  //     throw error;
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const register = async (name: string, email: string, password: string) => {
  //   try {
  //     setIsLoading(true);
  //     // Aquí iría la llamada a la API para registrar al usuario
  //     await new Promise(resolve => setTimeout(resolve, 1000));
      
  //     // Simulamos un registro exitoso
  //     const mockUser = {
  //       id: '1',
  //       name,
  //       email
  //     };
      
  //     setUser(mockUser);
  //     localStorage.setItem('authToken', 'dummy-token');
  //     navigate('/');
  //   } catch (error) {
  //     console.error('Error en registro:', error);
  //     throw error;
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <AuthContext.Provider 
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        // login,
        // register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
