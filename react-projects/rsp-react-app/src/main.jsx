import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RspProvider} from './context/RspProvider.jsx';
import { AppComponent } from './AppComponent.jsx';
createRoot(document.getElementById('root')).render(
  <RspProvider>
    <AppComponent />
  </RspProvider> 
)
