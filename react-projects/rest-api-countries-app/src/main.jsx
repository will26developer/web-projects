import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RestApiCountriesProvider } from './context/RestApiCountriesProvider.jsx' 
createRoot(document.getElementById('root')).render(
  <RestApiCountriesProvider>
    <App/>
  </RestApiCountriesProvider>
)