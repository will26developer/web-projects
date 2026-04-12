import { createRoot } from 'react-dom/client'
import './index.css'
import { RestApiCountriesProvider } from "./context/RestApiCountriesProvider";
import { AppRouter } from './router/AppRouter';

createRoot(document.getElementById('root')).render(
  <RestApiCountriesProvider>
    <AppRouter/>
  </RestApiCountriesProvider>
)