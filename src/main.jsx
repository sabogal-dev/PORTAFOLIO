import { createRoot } from 'react-dom/client'
import './styles/portafolio.css'

import Proyectos from './proyectos.jsx';
import Experiencia from './experiencia.jsx';

// Supports weights 100-900
import '@fontsource-variable/onest';
createRoot(document.getElementById('ProyectosReact')).render(
  <>
    <Proyectos />
    <Experiencia/>
  </>
)
