import { createRoot } from 'react-dom/client'
import Proyectos from './components/proyectos';
import Experiencia from './components/experiencia';
import '@fontsource-variable/onest';

createRoot(document.getElementById('ProyectosReact')).render(
  <>
    <Proyectos />
    <Experiencia />
  </>
)
