import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from "./router/AppRouter.jsx";
import { RestApiCountriesProvider } from "./context/RestApiCountriesProvider.jsx";

createRoot(document.getElementById('root')).render(
  <RestApiCountriesProvider>
    <AppRouter />
  </RestApiCountriesProvider>
)
