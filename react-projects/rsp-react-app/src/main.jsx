import { createRoot } from 'react-dom/client'
import './index.css'
import { AppComponent } from './AppComponent'
import { RspProvider} from "./context/RspProvider"
createRoot(document.getElementById('root')).render(
  <RspProvider>
    <AppComponent/>
  </RspProvider>,
)
