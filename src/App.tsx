import { Outlet } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar';
import ErrorBoundary from './components/organisms/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <Outlet />
      </div>
    </ErrorBoundary>
  );
}

export default App
