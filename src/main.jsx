import { createRoot } from 'react-dom/client'
import Principal from './Principal.jsx'
import Proyectos from './proyectos.jsx';
import './portafolio.css'



// Supports weights 100-900
import '@fontsource-variable/onest';
createRoot(document.getElementById('root')).render(
  <>
    <Principal />
    <Proyectos />
  </>
)
