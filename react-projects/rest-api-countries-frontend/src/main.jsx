import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouterComponent } from './router/AppRouterComponent'
import { RestApiCountriesProvider } from "./context/RestApiCountriesProvider"

createRoot(document.getElementById('root')).render(
  <RestApiCountriesProvider>
    <AppRouterComponent/>
  </RestApiCountriesProvider>
)
