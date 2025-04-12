// importacion dependecias
import { createRoot } from 'react-dom/client'

// importacion de estilos
import './styles/portafolio.css'

// importacion de componentes
import Proyectos from './proyectos.jsx';
import Experiencia from './experiencia.jsx';

// importacion fuentes -- Supports weights 100-900
import '@fontsource-variable/onest';


createRoot(document.getElementById('ProyectosReact')).render(
  <>
    <Proyectos />
    <Experiencia />
  </>
)
