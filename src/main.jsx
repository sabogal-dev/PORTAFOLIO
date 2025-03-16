import { createRoot } from 'react-dom/client'
import './portafolio.css'

import Principal from './Principal.jsx'
import Proyectos from './proyectos.jsx';
import Nav from './nav.jsx'
import Experiencia from './experiencia.jsx';

// Supports weights 100-900
import '@fontsource-variable/onest';
createRoot(document.getElementById('root')).render(
  <>
    <Nav />
    <Principal />
    <Proyectos />
    <Experiencia/>
  </>
)
