import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import { MainLayout } from './componets/MainLayout';
import { AppProvider } from './contexts/AppContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Router>
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
