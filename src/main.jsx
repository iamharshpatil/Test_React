import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Wrapper from "./assets/utils/Wrapper";


createRoot(document.getElementById('root')).render(
  <Wrapper>
    <App />
  </Wrapper>

)
