import { createRoot } from 'react-dom/client'
import { RspProvider } from "./provider/RspProvider.jsx";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <RspProvider>
    <App />
  </RspProvider>
)
