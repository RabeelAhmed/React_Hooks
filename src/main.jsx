import ReactDOM from 'react-dom/client'; // Correct import for ReactDOM
import { AppProvider } from '../components/contextApi/useContext'; // Ensure correct path to useContext
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>,
);
